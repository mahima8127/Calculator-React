import "../Component/Input.css";
import React from 'react';
 const Input =({text,result})=>{ 
    return(
        <div className="input-wrapper"> 
        <div className="result">
            <h2>{result}</h2>

        </div>
        <div className="text">
            <h3>{text}</h3>

        </div>
        </div>
    );
 }

 export default Input;


