import React, { Component } from 'react'

 class ClassClick extends Component {
    clickHandler() {
        console.log(alert('es6 click'));
    }

  render() {
    return (
        <button className="border-2 p-1 m-2 bg-black text-white" 
        onClick={this.clickHandler}>Click me</button>
    )
  }
}

export default ClassClick