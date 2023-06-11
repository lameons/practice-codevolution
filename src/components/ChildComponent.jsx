
function ChildComponent(props ) {
  return (
    <div>
           <button onClick={props.greetHandler} className="mt-10 border-2 p-2">GREET PARENT</button>
    </div>
  )
}

export default ChildComponent