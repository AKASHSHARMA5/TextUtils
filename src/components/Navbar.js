import React from "react";
import PropTypes from "prop-types";
//import { Link } from "react-router-dom";

export default function Navbar(props) {
 const changebr1=()=>{
   props.CHANGECLR("danger")
  }
  const changebr2=()=>{
     props.CHANGECLR("primary")
  }
  const changebr3=()=>{
     props.CHANGECLR("success")
  }
  const changebr4=()=>{
     props.CHANGECLR("warning")
  }
  const changebr5=()=>{
     props.CHANGECLR("dark")
  }
  const changebr6=()=>{
     props.CHANGECLR("info")
  }
  return (
          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <a className="navbar-brand" href="#">
          {props.tittle}
         </a>     {/*for github-page hosting because github not use react router*/}
        {/*<Link className="navbar-brand" to="/">
          {props.tittle}
        </Link>*/}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>   {/*for github page hosting*/}
             {/* <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
            </Link>*/}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {props.about}
                </a>  {/*for hithub page hosting*/}
            {/*  <Link className="nav-link" to="/about">
                {props.about}
              </Link>*/}
            </li>
           
          </ul>
          <div className="dropdown mx-5">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                more mode
              </button>
              <div className="dropdown-menu">
                 <button className="btn btn-danger my-2 mx-2" onClick={changebr1}>red</button>
                 <button className="btn btn-primary my-2 mx-2" onClick={changebr2}>blue</button>
                 <button className="btn btn-success mx-2 my-2" onClick={changebr3}>green</button>
                 <button className="btn btn-warning mx-2 my-2" onClick={changebr4}>yellow</button>
                 <button className="btn btn-dark mx-2 my-2" onClick={changebr5}>black</button>
                 <button className="btn btn-info mx-2 my-2" onClick={changebr6}>light blue</button>
                {/* <button className="btn btn-info mx-2 my-2" onClick={changebr7}>Enter custom color</button>*/}
              </div>
          </div>
          <form className="form-inline my-2 my-lg-0">
          <div className={`form-check form-switch text-${props.mode==="light"? "dark":"light"}`} >
             <input className="form-check-input" onClick={props.togglemode} type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch {props.mode} mode</label>
           </div>
          </form>
          </div>
      </nav>
  );
}

Navbar.propTypes = {
  tittle: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  tittle: "text and utils",
  about: "more and more about",
};
