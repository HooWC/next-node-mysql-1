const db = require('../config/db');

// Fetch all users
exports.getUsers = (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

// Fetch user by ID
exports.getUserById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(404).json({ message: 'User not found' });
        res.json(results[0]);
    });
};

// Create new user
exports.createUser = (req, res) => {
    const { name, email } = req.body;

    // 查询邮箱是否已经存在
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) {
            return res.status(500).send({ message: 'Database query error', error: err });
        }

        if (results.length > 0) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, results) => {
            if (err) return res.status(500).send(err);
            res.status(201).json({ id: results.insertId, name, email });
        });
    });
};

// Update user
exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    // 检查 email 是否被其他用户占用
    db.query('SELECT * FROM users WHERE email = ? AND id != ?', [email, id], (err, results) => {
        if (err) return res.status(500).send(err);

        if (results.length > 0) {
            // 如果 email 被其他用户占用，返回错误
            return res.status(400).json({ message: 'Email already exists' });
        }

        // 如果 email 没有被占用，则更新用户
        db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id], (err) => {
            if (err) return res.status(500).send(err);
            res.json({ id, name, email });
        });
    });
};

// Delete user
exports.deleteUser = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM users WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'User deleted successfully' });
    });
};
