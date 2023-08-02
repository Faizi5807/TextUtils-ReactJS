
import './App.css';
// import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import React,{useState} from 'react'

function App() {
  const [mode,setMode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>
  {   
    setalert({
      msg:message,
      typ:type
    })
    setTimeout(() => {
      setalert(null)
    },800);
  }
  const changeMode=()=>
  {
    if(mode==='dark')
   { document.body.style.backgroundColor='#151B54';
   showAlert("You are in a Night Mode Color","success");}
   else 
   {
    setMode('dark');
    document.body.style.backgroundColor='#151B54';
    showAlert("You are in a Night Mode Color","success");
   }
  }
  const Ymode=()=>
  {
    if(mode==='light')
   { document.body.style.backgroundColor='#efcc00';
   showAlert("You are in a Day Mode Color","success");}
   
   else 
   {
    setMode('light');
    document.body.style.backgroundColor='#efcc00';
    showAlert("You are in a Day Mode Color","success");
   }
  }
  const Rmode=()=>
  {
    if(mode==='dark')
   { document.body.style.backgroundColor='#8b0000';
   showAlert("You are in a Night Mode Color","success");}
   else 
   {
    setMode('dark');
    document.body.style.backgroundColor='#8b0000';
    showAlert("You are in a Night Mode Color","success");
   }
  }
  const Gmode=()=>
  {
    if(mode==='light')
   { document.body.style.backgroundColor='#00ff7f';
   showAlert("You are in a Day Mode Color","success");}
   else 
   {
    setMode('light');
    document.body.style.backgroundColor='#00ff7f';
    showAlert("You are in a Day Mode Color","success");
   }
  }
  return (
    <>
    
<Navbar title="TEXTUTILS" mode={mode} changeMode={changeMode} Ymode={Ymode} Rmode={Rmode} Gmode={Gmode}/>
<Alert alert={alert}/>
<div className='container'>
<TextArea Heading="Non Converted Text here:" mode={mode} showAlert={showAlert}/>
</div>
{/* <About mode={mode}/> */}

    </>
  );
}

export default App;
