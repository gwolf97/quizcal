import React from "react";
import { decode } from "html-entities";

const Question = (props) => {
    return ( 
        <div>
            <li>{decode(props.question)}</li>
            <input type="radio" />
        </div>
     );
}
 
export default Question;