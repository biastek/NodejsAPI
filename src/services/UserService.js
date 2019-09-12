import  UserRepo from "../repositories/UserRepo";

let userRepo=new UserRepo();

/**declare class */
class UserService{
    constructor(){};
    getAll(){
        let method="UserService/getAll";
        console.log(method+" -->start");
        try {
            console.log(method+" -->success");
            return userRepo.getAll();    
        } catch (error) {
            console.log(method+" -->success");
            return new Error(error);
        }
        
    };

    insert(_user){
        let method="UserService/insert()";
        console.log(method+" -->start");

        try {
            console.log(method+" -->success");
            return userRepo.insert(_user);            
        } catch (error) {
            console.log(method+" -->fail");
            return new Error(error);            
        }
    };

    getUserByID(_userID){
        let method="UserService/getUserByID";
        console.log(method+" -->start");

        try {
            console.log(method+" -->success");
            return userRepo.getUserByID(_userID);              
        } catch (error) {
            console.log(method+" -->fail");
            return new Error(error);  
        }
    };

    getUserByName(_userName){
        let method="UserService/getUserByName";
        console.log(method+" -->start");

        try {
            console.log(method+" -->success");
            return userRepo.getUserByName(_userName);              
        } catch (error) {
            console.log(method+" -->fail");
            return new Error(error);  
        }
    };

    update(_user){
        let method="UserService/update";
        console.log(method+" -->start");

        try {
            console.log(method+" -->success");
            return userRepo.update(_user);              
        } catch (error) {
            console.log(method+" -->fail");
            return new Error(error);  
        }
    };

    delete(_userID){
        let method="UserService/delete()";
        console.log(method+" -->start");

        try {
            console.log(method+" -->success");
            return userRepo.delete(_userID);
        } catch (error) {
            console.log(method+" -->fail");
            return new Error(error);  
        }
    };
};

/**export */
module.exports=UserService;