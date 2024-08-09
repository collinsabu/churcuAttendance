"use client"
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    phoneNo: '',
    email: '',
    gender: '',
    maritalStatus: '',
    bornAgain: '',
    baptized: '',
    joinWorkForce: '',
    enjoyedService: '',
    whatsappGroup: '',
    prayerRequests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        window.location.href = '/thankyou'; // Redirect to /thankyou route
      } else {
        const errorData = await response.json();
        alert('Error submitting form: ' + errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-lg mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="fullName">FULL NAME</label>
        <input
          className="border border-gray-300 rounded py-2 px-4 w-full"
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      {/* Add similar blocks for other fields */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="address">ADDRESS</label>
        <input
          className="border border-gray-300 rounded py-2 px-4 w-full"
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNo">PHONE NO</label>
        <input
          className="border border-gray-300 rounded py-2 px-4 w-full"
          type="text"
          id="phoneNo"
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">EMAIL</label>
        <input
          className="border border-gray-300 rounded py-2 px-4 w-full"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="gender">GENDER</label>
        <select
          className="border border-gray-300 rounded py-2 px-4 w-full"
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="maritalStatus">MARITAL STATUS</label>
        <select
          className="border border-gray-300 rounded py-2 px-4 w-full"
          id="maritalStatus"
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Married">Married</option>
          <option value="Single">Single</option>
        </select>
      </div>
      {/* Add other input fields as necessary */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="bornAgain">BORN AGAIN</label>
        <input
          className="border border-gray-300 rounded py-2 px-4 w-full"
          type="text"
          id="bornAgain"
          name="bornAgain"
          value={formData.bornAgain}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="baptized">BAPTIZED</label>
        <input
          className="border border-gray-300 rounded py-2 px-4 w-full"
          type="text"
          id="baptized"
          name="baptized"
          value={formData.baptized}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="joinWorkForce">JOIN WORK FORCE</label>
        <input
          className="border border-gray-300 rounded py-2 px-4 w-full"
          type="text"
          id="joinWorkForce"
          name="joinWorkForce"
          value={formData.joinWorkForce}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="enjoyedService">ENJOYED SERVICE</label>
        <input
          className="border border-gray-300 rounded py-2 px-4 w-full"
          type="text"
          id="enjoyedService"
          name="enjoyedService"
          value={formData.enjoyedService}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="whatsappGroup">WHATSAPP GROUP</label>
        <input
          className="border border-gray-300 rounded py-2 px-4 w-full"
          type="text"
          id="whatsappGroup"
          name="whatsappGroup"
          value={formData.whatsappGroup}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="prayerRequests">PRAYER REQUESTS</label>
        <input
          className="border border-gray-300 rounded py-2 px-4 w-full"
          type="text"
          id="prayerRequests"
          name="prayerRequests"
          value={formData.prayerRequests}
          onChange={handleChange}
          required
        />
      </div>
      <button className="bg-bg-green text-white py-2 px-4 rounded hover:bg-blue-600" type="submit">Submit</button>
    </form>
  );
};

export default Form;
