import { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import Items from './Items';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const setLocalStorage = (items) =>
  localStorage.setItem('list', JSON.stringify(items)); // helper function to set the local storage

const getLocalStorage = () => JSON.parse(localStorage.getItem('list') || '[]');
// alternative:
//localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []; // helper function to get the local storage

const App = () => {
  const [items, setItems] = useState(getLocalStorage()); // state hook for the list of items

  // function to add an item to the list
  const addItem = (listItem) => {
    const newItem = { id: nanoid(), title: listItem, isComplete: false };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item added to the list');
  };

  // function to remove an item from the list
  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item removed to the list');
  };

  // fucntion to edit an item on the list
  const editItem = (id) => {
    const newItems = items.map((item) => {
      return item.id === id ? { ...item, isComplete: !item.isComplete } : item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
    toast.warning('item has been updated');
  };

  return (
    <section className='section-center'>
      <ToastContainer position='top-center' autoClose={3000} />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
