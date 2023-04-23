import React,{useState} from 'react'

export default function Textform(props){
    const handleUpClick=()=>{
        //console.log("upparcase was click")
        settext(text.toUpperCase())
        setTimeout(()=>{
          props.showAlert("convert into uppercase","success")
        },1000)
    }
    const handleUpClick2=()=>{
        //console.log("upparcase was click")
        settext(text.toLowerCase())
        setTimeout(()=>{
          props.showAlert("convert into lowercase","success")
        },1000)
    }
    const handleUpClick3=()=>{
        settext(text.trim())
        setTimeout(()=>{
          props.showAlert("remove whitespaces","success")
        },1000)
    }
    const handleUpClick4=()=>{
        //console.log("upparcase was click")
        settext("")
        setTimeout(()=>{
          props.showAlert("text cleared","success")
        },1000)
    }
    const handleUpClick5=()=>{
      navigator.clipboard.writeText(text)
      document.getSelection().removeAllRanges();
      setTimeout(()=>{
        props.showAlert("text copied","success")
      },1000)
    }
    const handleUpClick6=()=>{
      let newtext=text.split(/[ ]+/)
      settext(newtext.join(" "))
      setTimeout(()=>{
        props.showAlert("remove extra spaces","success")
      },1000)
    }
    
    const handleOnChange=(event)=>{
        //console.log("onchange")
        settext(event.target.value)
    }
    const [text,settext]=useState("");
    //text="helo akash"  wrong way to change the state of text
    //settext("new text")  //right way to change the state of text  
    return(
        <>
          <div id='chgclr' style={{color: props.mode==="dark"? "white":"black"}}>
            <div className="container">
              <h1>{props.heading}</h1>
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"? "rgb(184 184 184 / 28%)":"white",color: props.mode==="dark"? "white":"black"}} id="mybox" rows="7"></textarea>
              <button disabled={text.length===0} className="btn btn-primary my-3" onClick={handleUpClick} >convert into uppercase</button>
              <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleUpClick2} >convert into lowercase</button>
              <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleUpClick3} >Remove whitespace</button>
              <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleUpClick4} >Clear</button>
              <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleUpClick5} >Copy Text</button>
              <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleUpClick6} >Remove extra spaces</button>
            </div>
            <div className="container">
              <h2>Your text summary</h2>
              <p>Total words:{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
              <p>Toatl Character:{text.length}</p>
              <h2>Text preview</h2>
              <p>{text.length>0? text:"nothing to preview!"}</p>
            </div>
           </div>
      </>
    )
}