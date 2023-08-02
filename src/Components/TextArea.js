import React,{useState} from 'react'

export default function TextArea(props) {
    const CTUC=()=>
    {
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const CTLC=()=>
    {
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    const HOC=(event)=>
    {
        setText(event.target.value)
    }
    const refresh=()=>
    {
        setText("");
    }
    const WhiteSpace = () => {
      let updated_text = text.replace(/\s/g, '')
      setText(updated_text)
  }
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text)
    // isCopied("Copied to Clipboard")
    // setTimeout(() => {
    //     isCopied("Copy Text")
    // }, 1200);
    
}
const handleReverseClick = () => {
  let reversedText = text.split("").reverse().join("")
  setText(reversedText);
  // isReversed("Text Reversed")
  // setTimeout(() => {
  //     isReversed("Reverse Text")
  // }, 1200);
}
function textToSpeech(){
  const Speech= new SpeechSynthesisUtterance();
  const message= document.getElementById("exampleFormControlTextarea1").value;
  Speech.lang='eng';
  Speech.text= message;
  window.speechSynthesis.speak(Speech);
}


    const [text, setText] = useState("");
  return (
    <div style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.Heading}</h1>
         
<div className="mb-3">
  
  <textarea style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'black'}} className="form-control" id="exampleFormControlTextarea1" onChange={HOC} rows="7" coloumns="10" value={text}></textarea>
</div>

<button className="btn btn-info" onClick={CTUC}>Convert to Uppercase</button> 
&nbsp;
<button className="btn btn-info" onClick={CTLC}>Convert to Lowercase</button> 
&nbsp;
<button className="btn btn-info" onClick={handleCopyClick}>Copy Text</button>
&nbsp;
<button className="btn btn-info" onClick={WhiteSpace}>Remove Spaces</button>
&nbsp;
<button className="btn btn-info" onClick={handleReverseClick}>Reverse Text</button>
&nbsp;
<button className="btn btn-info" onClick={textToSpeech}>Text To Speech</button>
&nbsp;
<button className="btn btn-success" onClick={refresh}>Clear</button>
&nbsp;

<div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2><i><u>Text Summary</u></i></h2>
    <p>{text.split(" ").length} words and {text.length} Characters </p>
    <p>{0.008*text.split(" ").length}min Reading Time</p>
    <h3>Preview:</h3>
    <p>{text}</p>
</div>
</div>
  )
}
