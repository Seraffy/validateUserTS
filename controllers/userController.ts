import User from "../models/user";

export default  class ValidateUsers{

    private validated: boolean

    constructor(){
        this.validated = false
    }

    public ValidateUser(user: User): string {
        if (!this.ValidadeName(user)) {
            return 'Name must have at least 3 characters.';
          }
        if (!this.ValidadeAge(user)) {
            return 'Age must be at least 18.';
          }
        if (!this.ValidadeEmail(user)) {
            return 'Email must be valid.';
          }

        this.validated = true;
        return 'User is valid.';
    }
    
    private ValidadeName(user:User):boolean{
        return user.name.length >= 3
    }
    
    private ValidadeAge(user:User): boolean{
        return user.age >= 18;
    }
    
    private ValidadeEmail(user:User): boolean{
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(user.email);
    }
    
    
}

