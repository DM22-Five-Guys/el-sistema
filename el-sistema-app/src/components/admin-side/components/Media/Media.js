import React, {Component} from 'react';
import MediaTable from './components/Media-Table';
import AddMedia from './components/Add-Media';

class Media extends Component{
  render(){
    return(
        <div>
            <AddMedia />
            <MediaTable />
        </div>
    )
  }
}
export default Media;
