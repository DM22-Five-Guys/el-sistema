<div className='main-container'>
  <h1 className='current-content'>Content Text Content</h1>
  <ul className='media-list'>
    <li >
    <div className='checkbox-volunteer'>
      <input placeholder='' type='checkbox' ></input>
      </div>
    </li>
    <li className='media-titles'>Type</li>
    <li className='media-titles'>Date Published</li>
    <li className='media-titles'>Title</li>
    <li className='media-titles'>Actions</li>

  </ul>
  <ul className='media-list line'>
    <li className='col-md-3'>
      <div className='checkbox-volunteer'>
      <input placeholder='' type='checkbox' ></input>
      </div>
    </li>
    <li className='col-md-4' >
      <input placeholder='type' type='text' className='type-placeholder '></input>
    </li>
    <li className='col-md-5'>
      <input placeholder='type' type='date' className='date-placeholder'></input>
    </li>
    <li className='col-md-6'>
      <input placeholder='title' type='text' className='title-placeholder'></input>
    </li>
    <li className='col-md-2'>
      <img src={edit} className='edit-media' alt=""></img>
    </li>
    <li className='col-md-1'>
      <img src={trash} className='delete-media' alt=""></img>
    </li>


</ul>
<ul className='media-list line'>
  <li className='col-md-3'>
    <div className='checkbox-volunteer'>
    <input placeholder='' type='checkbox' ></input>
    </div>
  </li>
  <li className='col-md-4' >
    <input placeholder='type' type='text' className='type-placeholder '></input>
  </li>
  <li className='col-md-5'>
    <input placeholder='type' type='date' className='date-placeholder'></input>
  </li>
  <li className='col-md-6'>
    <input placeholder='title' type='text' className='title-placeholder'></input>
  </li>
  <li className='col-md-2'>
    <img src={edit} className='edit-media' alt=""></img>
  </li>
  <li className='col-md-1'>
    <img src={trash} className='delete-media' alt=""></img>
  </li>
</ul>
</div>
