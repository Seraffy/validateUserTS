import ValidateUsers from './controllers/userController'
import User from './models/user';


const validator = new ValidateUsers();
const user : User  = {
    name: "Gabriel",
    age: 23,
    email: "email@meuemail.com"
}

console.log(validator.ValidateUser(user))