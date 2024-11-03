import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { itemActions } from "../store/items";

const ReportForm = () => {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [category, setCategory] = useState("Electronics");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(
        itemActions.addToCart({
          itemName: itemName,
          category: category,
          date: date,
          description: description,
          contact: contact,
          image: imagePreview,
        })
      );

      setMessage("Item submitted successfully!");
      // Clear form fields
      setItemName("");
      setDescription("");
      setContact("");
      setCategory("Electronics");
      setDate("");
      setImage(null);
      setImagePreview(null);
    } catch (error) {
      console.error("Error submitting item:", error);
      setMessage("Error submitting item");
    }
  };

  return (
    <section className='container mx-auto py-12'>
      <h2 className='text-3xl font-bold text-center mb-6 text-gray-800'>
        Report a Lost Item
      </h2>
      <form
        onSubmit={handleSubmit}
        className='max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg'
      >
        <div className='mb-4'>
          <label className='block text-sm font-medium mb-1 text-gray-700'>
            Item Name *
          </label>
          <input
            type='text'
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
            className='border border-gray-300 p-3 rounded-lg w-full'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium mb-1 text-gray-700'>
            Item Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='border border-gray-300 p-3 rounded-lg w-full'
          >
            <option value='Electronics'>Electronics</option>
            <option value='Clothing'>Clothing</option>
            <option value='Documents'>Documents</option>
            <option value='Accessories'>Accessories</option>
            <option value='Other'>Other</option>
          </select>
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium mb-1 text-gray-700'>
            Date Lost/Found *
          </label>
          <input
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className='border border-gray-300 p-3 rounded-lg w-full'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium mb-1 text-gray-700'>
            Description *
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className='border border-gray-300 p-3 rounded-lg w-full'
            rows='4'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium mb-1 text-gray-700'>
            Contact Info *
          </label>
          <input
            type='text'
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            className='border border-gray-300 p-3 rounded-lg w-full'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium mb-1 text-gray-700'>
            Upload Picture
          </label>
          <input
            type='file'
            onChange={handleImageChange}
            accept='image/*'
            className='border border-gray-300 p-3 rounded-lg w-full'
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt='Preview'
              className='mt-4 max-h-48 rounded-lg shadow-md'
            />
          )}
        </div>
        <button
          type='submit'
          className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200'
        >
          Submit
        </button>
        {message && <p className='mt-4 text-center'>{message}</p>}
      </form>
    </section>
  );
};

export default ReportForm;
