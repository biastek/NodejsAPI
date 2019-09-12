import express from 'express';
import UserService from "../services/UserService";
import  User    from    "../models/User";

/**declare variable */
let router = express.Router();
let userService=new UserService();

/**public */
router.get("/", async(req, res) => {
	let method="controller/list";
	console.log(method+" -->start");

	let result;
	try {
		result=await userService.getAll();
		
		res.render("index", { title: "Index", users:result });
	} catch (error) {
		res.render("index", { title: "Index", users:result });
	}

});

router.get("/user/add",(req,res)=>{
	let method="controller/user/add";
	console.log(method+" -->start");

	try {
		console.log(method+" -->success");
		res.render("form",{title:"add User"});
	} catch (error) {
		console.log(method+" -->fail");
	}
});

router.post("/user/add",async(req,res)=>{
	let method="controller/user/add";
	console.log(method+" -->start");

	req.checkBody("username", "Username is required").notEmpty();
	req.checkBody("email", "Email is required").notEmpty();
	req.checkBody("phone", "Phone is required").notEmpty();
	
	let user=new User(null,req.body.username,req.body.email,req.body.phone);
	let errors = req.validationErrors();
	if (errors) {
		res.render("form", { title: "add User", errors: errors });
	} else {

		try {
			let result=await userService.insert(user);

			console.log(method+" -->success");
			res.redirect("/");
		} catch (error) {
			console.log(method+" -->fail");
			res.render("form", { title: "add User"});			
		}
	}	
});
/** lấy id của dòng can update **/
router.get("/user/update/:_userID",async(req,res)=>{
	let method="Controller/user/update";
	console.log(method+" -->start");

	try {
		let result= await userService.getUserByID(req.params._userID);

		console.log(method+" -->success");
		res.render("form_edit", { title: "Edit User",user:result[0]});	
	} catch (error) {
		console.log(method+" -->fail");
		res.render("form_edit", { title: "Edit User",user:null});				
	}
});
/** Thuc hien update **/
router.post("/user/update/:_userID",async(req,res)=>{
	let method="Controller/user/update";
	console.log(method+" -->start");

	try {
        /*truy tham so thi dung req.params, truyen biến trên form dùng req.body */
		let user=new User(req.params._userID,req.body.username,req.body.email,req.body.phone);
		let result= await userService.update(user);

		console.log(method+" -->success");
		res.redirect("/");
	} catch (error) {
		console.log(method+" -->fail");
		res.redirect("/");			
	}
});

router.get("/user/delete/:_userID",async(req,res)=>{
	let method="Controller/user/delete";
	console.log(method+" -->start");

	try {
		let result= await userService.delete(req.params._userID);
		
		console.log(method+" -->success");
		res.redirect("/");
	} catch (error) {
		console.log(method+" -->fail");
		res.redirect("/");			
	}
});

router.post("/user/search", async(req, res) => {
	let method="controller/list";
	console.log(method+" -->start");

	let result;
	try {
		result=await userService.getUserByName(req.body.keyword);

		console.log(method+" -->success");
		res.render("index", { title: "Index", users:result});
	} catch (error) {
		console.log(method+" -->fail");
		res.render("index", { title: "Index",users:result });
	}

});

/**export */
module.exports = router;