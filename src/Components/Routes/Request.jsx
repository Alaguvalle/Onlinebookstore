import React, { useState } from 'react';
import Navbarheader from '../navbar/Navbarheader';
import '../Routes/Request.css'
import Footer from '../Footer/Footer';

export default function Request() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        bookTitle: '',
        author: '',
        quantity: '',
        mobileNumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, e.g., send the data to a backend API
        // For now, we'll just log the form data to the console
        console.log('Form Data:', formData);
    };

    return (
        <>
        <Navbarheader/>
        <div className="container mt-4">
            <div className="row justify-content-center-request" style={{}}>
                <div className="col-md-3">
                    <div className="card mx-auto">
                        <div className="card-body-req">
                            <h2 className="card-title text-center mb-4">Request a Book</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name:</label>
                                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="bookTitle" className="form-label">Book Title:</label>
                                    <input type="text" className="form-control" id="bookTitle" name="bookTitle" value={formData.bookTitle} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="author" className="form-label">Author:</label>
                                    <input type="text" className="form-control" id="author" name="author" value={formData.author} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="quantity" className="form-label">Quantity:</label>
                                    <input type="number" className="form-control" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mobileNumber" className="form-label">Mobile Number:</label>
                                    <input type="tel" className="form-control" id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
                                </div>
                                <button type="submit" className="btn btn-secondary btn-block">Submit</button>
                            </form>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>
    </div >
    <br></br>
    <Footer/></>
  );
}
