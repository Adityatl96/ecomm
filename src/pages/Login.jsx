import React, { useState } from 'react';

export default function Login(){

const [formData, setformData] = useState({
    username:"",
    password:""
})

const handleSubmit = (e)=>{
    e.preventDefault()
    console.log('done')
}
const handleChange =(e)=>{
    const {name,value}=e.target
    setformData((prev)=> (
        {
            ...prev,
            [name]:value
        }
    ))
}



return(
    <>
    <form onSubmit={handleSubmit}>

<div className="username">
    <label htmlFor='username'>Username</label>
    <input
    id='username'
    type='text'
    name='username'
    value={formData.username}
    onChange={handleChange}
    />
</div>
<div className="password">
    <label htmlFor='password'>Password</label>
    <input
    id='password'
    type='password'
    name='password'
    value={formData.password}
    onChange={handleChange}
    />
</div>


        <button type="submit">Login</button>

    </form>
    </>
)

}