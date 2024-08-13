const User = require('../models/User')

const createUser = async(req,res) =>{
    const {isAdmin,isVendor,userName,userEmail,userPassword,userAddress,userPhoneNumber} = req.body
    
    try{ 
    const user = await User.create({
        isAdmin,
        isVendor,
        userName,
        userEmail,
        userPassword,
        userAddress,
        userPhoneNumber
    });
    return res.status(201).json({ message: 'success , created',user  });
}
catch(err){ 
    return res.status(500).json(err)    
}
}

const getUser = async(req,res) => {
    try {
        // Fetch all users from the database
        const users = await User.findAll();

        // Respond with the list of users
        return res.status(201).json({ message: 'success',users  });
    } catch(err){ 
        return res.status(500).json(err)    
}
}

module.exports = {createUser, getUser}