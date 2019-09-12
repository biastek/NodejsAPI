import  express from "express";
import  path    from    "path";
import flash from "connect-flash";
import session from "express-session";
import bodyParser from "body-parser";
import expressValidator from "express-validator";
import  SERVER_CONFIG   from './configs/server_config.json';
import  controller from "./src/controllers/index";


/** */
let app=express();



/**config middleware */
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());

app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: true,
}));

app.use(function(req, res, next) {
    res.locals.session = req.session;
    next();
});
app.use(flash());
app.use(function(req, res, next){
	res.locals.success_message = req.flash('success_message');
	res.locals.error_message = req.flash('error_message');
	res.locals.error = req.flash('error');
	res.locals.errors = req.flash('errors');
	res.locals.user = req.user || null;
  	next();
});

app.use("/",controller);

/**app listen */
let server=app.listen(SERVER_CONFIG.server_port,()=>{
    console.log("Listening on port: "+SERVER_CONFIG.server_ip+":"+server.address().port);
});
