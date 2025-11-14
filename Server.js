const express=require("express")
const app=express()
app.use(express.urlencoded())

app.set("view engine", "ejs")

var student=[
    {
        "id":1,
        "name":"kathan"
    },
    {
        "id":2,
        "name":"smit"
    }
]
app.get("/",(req,res)=>{
    res.render("home",{student})

})
app.get("/delete",(req,res)=>{
  const id=Number(req.query.id)
   student=student.filter((el)=> el.id !==id)
   res.redirect("/")

 

})
app.post("/insertdata",(req,res)=>{

    const{id,name}=req.body
    const obj={
        id:Number(id),
        name
        
    }
    student.push(obj)
    res.redirect("/")

})


app.get("/Edit", (req, res) => {
    const id = Number(req.query.id);
    const editdata = student.find(el => el.id === id);
    res.render("edit", { editdata });
});


app.post("/editdata", (req, res) => {
    const { id, name } = req.body;

    student = student.map(el => {
        if (el.id === Number(id)) {
            el.name = name;
        }
        return el;
    });

    res.redirect("/");
})


app.listen(5000,()=>{
    console.log("kkk")

})

