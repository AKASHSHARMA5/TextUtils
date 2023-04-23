import React from 'react'

export default function About(props) {

    //const [btntext,changebtntext]=useState("Change into dark mode")
    /*
    const [mystyle,setmystyle]=useState(
        {
        color:"black",
        backgroundColor:"white"
    }
    )
    */
    /* we used this syntax when we enable dark mode for only about text with using a button
    const changebg=()=>{
        if(mystyle.color==="black" && mystyle.backgroundColor==="white"){
            setmystyle({
                color:"white",
                backgroundColor:"black"
            })
            changebtntext("Change into light mode")
        }
        else{
            setmystyle({
                color:"black",
                backgroundColor:"white"
            })
            changebtntext("Change into dark mode")
        }
    }
    */
    let mystyle = {
        color: props.mode === "dark" ? "white" : "black",
        backgroundColor: props.mode === "dark" ? "#123456" : "white"
    }
    return (
        
        <div className="container">
            <h1 style={mystyle} className={` container my-3 bg-${props.bck}`}>About us</h1>
            <div style={mystyle} className="accordion" id="accordionExample">
                
                <div className="card">
                    <div style={mystyle} className={`card-header bg-${props.bck}`} id="headingOne">
                        <h2 className="mb-0">
                            <button style={mystyle} className={`btn btn-link btn-block text-left collapsed bg-${props.bck}`} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Analyze Your text
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div style={mystyle} className={`card-body bg-${props.bck}`}>
                            TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count , Character count
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div style={mystyle} className={`card-header bg-${props.bck}`} id="headingTwo">
                        <h2 className="mb-0">
                            <button style={mystyle} className={`btn btn-link btn-block text-left collapsed bg-${props.bck}`} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Free to use
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div style={mystyle} className={`card-body bg-${props.bck}`}>
                            Textutils is a free Character count tool that provides instant character count and word count statitics for a given text.TestUtils reports the number of words and characters.
                            Thus,it is suitable for writing text with word/character limit.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div style={mystyle} className={`card-header bg-${props.bck}`} id="headingThree">
                        <h2 className="mb-0">
                            <button style={mystyle} className={`btn btn-link btn-block text-left collapsed bg-${props.bck}`} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Browser compatible
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div style={mystyle} className={`card-body bg-${props.bck}`}>
                            This word counter software works in any web browsers such as Chrome,Firefox,Internet explore ,Safari,Opera etc.It suits to count characters in facebook/meta,blogs,books,excel,
                            document,pdf document,essay etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
