import React, { useState } from 'react';

const Shipment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleNameBlur = event =>{
        setName(event.target.value)
    }
    const handleEmailBlur = event =>{
        setEmail(event.target.value)
    }
   
    const handleAddressBlur = event =>{
        setAddress(event.target.value)
    }
    
    const handlePhoneBlur = event =>{
        setPhone(event.target.value)
    }

    const handleCreateUser = event => {
        event.preventDefault()
    }

    return (
        <div className="form-container">
      <div>
        <h2 className="form-title">Shipping Information</h2>
        <form onSubmit={handleCreateUser}>
          <div>
            <label htmlFor="name">Your Name</label>
            <input onBlur={handleNameBlur} type="text" name="name" id="name" required/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
          </div>

          <div>
            <label htmlFor="address">Address</label>
            <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input onBlur={handlePhoneBlur} type="number" name="phone" id="phone" required />
          </div>
          <input className="form-submit" type="submit" value="Add Shipment" />
        </form>
      </div>
    </div>
    );
};

export default Shipment;