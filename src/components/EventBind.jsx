import { useState } from "react";

const EventBind = () => {
    const [greet , setGreet] = useState('lame');

    function clickHandler(){
        setGreet ('jeco');

    }
    return ( 
        <div>
            <button onClick={clickHandler} className="mt-10 border-2 p-2">CLICK ME</button>
            <h1>{greet }</h1>

        </div>
     );
}
 
export default EventBind
