import { useState } from 'react';

const Form = ({ addItem }) => {
  // state hook for the controlled input
  const [newListItem, setNewListItem] = useState('');

  // function to handle the form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // check if the input is empty, if so, return
    if (!newListItem) {
      console.log('empty value');
      return;
    }

    addItem(newListItem); // add the new item to the list

    setNewListItem(''); // clear the input field after submit

    const inputField = e.target.querySelector('input');
    inputField.focus(); // focus the input after submit
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>my grocery checklist</h4>
      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          name='list-item'
          value={newListItem}
          onChange={(e) => setNewListItem(e.target.value)}
        />
        <button type='submit' className='btn'>
          add item
        </button>
      </div>
    </form>
  );
};
export default Form;
