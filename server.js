const express = require("express")
const app = express()



const users = [
    { username: "John", age: 25, email: "sghsghs@gmail.com"},
    { username: "Job", age: 26, email: "sjkddhjfd@gmail.com"},
    { username: "Alice", age: 27, email: "slkjhgf@gmail.com"}

];

app.get("/", (req,res) => {
    res.send("EXpresss server is running")
})

app.get("/user", (req,res)=>{
    const userQuery = req.query.user;

    if (!userQuery || userQuery.trim() === ""){
        return res.status(400).json({message: "User parameter cannot be empty"})
    }

    const user = users.find(u => u.username.toLowerCase() === userQuery.toLowerCase());
if (user) {
    return res.json({message:"user found",data:user})
}else{
    return res.status(404).json({message: "User not found"})
}
})




app.listen(3000, () => {
    console.log('server is running on port 3000')
})