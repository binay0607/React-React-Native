export function makeid(length: number) {
  const result: string[] = [];
  // Mandatory letters to be used (total 4 conditions)
  const upperCaseMandatoryLetter = "HJKLMNPQ".charAt(
    Math.floor(Math.random() * 8)
  );
  const lowerCaseMandatoryLetter = "abcdefgz".charAt(
    Math.floor(Math.random() * 8)
  );
  const numberMandatoryLetter = "12345678".charAt(
    Math.floor(Math.random() * 8)
  );
  const specialMandatoryLetter = "!@$%&*[}".charAt(
    Math.floor(Math.random() * 8)
  );
  const characters = "ABCDEFG!@$%&*rstuvwxy@!z0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length - 4; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength))
    );
  }
  let finalResult = result.join("");
  const positionArray: number[] = [];
  while (positionArray.length < 4) {
    const randomPosition = Math.floor(Math.random() * length);
    if (positionArray.indexOf(randomPosition) == -1) {
      positionArray.push(randomPosition);
    }
  }
  finalResult = generateRandomPosition(
    finalResult,
    upperCaseMandatoryLetter,
    positionArray[0]
  );
  finalResult = generateRandomPosition(
    finalResult,
    lowerCaseMandatoryLetter,
    positionArray[1]
  );
  finalResult = generateRandomPosition(
    finalResult,
    numberMandatoryLetter,
    positionArray[2]
  );
  finalResult = generateRandomPosition(
    finalResult,
    specialMandatoryLetter,
    positionArray[3]
  );
  return finalResult;
}
export function generateRandomPosition(
  generatedPassword: string,
  newText: string,
  newTextPosition: number
) {
  // const a = "I want apple";
  // const b = " an";
  // const position = 6;
  const updatedPassword = [
    generatedPassword.slice(0, newTextPosition),
    newText,
    generatedPassword.slice(newTextPosition),
  ].join("");
  return updatedPassword;
}
