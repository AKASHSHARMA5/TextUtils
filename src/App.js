//import logo from './logo.svg';
import "./App.css";
//import About from "./components/About";
import React,{useState} from 'react'
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
/*
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

*/

function App() {
  const [mode,setmode]=useState("light")
  
  const togglemode=()=>{
    if(mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor= "#123456"
      setTimeout(()=>{
        showalert("Dark mode enable","success")
      },1000)
      //document.title="TextUtils- Dark mode"
      /*
      setInterval(()=>{
        document.title="TextUtils is amazing"
      },2000)
      setInterval(()=>{
        document.title="Download urgent"
      },1500)
      */
      
    }
    else{
      setmode("light")
      document.body.style.backgroundColor="white"
      setTimeout(()=>{
        showalert("Light mode enable","success")
      },1000)
      //document.title="TextUtils- Light mode"
    }
  }
  const [alert,setalert]=useState(null)
  const showalert=(message,type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setalert(null)
    },1000)
  }
  const removebodyclass=()=>{
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-info")
    document.body.classList.remove("bg-success")
    document.body.classList.remove("bg-dark")
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-light")
   }
  const [COLOR,SETCOLOR]=useState("bg-light")
  const changeclr=(bck)=>{
    removebodyclass()
    SETCOLOR(bck)     
    document.body.classList.add('bg-'+bck)

  }
  
  return (
    <>
   {/* <Router>*/}
      <Navbar tittle="TextUtils" about="about" mode={mode} togglemode={togglemode} CHANGECLR={changeclr} />
      <Alert Alert={alert} />
      <Textform showAlert={showalert} heading="Enter text here" mode={mode} /> 
      {/*<About mode={mode}/>*/}
     {/*<Routes>
        <Route exact path="/about" element={<About bck={COLOR} mode={mode} />}></Route>
        <Route exact path="/" element={<Textform showAlert={showalert} heading="Enter text here" mode={mode} />}></Route>
  </Routes>*/}
   {/* </Router>*/}
    </>
  );
}

export default App;
