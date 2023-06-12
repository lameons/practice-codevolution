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
import Stylesheets from './components/Stylesheets'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import PureComponent from './components/PureComponent'
import ParentComponent from './components/ParentComponent'


class App extends Component{
  render(){
    return (
      <div className="text-center">
        
        {/* <ParentComponent /> */}
        {/* <Table /> */}
        {/* <Form/> */}
        {/* <FragmentDemo /> */}
        {/* <h1 className='error text-4xl'>ERROR</h1> */}
        {/* <h1 className={styles.success}>SUCCESS</h1> */}
        {/* <Inline /> */}
        {/* <Stylesheets  primary={true}/> */}
        {/* <UserGreeting /> */}
        {/* <NameList /> */}
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
