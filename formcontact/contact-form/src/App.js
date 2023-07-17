import logo from './logo.svg';
import './App.css';
import { Formik } from 'formik';
import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleValidate = () => {
    const { email, name, message } = form;
    const errors = {};
    if (!name) {
      errors.name = 'Vui lòng nhập tên.';
    }

    if (!email) {
      errors.email = 'Vui lòng nhập địa chỉ email.';
    } else if (!/^[\w\.-]+@[\w\.-]+\.\w+$/.test(email)) {
      errors.email = 'Định dạng email không hợp lệ.';
    }

    if (!message) {
      errors.message = 'Vui lòng nhập tin nhắn.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleValidate()) {
      // Xử lý logic khi form hợp lệ
      alert('Thêm liên hệ thành công!');
      // Reset form
      setForm({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={form.name || ''} onChange={handleChange} />
        {errors.name && <span>{errors.name}</span>}
      
      <div>
      <label>Email</label>
      <input type="text" name="email" value={form.email || ''} onChange={handleChange} />
      {errors.email && <span>{errors.email}</span>}
    </div>
    <div>
      <div>
        <label>message</label>
        <textarea name="message" value={form.message || ''} onChange={handleChange} />
        {errors.message && <span>{errors.message}</span>}
      </div>
      <button type="submit">Submit</button>
    </div>
    </form>
  );
}

export default App;