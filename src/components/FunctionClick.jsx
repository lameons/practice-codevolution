const FunctionClick = () => {
    function clickHandler() {
        console.log(alert('Button clicked'));
    }

    return ( 
        <div>
        <button className="border-2 p-1 m-2 bg-black text-white" 
        onClick={clickHandler}
        >click</button>
        </div>
     );
}
 
export default FunctionClick;