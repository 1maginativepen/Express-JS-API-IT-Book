/*
    Search for function 
    -> Login                                        = getLoginAuthentication 
    */

    module.exports = { 
        getLoginAuthentication, 
    }
    
    function getLoginAuthentication(username,password){
        const sql = ` 
            Select * from 
                    (
                    SELECT U.*, lev.lev_desc 
                    FROM t_users AS U
                    JOIN t_level AS lev ON U.lev_id=lev.lev_id
                        where uname='`+username+`'
                        and upwd='`+password+`'  
                ) AS M 
            LIMIT 1 
        `; 
        return sql;
    }