    import { useState } from "react";

    function SignupForm() {
        const [formData, setFormData] = useState({
            username:"",
            password:"",
            confirmPassword:"",
            email:"",
            consent:false
        })



const handleChange =(e) =>{
 const {name, value,type,checked} = e.target

 setFormData((prev)=>(
    {
        ...prev,
        [name]:type==='checkbox'?checked:value
    }
 ))
}

const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('done', formData)
}

    return (
        <form onSubmit={handleSubmit}>
        {/* Username */}
        <div>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" name="username" value={formData.username} onChange={handleChange}/>
        </div>

    {/* mail */}

        <div>
            <label htmlFor="email">Email Address *</label>
            <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />
        </div>
        
        {/* Password */}
        <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" value={formData.password} onChange={handleChange}/>
        </div>

        {/* Retype Password */}
        <div>
            <label htmlFor="confirmPassword">Retype Password</label>
            <input id="confirmPassword" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}/>
        </div>

        

        {/* Terms - Checkbox */}
        <div>
            <label>
            <input type="checkbox" name="terms" checked={formData.consent} onChange={handleChange}/>
            I agree to the Terms and Conditions
            </label>
        </div>

        {/* Submit */}
        <button type="submit">Sign Up</button>
        </form>
    );
    }

    export default SignupForm;
