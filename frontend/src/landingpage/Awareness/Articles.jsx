import React from 'react';
import './Articles.css';

export default function Articles({ id, title, description, image, user, onDelete }) {
  return (
    <div className="card mb-4 shadow-lg mt-2 article-card">
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={image}
            className="img-fluid article-img"
            alt={title}
          />
        </div>

        <div className="col-md-7 article-body p-4">
          <h3 className="card-title"><i>{title}</i></h3>
          <p className="card-text">{description}</p>
          <p className="card-text">By (registered user): {user}</p>
          <button
            className="btn btn-outline-danger article-delete-btn"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}