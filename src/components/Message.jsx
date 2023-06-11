/* eslint-disable react/prop-types */

import {Component} from "react";

class Message extends Component{
    render() {
        return(
            <h1 className="text-7xl">Welcome {this.props.name} aka {this.props.heroName}</h1>
        )
    }
}

export default Message;