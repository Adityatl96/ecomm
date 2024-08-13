const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
 const sequelize = require('./db' )
app.use(express.json())
const AuthRoute = require('./route/v1');// requiring route here



sequelize.sync().then(
    res =>{
        console.log(`connected`)
    }
)
.catch(err=>{
    console.log(`err,${err}`)
})


app.get('/', (req,res)=>{
    res.send(`welcome ecomm dev,postgres`)
})

app.use('/api', AuthRoute)

app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`)
})


//docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d