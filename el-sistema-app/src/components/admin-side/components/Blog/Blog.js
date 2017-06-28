import React, { Component } from 'react';
import AddBlog from './components/Add-Blog';
import BlogTable from './components/Blog-Table';

class Blog extends Component {
  render() {
    return (
    <div>
      <AddBlog />
      <BlogTable />
      </div>
    )
  }
}

export default Blog;
