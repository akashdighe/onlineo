import React, { useState } from 'react';
import axios from 'axios';

export default function Employee() {
    const [formData, setFormData] = useState({
        name: '',
        salary: '',
        age: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://dummy.restapiexample.com/api/v1/create', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });


            console.log('API Response:', response.status);

            if (response.status === 200) {
                window.alert('Data submited successfully!');
            }
        } catch (error) {
            console.error('Error:', error);
            window.alert('Error creating entry. Please try again.');
        }
     
    };

    return (
        <div className='employee'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div>
                    <label htmlFor="salary">Salary:</label>
                    <input type="text" id="salary" name="salary" value={formData.salary} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" name="age" value={formData.age} onChange={handleChange} required />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
