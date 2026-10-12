const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'], // กำหนดให้มีค่าได้แค่ 3 ค่า
        default: 'medium' // ถ้าไม่ส่งค่า priority มา ให้ตั้งเป็น medium อัตโนมัติ
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;