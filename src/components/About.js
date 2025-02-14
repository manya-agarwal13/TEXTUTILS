// import React, { useState } from 'react'
import React from 'react'


export default function About(props) {
    // const [myStyle,setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor: 'white'
    // })

    // const [btntext, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () => {
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor: 'black',
    //             border:'1px solid white'
    //         })
    //         setBtnText("Enable light mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark mode")
    //     }
    // }

    let myStyle= {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'#13466e':'white'
    }
    
  return (
        <div className="container" style={myStyle}>
            <h2 className='my-2'>About Us</h2>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
        <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze Your Text</strong>
            </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils gives us a way to analyze your text quickly and efficiently. Be it word count, character count or
            </div>
        </div>
        </div>
        <div className="accordion-item">
        <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
            </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils is a free character counter tool that provides instant character counter & word counter for a given text. TextUtils report the number of words and characters. Thus it is suitable for writing text with word/character limit.
            </div>
        </div>
        </div>
        <div className="accordion-item">
        <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compatible</strong> 
            </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            Rhis word counter software works in any web broser such as chrome, firefox, internet explorer, safari, opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays etc.
            </div>
        </div>
        </div>
    </div>
    {/* <div className="container  my-3">
    <button type="button" onClick={toggleStyle} className="btn btn-primary">{btntext}</button>
    </div> */}
    </div>
  )
}
