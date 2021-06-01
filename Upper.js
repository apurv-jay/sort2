import './Upper.css';
import {useState} from 'react';


function Upper()
{
    const [input,setInput]=useState("");
    function handleOnchange(event)
    {
        setInput(event.target.value);
    }
    function getarray(event)
    {
        event.preventDefault();
        console.log(input);
    }
    return (
        <div className="UpperPart">
            <div className="Head">
                <h1>SORTING VISUALIZER</h1>
            </div>
            <div className="Input">
                <form id="form" >
                    <div className="eta">
                        <label for="fname"><h2>ENTER THE ARRAY</h2></label>
                    </div>
                    <input type="text" onChange={handleOnchange} id="userInput" size="75" id="userInput"></input>
                    <input type="submit" onClick={getarray}  className="b4"></input>
                    
                </form>
                <form>
                    <div>
                    <input type="button" value="Merge" className="b1"></input>
                    <input type="button" value="Quick" className="b2"></input>
                    <input type="button" value="Bubble" className="b3"></input>
                    <input type="button" value="Selection"></input>
                    </div>
                </form>
            </div>
        </div>

    );
    
}
export default Upper;