 const mongoose = require('mongoose'),
 {Schema} = mongoose;

 const TaskSchema = new Schema({
     title:{type: String, required:true},
     description: {
         type: String,
         required: true
     }
 });

 module.exports=mongoose.model('Task',TaskSchema);