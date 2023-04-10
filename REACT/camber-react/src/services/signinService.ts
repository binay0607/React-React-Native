import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool,
  CognitoUserSession,
} from "amazon-cognito-identity-js";
import { config } from "aws-sdk";
import { CognitoIdentityCredentials } from "aws-sdk/lib/core";
import { AWS_CONFIG, AWS_CREDENTIALS } from "../constants/aws_config";
import { IUser } from "../interfaces/user";
import { makeid } from "../utils";
import { LocalStorage } from "../utils/localStorage";
/**
 * @summary AWS cognito service Factory funtion
 * @returns {Object} object of cognito service methods
 */
export function cognitoService() {
  /**
   * Configure AWS cognito metadata
   */
  let cognitoUser: CognitoUser | null = null;
  const poolData = {
    UserPoolId: AWS_CONFIG.userPoolId,
    ClientId: AWS_CONFIG.clientId,
    region: AWS_CONFIG.region,
  };
  config.region = poolData.region;
  config.credentials = new CognitoIdentityCredentials({
    IdentityPoolId: AWS_CONFIG.identityPoolId,
  });
  config.update({
    accessKeyId: AWS_CREDENTIALS.accessKeyId,
    secretAccessKey: AWS_CREDENTIALS.secretAccessKey,
  });
  const userPool = new CognitoUserPool(poolData);

  function initConfigCredentials(jwtToken: string) {
    const logins = {
      [AWS_CONFIG.cognitoEndpoint + "/" + AWS_CONFIG.userPoolId]: jwtToken,
    };
    config.credentials = new CognitoIdentityCredentials({
      IdentityPoolId: AWS_CONFIG.identityPoolId,
      Logins: logins,
    });
  }

  /**
   * @summary Register a User on Aws Cognito
   * @param data User payload
   * @returns promise to return a CognitoUser
   */
  function registerUser(data: IUser) {
    const attributeList: CognitoUserAttribute[] = [];

    const dataEmail = {
      Name: "email",
      Value: data.email,
    };
    const dataAdmin = {
      Name: "custom:Camber",
      Value: data.admin ? "1" : "",
    };
    const dataGivenName = {
      Name: "given_name",
      Value: data.first,
    };
    const dataFamilyName = {
      Name: "family_name",
      Value: data.last,
    };
    const dataClientName = {
      Name: "custom:client_name",
      Value: data.clientName ? data.clientName : "",
    };
    const dataBranch = {
      Name: "custom:branches",
      Value: data.branches ? data.branches : "",
    };
    const dataProfile = {
      Name: "custom:ResponderProfile",
      Value: data.responderprofile ? "1" : "0",
    };
    const dataInMarketMonitoring = {
      Name: "custom:InMarketMonitoring",
      Value: data.inmarketmonitoring ? "1" : "0",
    };
    const dataRemarketing = {
      Name: "custom:ReMarketing",
      Value: data.remarketing ? "1" : "0",
    };
    const dataPassword = {
      Name: "custom:password",
      Value: makeid(8),
    };
    const attributeEmail = new CognitoUserAttribute(dataEmail);
    const attributeGivenName = new CognitoUserAttribute(dataGivenName);
    const attributeFamilyName = new CognitoUserAttribute(dataFamilyName);
    const attributeAdmin = new CognitoUserAttribute(dataAdmin);
    const attributeClientName = new CognitoUserAttribute(dataClientName);
    const attributeBranch = new CognitoUserAttribute(dataBranch);
    const attributeProfile = new CognitoUserAttribute(dataProfile);
    const attributeInMarketMonitoring = new CognitoUserAttribute(
      dataInMarketMonitoring
    );
    const attributeRemarketing = new CognitoUserAttribute(dataRemarketing);
    const attributePassword = new CognitoUserAttribute(dataPassword);

    attributeList.push(
      attributeEmail,
      attributeGivenName,
      attributeFamilyName,
      attributeAdmin,
      attributeClientName,
      attributeBranch,
      attributeProfile,
      attributeInMarketMonitoring,
      attributeRemarketing,
      attributePassword
    );
    return new Promise<CognitoUser | null>((resolve, reject) => {
      userPool.signUp(
        data.email,
        dataPassword.Value,
        attributeList,
        [],
        function (err, result) {
          if (err) {
            return reject(err);
          }
          cognitoUser = result?.user || null;
          return resolve(cognitoUser);
        }
      );
    });
  }

  /**
   * @summary SignIn method for AWS cognito
   * @param Username Username or Email
   * @param Password Password
   * @returns {Promise} Promise of user signin
   */
  function signIn(Username: string, Password: string) {
    return new Promise<CognitoUserSession>((resolve, reject) => {
      const authDetails = new AuthenticationDetails({ Username, Password });
      cognitoUser = new CognitoUser({
        Username,
        Pool: userPool,
      });
      cognitoUser.authenticateUser(authDetails, {
        onSuccess: (result) => {
          initConfigCredentials(result.getIdToken().getJwtToken());
          return resolve(result);
        },

        newPasswordRequired(_userAttributes, requiredAttributes) {
          const attributes: Record<string, string | null> = {};
          requiredAttributes.map(function (x: string) {
            attributes[x] = prompt("Enter " + x + " :", "");
          });
          const newPassword =
            prompt(
              "Enter new password (password must contain minimum 8 characters, 1 uppercase letter, and 1 number) ",
              ""
            ) || "";
          cognitoUser?.completeNewPasswordChallenge(
            newPassword,
            attributes,
            this
          );
        },
        onFailure: (error: Error) => {
          return reject(error);
        },
      });
    });
  }

  /**
   * @summary Change password method for AWS cognito
   * @param oldPassword Old password of current auth
   * @param newPassword New password of current auth
   * @returns {Promise} return promise of string `SUCCESS`
   */
  function changePassword(oldPassword: string, newPassword: string) {
    return new Promise<string>((resolve, reject) => {
      if (cognitoUser === null) {
        return reject(new Error("Authentication not found"));
      }
      cognitoUser.changePassword(oldPassword, newPassword, (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(result || "Success");
      });
    });
  }

  /**
   * @summary Confirm password using verification code of AWS cognito
   * @param username Username or Email of cognito user
   * @param verificationCode 6-digit verificationCode
   * @param newPassword New password of user
   * @returns {Promise} return promise of string if success
   */
  function confirmPassword(
    username: string,
    verificationCode: string,
    newPassword: string
  ) {
    return new Promise<string>((resolve, reject) => {
      const userData = { Username: username, Pool: userPool };
      cognitoUser = new CognitoUser(userData);
      cognitoUser.confirmPassword(verificationCode, newPassword, {
        onSuccess: function (success) {
          return resolve(success);
        },
        onFailure: function (err) {
          return reject(err);
        },
      });
    });
  }

  /**
   * @summary SignOut method for AWS cognito
   * @returns {Promise} promise of boolean.Return `true` if SignOut will successful
   */
  function signOut() {
    return new Promise<boolean>((resolve, reject) => {
      if (cognitoUser === null) {
        return reject(new Error("Authentication not found"));
      }
      cognitoUser.signOut();
      resolve(true);
    });
  }

  /**
   * @summary Store `CognitoUser` auth details at localStorage.
   * @param user SignedIn `CognitoUser`
   */
  function setUserObject(user: CognitoUser) {
    const token = user.getSignInUserSession()?.getAccessToken().getJwtToken();
    const idToken = user.getSignInUserSession()?.getIdToken().getJwtToken();
    LocalStorage.update("auth", { token, idToken });
  }

  return {
    registerUser,
    signIn,
    changePassword,
    confirmPassword,
    signOut,
    setUserObject,
  };
}
