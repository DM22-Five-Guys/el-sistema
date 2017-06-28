import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import getToken from './token.service';
import setAuthorizationToken from './../../../reducers/utils/setAuthorizationToken';

let header = {'Content-Type':'application/json','Authorization': getToken()};
setAuthorizationToken(getToken());
//console.log(axios.defaults.headers.get)
//console.log(JSON.stringify(header))
let data = axios.get('http://localhost:3001/users',JSON.stringify(header)).then(result => result).catch(err => err);

class testAuth extends Component{


   componentDidMount(){
       return data;
   }


    render(){
        return (
        <div>

            TestComponent
            <Link to="/">
                <button>HOME</button>
            </Link>

        </div>
    )

    }



}


export default testAuth
