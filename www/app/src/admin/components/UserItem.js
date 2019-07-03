import React from 'react';

const UserItem = ({name, email, type}) => (
  <div>
    <div className="row">
      <div className="col-md-12">
        <h3>{name}</h3>
        <p><b>Email:</b> <a href={`mailto:${email}`}>{email}</a></p>
        <p><b>Type:</b> {type}</p>
      </div>
    </div>
    
    <hr />
  </div>
);

export default UserItem;
