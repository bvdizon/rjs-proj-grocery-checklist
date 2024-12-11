import { useState } from 'react';

const SingleItem = ({ id, title, isComplete, removeItem, editItem }) => {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={isComplete}
        onChange={(e) => editItem(id)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: isComplete ? 'line-through' : 'none',
          fontStyle: isComplete ? 'italic' : 'normal',
        }}>
        {title}
      </p>
      <button
        type='button'
        className='btn remove-btn'
        onClick={() => removeItem(id)}>
        Delete
      </button>
    </div>
  );
};
export default SingleItem;
