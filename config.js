const env = process.env;  

const config = {
  db: { 
    host: env.DB_HOST || 'localhost',
    user: env.DB_USER || 'root',
    password: env.DB_PASSWORD || 'c45y5-oms',
    // Comment this if you are using the old db
    database: env.DB_NAME || 'casys3_idemitsuadmin',
    // Comment this if you are using the new db 
    // database: env.DB_NAME || 'casys3_idemitsuadmin_test', 
    port:3999
    // port:3306
  },
  listPerPage: env.LIST_PER_PAGE || 20,
  loginRequest: {
    username : "",
    password : "",
    location : "",
    userLevel: ""
  }, 
  books:{
    query: '', 
    value:[]
  }
};

module.exports = config;