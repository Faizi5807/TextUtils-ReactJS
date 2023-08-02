import React,{useState} from 'react'

export default function About(props) {

const[modee,setmode]=useState(
    {
        color:'black',
        backgroundColor:'white'
    }
)
const [btnname,setBtnname]=useState('Enable Dark Mode')
const toggleshift=()=>
{
    if(modee.color==='black'
    )
    {
        setmode(
            {
                color:'white',
                backgroundColor:'black'
            }
        )
        setBtnname('Enable Light Mode')
    }
    else{
        setmode(
            {
                color:'black',
                backgroundColor:'white'
            }
        )
        setBtnname('Enable Dark Mode')
    }
}
  return (
    <div>
        <h2 className='my-3' style={{color: props.mode==='dark'?'white':'black'}} ><b><u><i>ABOUT US</i></u></b></h2>
        <div className="accordion accordion-flush" id="accordionFlushExample" style={modee}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={modee} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" style={modee} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={modee} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" style={modee} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={modee} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" style={modee} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
<div className="container">
    <button onClick={toggleshift} className="btn btn-outline-dark my-2" >{btnname}</button>
</div>
    </div>
  )
}
