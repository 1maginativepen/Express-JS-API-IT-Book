    /*
        Search for function 
        -> Login                                        = getLoginAuthentication 
    */

    module.exports = { 
        getBooks, 
    }
    
    const API_ENDPOINT = 'https://api.itbook.store/';

    function getBooks(query){
        const Endpoint = API_ENDPOINT+'1.0/search/'+query; 
        return Endpoint;
    }