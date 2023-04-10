import "./App.css";
import { btnArr } from "./data/btnData";
import { colorArr } from "./data/Colors";
import { operandArr } from "./data/btnData";
import { useState } from "react";
function App() {
  const [paraText, setparaText] = useState("");
  const [evalText, setevalText] = useState("");
  const [ansText, setansText] = useState("");
  const [mycolor, setmycolor] = useState("#d3fc2f");
  const changeBackground = () => {
    console.log("hey i was clicked");
    const idx = Math.floor(Math.random() * colorArr.length);
    setmycolor(colorArr[idx]);
  };
  const handleAns = () => {
    try {
      console.log(ansText);
      const ans = eval(ansText);
      setparaText(evalText + "= ");
      if (ans % 1 !== 0) {
        setevalText(ans.toPrecision(6));
      } else {
        setevalText(ans);
      }
    } catch (error) {
      console.log(error);
      setparaText(evalText + "= ");
      setevalText("Error!");
      setansText("");
    }
  };
  const handleBtn = (item) => {
    if (
      operandArr.includes(item) &&
      operandArr.includes(evalText[evalText.length - 1])
    ) {
      return;
    }
    if (item !== "Surprise" && paraText.length !== 0) {
      setparaText("");
      setevalText("");
      setansText("");
      return;
    }
    console.log(item);
    switch (item) {
      case "sin":
        setevalText(evalText + "sin(");
        setansText(ansText + "Math.sin(");
        break;
      case "cos":
        setevalText(evalText + "cos(");
        setansText(ansText + "Math.cos(");
        break;
      case "tan":
        setevalText(evalText + "tan(");
        setansText(ansText + "Math.tan(");
        break;
      case "(":
        setevalText(evalText + "(");
        setansText(ansText + "(");
        break;
      case ")":
        setevalText(evalText + ")");
        setansText(ansText + ")");
        break;
      case "ac":
        setevalText("");
        setansText("");
        break;
      case "del":
        if (evalText.length <= 0) {
          break;
        } else if (evalText.length == 1) {
          setevalText(evalText.slice(0, evalText.length - 1));
          setansText(ansText.slice(0, ansText.length - 1));
        } else {
          if (
            evalText[evalText.length - 2] === "n" ||
            evalText[evalText.length - 2] === "s" ||
            evalText[evalText.length - 2] === "g"
          ) {
            setevalText(evalText.slice(0, evalText.length - 4));
            setansText(ansText.slice(0, ansText.length - 9));
          } else {
            setevalText(evalText.slice(0, evalText.length - 1));
            setansText(ansText.slice(0, ansText.length - 1));
          }
        }

        break;
      case "log":
        setevalText(evalText + "log(");
        setansText(ansText + "Math.log(");
        break;
      case "%":
        setevalText(evalText + "%");
        setansText(ansText + "%");
        break;

      case "0":
        setevalText(evalText + "0");
        setansText(ansText + "0");
        break;
      case "1":
        setevalText(evalText + "1");
        setansText(ansText + "1");
        break;
      case "2":
        setevalText(evalText + "2");
        setansText(ansText + "2");
        break;
      case "3":
        setevalText(evalText + "3");
        setansText(ansText + "3");
        break;
      case "4":
        setevalText(evalText + "4");
        setansText(ansText + "4");
        break;
      case "5":
        setevalText(evalText + "5");
        setansText(ansText + "5");
        break;
      case "6":
        setevalText(evalText + "6");
        setansText(ansText + "6");
        break;
      case "7":
        setevalText(evalText + "7");
        setansText(ansText + "7");
        break;
      case "8":
        setevalText(evalText + "8");
        setansText(ansText + "8");
        break;
      case "9":
        setevalText(evalText + "9");
        setansText(ansText + "9");
        break;
      case "/":
        setevalText(evalText + "/");
        setansText(ansText + "/");
        break;
      case "x":
        setevalText(evalText + "x");
        setansText(ansText + "*");
        break;
      case "-":
        setevalText(evalText + "-");
        setansText(ansText + "-");
        break;
      case ".":
        setevalText(evalText + ".");
        setansText(ansText + ".");
        break;
      case "+":
        setevalText(evalText + "+");
        setansText(ansText + "+");
        break;
      case "π":
        setevalText(evalText + "π");
        setansText(ansText + "Math.PI");
        break;
      case "sqrt":
        setevalText(evalText + "sqrt(");
        setansText(ansText + "Math.sqrt(");
        break;
      case "^":
        setevalText(evalText + "^");
        setansText(ansText + "**");
        break;
      case "Surprise":
        changeBackground();
        break;
      case "=":
        handleAns();
        break;
      default:
        break;
    }
  };
  console.log(mycolor);
  return (
    <div style={{ backgroundColor: `${mycolor}` }} className="container">
      <div className="calcContainer">
        <div className="displayContainer">
          <p style={{ color: `${mycolor}` }}>{paraText}</p>
          <h1 style={{ color: `${mycolor}` }}>{evalText}</h1>
        </div>
        <div className="btnContainer">
          {btnArr.map((item) => (
            <div
              style={{
                backgroundColor: `${mycolor}`,
              }}
              className={"btn " + item}
              onClick={handleBtn.bind(null, item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
