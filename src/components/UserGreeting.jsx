import React, { useState } from 'react'

function UserGreeting(props) {
    const [isLoggedIn , setIsLoggedIn] = useState(true)
    // let message;
    // if(isLoggedIn){
    //     message = <div>Welcome to jeco</div> 
    // }else{
    //     message = <div>Welcome Guest</div>
    // }

  return (
    <>
       {/* // -----ternary  */}
    <div className='text-8xl'>{isLoggedIn ?  <div>Welcome to jeco</div> : <div>Welcome Guest</div> }</div>

    {/* // -----Short circuit operator */}
    <div className='text-4xl'>
        {isLoggedIn && <div>Welcome to my life</div>}
    </div>
    </>
 
  )
}

export default UserGreeting