### 目录

```
my-nextjs-nodejs-mysql-crud
│
├── backend (Node.js API)
│   ├── config
│   │   └── db.js (MySQL 连接配置)
│   ├── controllers
│   │   └── userController.js (CRUD 控制器)
│   ├── models
│   │   └── user.js (MySQL 用户模型)
│   ├── routes
│   │   └── userRoutes.js (路由)
│   ├── app.js (Express 应用)
│   └── package.json (Node.js 项目配置)
│
├── frontend (Next.js 前端)
│   ├── pages
│   │   ├── index.js (显示用户列表)
│   │   └── add.js (添加用户)
│   ├── components
│   │   └── UserForm.js (表单组件)
│   └── package.json (Next.js 项目配置)
└── .gitignore
```

### 设置 MySQL 数据库

```
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Node

```
cd backend
npm init -y
npm install express mysql2 cors
```

### NextJS

```
cd frontend
npx create-next-app .
npm install axios
```

### 启动Node

```
node app.js
```

### 启动Nextjs

```
npm run dev
```

