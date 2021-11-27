const db = require('../db');
const helper = require('../../helper');
const config = require('../../config');
const serverLogs = require('../../serverLogs');
const sqlBuilder = require('../../sqlBuilder/sql');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);  
  
  const rows = await db.query(sqlBuilder.getLoginAuthentication(config.loginRequest.username,config.loginRequest.password));
  const data = helper.emptyOrRows(rows); 
 
  var dateTemplate = new Date();
  
  
  var d = new Date();
  var dateTemplate = d.getDate() + "-" + d.getDay() +"-" + d.getFullYear() +" " + d.getHours()+"-" + d.getMinutes()+"-" + d.getSeconds()

  var LogStart = "**"+"["+dateTemplate+"]";

  if(data.length == 0){
    serverLogs.logs =  LogStart + "**Access Denied**"+"Workstation attempting to login with credential - Username : ("+config.loginRequest.username+") >$<"+ serverLogs.logs; 
  }else{
    serverLogs.logs =  LogStart + "**Access Granted**"+"Workstation attempting to login with credential - Username : ("+config.loginRequest.username+") >$<"+ serverLogs.logs;  
  }   
   
  return {
    data
  } 
}

module.exports = {
  getMultiple
}
 