import { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponents = () => {
    const [parentName , setParentName] = useState('Parent');

    function greetParent(){
        setParentName('I LOVE YOU');
        alert(`HELLO ${parentName}`);
    }
    return ( 
        <div>
         <ChildComponent greetHandler = {greetParent}/>
           <h1>{parentName}</h1>

        </div>
     );
}
 
export default ParentComponents;