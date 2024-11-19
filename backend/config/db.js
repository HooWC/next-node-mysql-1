const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // 使用你的 MySQL 用户名
    password: '', // 使用你的 MySQL 密码
    database: 'next_db1', // 数据库名
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
    } else {
        console.log('Connected to MySQL database');
    }
});

module.exports = db;
