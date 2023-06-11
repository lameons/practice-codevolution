/* eslint-disable react/prop-types */

const Greet = (props) => {
    return ( 
        <div>
        <h1 className="text-6xl">Hello {props.name} a.k.a {props.heroName}</h1>
        </div>
     );
}
 
export default Greet;