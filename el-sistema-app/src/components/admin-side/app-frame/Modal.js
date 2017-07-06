import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';

class Modal extends Component{
    handleClickOutside = evt => {
        this.props.toggleModal();
    }

    render(){
        return (
            <div className="add-modal">
            <Link to='/admin/volunteers/new' className='modal-item'>
              <p>Add New Volunteer</p>
            </Link>
            <Link to='/admin/classes/new' className='modal-item'>
              <p>Create New Class</p>
            </Link>
            <Link to='/admin/performances/new' className='modal-item'>
              <p>Add Performance</p>
            </Link>
            <Link to='/admin/media/new' className='modal-item'>
              <p>New Media</p>
            </Link>
            <Link to='/admin' className='modal-item'>
              <p>Add Site Content (not working)</p>
            </Link>
            <Link to='/admin/blog/new' className='modal-item'>
              <p>New Blog Post</p>
            </Link>
          </div>
        )
    }
}

export default onClickOutside(Modal);