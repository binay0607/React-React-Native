import style from "./App.module.css";
import { useRef, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const numRef = useRef();
  const passRef = useRef();
  const genRef = useRef();
  const langRef = useRef();
  const zcodeRef = useRef();
  const aboutRef = useRef();
  const [gender, setgender] = useState("");
  const [interests, setInterests] = useState([]);
  const handleInterests = (interest) => {
    console.log(interest);
    if (interests.includes(interest)) {
      setInterests((prevInt) => prevInt.filter((item) => item !== interest));
    } else {
      setInterests((prevInt) => [...prevInt, interest]);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/success", {
      state: {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passRef.current.value,
        phone: numRef.current.value,
        gender: gender,
        language: langRef.current.value,
        zcode: zcodeRef.current.value,
        about: aboutRef.current.value,
        interests: interests,
      },
    });
  };
  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.formContainer}>
        <div className={style.formComp}>
          <label className={style.label}>Name:</label>
          <input className={style.input} ref={nameRef} type="text"></input>
        </div>
        <div className={style.formComp}>
          <label className={style.label}>Email:</label>
          <input className={style.input} ref={emailRef} type="email"></input>
        </div>
        <div className={style.formComp}>
          <label className={style.label}>Password:</label>
          <input className={style.input} ref={passRef} type="text"></input>
        </div>
        <div className={style.formComp}>
          <label className={style.label}>Phone Number:</label>
          <input className={style.input} ref={numRef} type="text"></input>
        </div>

        <div className={style.formComp}>
          <label ref={genRef} htmlFor="gender" className={style.label}>
            Gender:
          </label>
          <div className={style.radioContainer}>
            <input
              className={style.input}
              type="radio"
              id="gender"
              name="gender"
              value="Male"
              onClick={() => setgender("Male")}
            />
            <label className={style.label} htmlFor="male">
              Male
            </label>
            <input
              className={style.input}
              type="radio"
              id="gender"
              name="gender"
              value="Female"
              onClick={() => setgender("Female")}
            />
            <label className={style.label} htmlFor="female">
              Female
            </label>
            <input
              className={style.input}
              type="radio"
              id="gender"
              name="gender"
              value="Other"
              onClick={() => setgender("Other")}
            />
            <label className={style.label} htmlFor="other">
              Other
            </label>
          </div>
        </div>
        <div className={style.formComp}>
          <label className={style.label}>Language:</label>
          <select
            ref={langRef}
            className={style.select}
            name="language"
            id="language"
          >
            <option value="Select">Select a Language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Odia">Odia</option>
          </select>
        </div>
        <div className={style.formComp}>
          <label className={style.label}>Zip Code:</label>
          <input className={style.input} ref={zcodeRef} type="text"></input>
        </div>
        <div className={style.formComp}>
          <label className={style.label}>About Yourself:</label>
          <textarea ref={aboutRef} type="text"></textarea>
        </div>
        <div className={style.formComp}>
          <label className={style.label}>Interested Fields:</label>
          <div className={style.checkContainer}>
            <div className={style.checkBox}>
              <input
                className={style.check}
                type="checkbox"
                onClick={handleInterests.bind(null, "Tech")}
              ></input>
              <label className={style.label}>Tech</label>
            </div>
            <div className={style.checkBox}>
              <input
                className={style.check}
                type="checkbox"
                onClick={handleInterests.bind(null, "Politics")}
              ></input>
              <label className={style.label}>Politics</label>
            </div>
            <div className={style.checkBox}>
              <input
                className={style.check}
                type="checkbox"
                onClick={handleInterests.bind(null, "Entertainment")}
              ></input>
              <label className={style.label}>Entertainment</label>
            </div>
          </div>
        </div>
        <button type="submit" className={style.button}>
          Register
        </button>
      </form>
    </div>
  );
}

export default HomePage;
