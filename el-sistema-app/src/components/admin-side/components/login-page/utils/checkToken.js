import getToken from './../token.service';
const Decode = require('jwt-decode');

let hasValidToken = (function(){
    try {
        Decode(getToken());
        //console.log('console from hasValidToken func ', true)
        return true;
        
    }
    catch(error) {
        //console.log('error from hasValidToken func ', error)
        return false;
    }
})

export default hasValidToken;