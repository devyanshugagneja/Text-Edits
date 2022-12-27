import React, { useState } from "react";
export default function TextForm(props) {
  const handleCopy = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text has been copied","success")
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared","success")
  };
  const handleloclick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been converted to lower case","success");
  };
  const handleupclick = () => {
    console.log("uppercase was clicked" + Text);
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted to upper case","success")
  };
  const handleOnChange = (event) => {
    //console.log("on change");
    setText(event.target.value);
  };

  const [Text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={Text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" 
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" disabled={Text.length===0} onClick={handleupclick}
        >
          Convert to UpperCase
        </button>
        <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleloclick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2 my-1" disabled={Text.length===0} onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClear} disabled={Text.length===0}>
          Clear Text
        </button>
      </div>
      <div className="container my-3"  style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>Your text summary</h1>
        <p>
          {Text.split(" ").filter((element)=>{return element.length!==0
          }).length} words and {Text.length} characters
        </p>
        <p>
          Time user will take to read it = {0.08 * Text.split(" ").filter((element)=>{return element.length!==0
          }).length}{" "}
          minutes
        </p>

        <h2>Preview</h2>
        {Text.length>0?Text:"Enter something in text area to preview it here"}
      </div>
    </>
  );
}
