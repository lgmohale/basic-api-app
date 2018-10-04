const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api');

mongoose.Promise = Promise;

var todoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: "Name cannot be blank!"
    },
    completed:{
        type: Boolean,
        default: false
    },
    date:{
        type: Date,
        default: Date.now
    }
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
