const db = require('../config/db');

const getAllUsers = (callback) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

const addUser = (user, callback) => {
    db.query('INSERT INTO users (name, email) VALUES (?, ?)', [user.name, user.email], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

const updateUser = (id, user, callback) => {
    db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [user.name, user.email, id], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

const deleteUser = (id, callback) => {
    db.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

module.exports = { getAllUsers, addUser, updateUser, deleteUser };
