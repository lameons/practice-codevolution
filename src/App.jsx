import Greet from './components/Greet'
import Welcome from './components/Welcome'
import { Component } from 'react'
import Hello from './components/Hello'
import Message from './components/Message'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponents from './components/ParentComponents'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'

class App extends Component{
  render(){
    return (
      <div className="text-center">
        <UserGreeting />
        
        <NameList />
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <EventBind /> */}
        {/* <ParentComponents /> */}
       {/* <h1 className='text-center text-5xl'>Heloo</h1> */}
       {/* <Greet name="JECO" heroName="ok po"/> */}
       {/* <Greet  name="KIM" heroName="okena"/>
       <Welcome name="JECO" heroName="ok po"/> */}

       {/* <Hello/> */}
      </div>
    )
  }
}


export default App
