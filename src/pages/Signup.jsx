
import {  useState } from "react";

export default function signup(){
    const [username, setUsername] = useState()
    const [email, setmail] = useState()


return(<>
<div className="formContainer">
<form onSubmit={handleSubmit}>


<div className="usernamecontainer">
    <label htmlFor="username">Username</label>
    <input
    type="text"
    id="username"
    value={username}
    onChange={(e)=>{setUsername(e.value.target)}}
    />
</div>

<div className="mailcontainer">
        <label htmlFor="email">Email</label>
    <input
    type="email"
    id="email"
    value={email}
    onChange={(e)=>{setmail(e.value.target)}}
    />
</div>



<div className="Passwordcontainer"> 
        <label htmlFor="password">Password</label>
    <input
    type="text"
    id="password"
    value={password}
    onChange={(e)=>{setPassword(e.value.target)}}
    />
</div>



</form>



</div>



</>)
}