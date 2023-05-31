const express = require('express')
const bodyParser= require('body-parser')
const mysql= require("./database").connection
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.post('/addTask', async(req, res) => {
	console.log(req.body);
    const {assigned_by, assigned_to, task_detail, priority, project_id, deadline, reward, totalFollowUp, task_type,task_id} = req.body;
    let qry = "insert into task values(?,?,?,?,?,?,?,?,?,?)";
    mysql.query(qry,[assigned_by, assigned_to, task_detail, priority, project_id, deadline, reward, totalFollowUp, task_type,task_id],(err,results)=>{
        if(err)throw err;
        if(results.affectedRows>0){
            res.send(results)
        }
    })

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
  