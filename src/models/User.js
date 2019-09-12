/**declare class */
class   User{
  constructor(id,name,email,phone){
      this.$class="User";
      this.id=id;
      this.name=name;
      this.email=email;
      this.phone=phone;
  };
};

/**export */
module.exports=User;