import  db_config   from    "../../configs/db_config.json";
import  mysql   from "mysql";

var connection=mysql.createPool({
    host:db_config.host,
    port:db_config.port,
    user:db_config.username,
    password:db_config.password,
    database:db_config.database_name
});

module.exports=connection;