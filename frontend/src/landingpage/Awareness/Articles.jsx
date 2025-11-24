import React, { useState } from 'react';

export default function Articles({ id,title, description, image,user,onDelete}) {

  return (
    <>

    <div className="card mb-4 shadow-lg mt-2" style={{width:"100rem" ,borderRadius: '22px', marginLeft:"3rem",borderLeft:" 9px solid #a86c5d" }}>
      <div className="row g-0 p-5">
        {/* Image on the left */}
        <div className="col-md-5">
          <img
            src={image}
            className="img-fluid rounded-start"
            alt={title}
            style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '22px 0 0 22px' }}
          />
        </div>

        {/* Text on the right */}
        <div className="col-md-7 d-flex flex-column justify-content-center p-4">
          <h3 className="card-title"><i>{title}</i></h3>
          <p className="card-text" style={{ textAlign: 'justify' }}>{description}</p>
          <p className="card-text" style={{ textAlign: 'justify' }}>By(registerd user) : {user}</p>
          <button className='btn btn' style={{width:"90px"}} onClick={()=>onDelete(id)}>Delete</button>
        </div>
      </div>
    </div>
    </>
  );
}
