import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Admin() {
  const [books, setBooks] = useState([]);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {

    const response = await axios.get('http://localhost:4001/book');
    console.log(response.data)
    setBooks(response.data);
        
    } catch (error) {
        console.log(error)
    }
  };

  const addBook = async () => {
    try {
        const newBook = { name, title, price: Number(price), image, category };
    await axios.post('http://localhost:4001/book', newBook);
    fetchBooks();
    setName('');
    setTitle('');
    setPrice('');
    setImage('');
    setCategory('');
    } catch (error) {
        
    }
  };

  const updateBook = async () => {
    
    try {
        const updatedBook = { name, title, price: Number(price), image, category };
    await axios.put(`http://localhost:4001/book/${editId}`, updatedBook);
    fetchBooks();
    setName('');
    setTitle('');
    setPrice('');
    setImage('');
    setCategory('');
    setEditMode(false);
    setEditId(null);
        
    } catch (error) {
        
    }
  };

  const deleteBook = async (id) => {
    
    try {
        await axios.delete(`http://localhost:4001/book/${id}`);
    } catch (error) {
        
    }

    
    fetchBooks();
  };

  const editBook = (book) => {
    
    try {
        
    setEditMode(true);
    setEditId(book._id);
    setName(book.name);
    setTitle(book.title);
    setPrice(book.price);
    setImage(book.image);
    setCategory(book.category);
    } catch (error) {
        
    }
  };

  return (
    <>
    

      <Navbar/>
      <div className="container mx-auto p-4 mt-32">
      <h1 className="text-2xl font-bold mb-4">Bookstore Admin Panel</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 mr-2"
        />
        {editMode ? (
          <button
            onClick={updateBook}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Update Book
          </button>
        ) : (
          <button
            onClick={addBook}
            className="bg-green-500 text-white p-2 rounded"
          >
            Add Book
          </button>
        )}
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Title</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Image</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td className="border p-2">{book.name}</td>
              <td className="border p-2">{book.title}</td>
              <td className="border p-2">{book.price}</td>
              <td className="border p-2">
                <img src={book.image} alt={book.title} className="w-16 h-16 object-cover" />
              </td>
              <td className="border p-2">{book.category}</td>
              <td className="border p-2">
                <button
                  onClick={() => editBook(book)}
                  className="bg-yellow-500 text-white p-2 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteBook(book._id)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      <Footer/>
    
    </>
  );
}

export default Admin;
