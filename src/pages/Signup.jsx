    import { useState } from "react";

    function SignupForm() {
        const [formData, setFormData] = useState({
            username:"",
            password:"",
            confirmPassword:"",
            email:"",
            consent:false
        })

const [err, setErr] = useState({});

        //add error and css

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'username name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.password.trim()) newErrors.password = 'password is required';
    // if (!formData.consent) newErrors.consent = 'Consent is required';
    return newErrors;
  };




const handleChange = (e)=>{
const {name, type,checked, value} =e.target

setFormData((prev)=>(
    {
        ...prev,
        [name]:type === 'checkbox' ? checked:value
    }
))
}




const handleSubmit = (e) =>{
    e.preventDefault()
    const validationErrors = validate()
    setErr(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
    console.log('done', formData)
    }
}

    return (
        <form onSubmit={handleSubmit}>
        {/* Username */}
        <div>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" name="username" value={formData.username} onChange={handleChange}/>
            {err.username && <p>{err.username}</p>}
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
                        {err.email && <p>{err.email}</p>}

        </div>
        
        {/* Password */}
        <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" value={formData.password} onChange={handleChange}/>
                                    {err.password && <p>{err.password}</p>}

        </div>

        {/* Retype Password */}
        <div>
            <label htmlFor="confirmPassword">Retype Password</label>
            <input id="confirmPassword" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}/>
                                                {err.password && <p>{err.password}</p>}

        </div>

        

        {/* Terms - Checkbox */}
        <div>
            <label>
            <input type="checkbox" name="terms" checked={formData.consent} onChange={handleChange}/>
            I agree to the Terms and Conditions
            </label>
                                                {err.consent && <p>{err.consent}</p>}

        </div>

        {/* Submit */}
        <button type="submit">Sign Up</button>
        </form>
    );
    }

    export default SignupForm;
