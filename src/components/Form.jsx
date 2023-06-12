import { useState } from 'react'

 function Form(){
    const [username , setUsername] = useState('');
    const [comment , setComment] = useState('');
    const [topic , setTopic] = useState('');



    const handleUsernameChange = (e) =>{
        setUsername(e.target.value)
    }
    
    const handleCommentChange = (e) =>{
        setComment(e.target.value)
    }

    const handleTopicChange = (e) =>{
        setTopic(e.target.value)
    }
    const handleSubmit = (e) => {
        alert(`${username} ${comment} ${topic}`);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className='w-[200px] flex flex-col border-2 justify-center items-center mx-auto mt-10'>
            <div>
                <label>Username</label>
                <input 
                type="text" 
                value={username} 
                onChange={handleUsernameChange} className='border border-black m-2'/>
            </div>

            <div>
                <label>Comments</label>
                <textarea 
                value={comment}
                onChange={handleCommentChange}
                 className='border border-black m-2'></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select  
                value={topic}
                onChange={handleTopicChange}
                className='border border-black m-2'>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>

                </select>
            </div>
            <button 
            type='submit' 
            className='border border-black m-2 p-1'
            >SUBMIT</button>
        </form>
    )
  }

export default Form