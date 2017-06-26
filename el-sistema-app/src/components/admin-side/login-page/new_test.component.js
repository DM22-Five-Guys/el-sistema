import React from 'react';
import {connect} from 'react-redux'
import { new_test_func } from './../../../reducers/users.reducer';


class New_Test extends React.Component{
    render(){
    return (
        <div>
            NEW-TEST
            {console.log(this.props.new_test_func())}
        </div>

        )

    }
}
export default connect(null, {new_test_func})(New_Test)