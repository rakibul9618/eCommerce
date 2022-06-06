import bcrypt from 'bcryptjs';

const users = [
    {
        name:'Admin User',
        email: 'admin@example.com',
        password:bcrypt.hashSync('1234',12),
        isAdmin: true
    },
    {
        name:'Ziyad',
        email: 'ziyad@example.com',
        password:bcrypt.hashSync('1234',12)
    },
    {
        name:'Hatem',
        email: 'Hatem@example.com',
        password:bcrypt.hashSync('1234',12)
    }

];


export default users;