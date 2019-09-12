import  User    from    "../models/User";
import  db_connection from "../utitlities/db_connection";


/**declare class */
class UserRepo{
    constructor(){};
    /**
     * getAll for users
     */
    getAll(){
        let method="UserRepo/getAll";
        console.log(method+" -->start");

        return new Promise((resolve,reject)=>{
            db_connection.query("SELECT * FROM user",(error,result)=>{
                if(error){
                    console.log(method+" -->fail");
                    return reject(error+"");
                }else{
                    console.log(method+" -->success");
                    return resolve(result);
                }
            });
        });
    };

    insert(_user){
        let method="UserRepo/insert";
        console.log(method+" -->start");

        return new Promise((resolve,reject)=>{
            db_connection.query("INSERT INTO user(name,email,phone) VALUES(?,?,?)",[_user.name,_user.email,_user.phone],(error,result)=>{
                if(error){
                    console.log(method+" -->fail");
                    return reject(error+"");
                }else{
                    console.log(method+" -->success");
                    return resolve(result);
                }
            });
        });
    };

    getUserByID(_userID){
        let method="UserRepo/getUserByID()";
        console.log(method+" -->start");

        return new Promise((resolve,reject)=>{
            db_connection.query("SELECT * FROM user WHERE id=?",[_userID],(error,result)=>{
                if(error){
                    return reject(error+"");
                }else{
                    return resolve(result);
                }
            });
        });
    };

    getUserByName(_userName){
        let method="UserRepo/getUserByName()";
        console.log(method+" -->start");

        return new Promise((resolve,reject)=>{
            db_connection.query("SELECT * FROM user WHERE name LIKE CONCAT('%', ?,  '%')",[_userName],(error,result)=>{
                if(error){
                    console.log(method+" -->fail");
                    return reject(error+"");
                }else{
                    console.log(method+" -->success");
                    return resolve(result);
                }
            });
        });
    };

    update(_user){
        let method="UserRepo/update()";
        console.log(method+" -->start");

        return new Promise((resolve,reject)=>{
            db_connection.query("UPDATE user SET name=?,email=?,phone=? WHERE id=?",[_user.name,_user.email,_user.phone,_user.id],(error,result)=>{
                if(error){
                    return reject(error+"");
                }else{
                    return resolve(result);
                }
            });
        });
    };
    delete(_userID){
        let method="UserRepo/delete()";
        console.log(method+" -->start");
        return new Promise((resolve,reject)=>{
            db_connection.query("DELETE FROM user WHERE id=?",[_userID],(error,result)=>{
                if(error){
                    return reject(error+"");
                }else{
                    return resolve(result);
                }
            });
        });
    };
};

/**export */
module.exports=UserRepo;