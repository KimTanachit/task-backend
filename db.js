const mongoose = require('mongoose');

// ใส่ Connection String ที่ตัวแปร dbURI (นำเครื่องหมาย < > ออกจากรหัสผ่าน)
const dbURI = process.env.MONGO_URI;;

mongoose.connect(dbURI)
  .then(() => {
    console.log('สำเร็จ! Node.js เชื่อมต่อกับ MongoDB Atlas แล้ว');
  })
  .catch((err) => {
    console.log('พัง! เชื่อมต่อ Database ไม่สำเร็จ: ', err);
  });