import logo from "./logo.svg";
import style from "./App.module.css";
import { EmailIcon, PasswordIcon, PhoneIcon, UserIcon } from "./Icons/FabIcons";
import { useRef, useState } from "react";

function App() {
  const nameRef = useRef();
  const emailRef = useRef();
  const numRef = useRef();
  const passRef = useRef();
  const [pType, setpType] = useState("password");
  const [showContainer, setShowContainer] = useState(true);
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0]);
    const name = nameRef.current.value;

    if (
      name.trim().length === 0 ||
      emailRef.current.value.trim().length === 0 ||
      numRef.current.value.trim().length === 0 ||
      passRef.current.value.trim().length === 0
    ) {
      alert("Please enter Valid data");
      return;
    }
    const userName = name
      .split(" ")
      .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
      .join(" ");
    setName(userName);
    setShowContainer(false);
  };
  const hanleClick = () => {
    if (pType === "password") {
      setpType("text");
    } else {
      setpType("password");
    }
  };
  return (
    <div className={style.container}>
      {!showContainer && <h2>You have Logged In sucessfully, {name}.</h2>}
      {showContainer && (
        <form onSubmit={handleSubmit} className={style.formContainer}>
          <div className={style.formComp}>
            <UserIcon />
            <input placeholder=" User Name" ref={nameRef} type="text"></input>
          </div>
          <div className={style.formComp}>
            <EmailIcon />
            <input placeholder=" Email" ref={emailRef} type="email"></input>
          </div>
          <div className={style.formComp}>
            <PhoneIcon />
            <input
              placeholder=" Mobile Number"
              ref={numRef}
              type="text"
            ></input>
          </div>
          <div className={style.formComp}>
            <PasswordIcon changeType={hanleClick} type={pType} />
            <input placeholder=" Password" ref={passRef} type={pType}></input>
          </div>
          <button type="submit" className={style.button}>
            Register
          </button>
        </form>
      )}
    </div>
  );
}

export default App;
