const express = require('express')
const app = express();

const users = [];
app.use(express.json())

app.get('/',(request,response)=>{
    return response.status('200').send({msg:"hello world"})
})

app.post('/user', (request,response)=>{
    
    const {username,name} = request.body;
    
    const there_is_username_equal = users.some(element=> element.username == username)
    if(there_is_username_equal){
        return response.status(400).send({msg:"Username already exists"})
    }
    if(!name || !username){
        return response.status(400).send({msg:"User need name and username"})
    }

    const user = {
        name,
        username,
        todos: []
    }

    users.push(user)

    return response.status('200').json(users)
    
})


app.listen('3333')