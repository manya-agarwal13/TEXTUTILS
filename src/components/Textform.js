import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick= () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleOnChange= (event) => {
        const eTarget = event.target.value;
        setText(eTarget);
    }
    const handleLowClick= () => {
      let newtext = text.toLowerCase();
      setText(newtext);
      props.showAlert("Converted to Lower Case", "success");
    }
    const handleCopyClick= () => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text Copied", "success");
    }
    const handleExtraSpaces= () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra Spaces Removed", "success");
    }
    
    const [text, setText]= useState('Enter text here');
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}> 
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white' , color: props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="10"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2" style={{color: props.mode === 'dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").filter((element) => {return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}