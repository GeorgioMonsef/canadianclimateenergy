import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        address: '',
        postalCode: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const errors = {};

        // Name Validation: only letters, length between 2 and 30 characters
        const namePattern = /^[A-Za-z\s]{2,30}$/;
        if (!formData.firstName || !namePattern.test(formData.firstName)) {
            errors.firstName = 'First name must contain only letters and be between 2-30 characters';
        }
        if (!formData.lastName || !namePattern.test(formData.lastName)) {
            errors.lastName = 'Last name must contain only letters and be between 2-30 characters';
        }

        // Phone Number Validation: 10 digits, numbers only
        const phonePattern = /^\d{10}$/;
        if (!formData.phoneNumber || !phonePattern.test(formData.phoneNumber)) {
            errors.phoneNumber = 'Phone number must be exactly 10 digits';
        }

        // Email Validation: valid email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailPattern.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }

        // Address Validation: must contain numbers followed by street name
        const addressPattern = /^\d+\s[A-z]+\s[A-z]+/;
        if (!formData.address || !addressPattern.test(formData.address)) {
            errors.address = 'Address must contain a number followed by street name (e.g., "123 Main St")';
        }

        const postalCodePattern = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
        if (!formData.postalCode || !postalCodePattern.test(formData.postalCode)) {
            errors.postalCode = 'Postal code must follow the format A1A 1A1';
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            // Preparing parameters for EmailJS
            const emailParams = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                phoneNumber: formData.phoneNumber,
                email: formData.email,
                address: formData.address,
                postalCode: formData.postalCode
            };

            // Send form data via EmailJS
            emailjs.send('service_kw517zn', 'template_ydo8g9a', emailParams, 'vU2Bowht2onmKYhSm')
                .then((response) => {
                    console.log('Form successfully submitted:', response.status, response.text);
                    alert('Form submitted successfully!');
                    setFormData({
                        firstName: '',
                        lastName: '',
                        phoneNumber: '',
                        email: '',
                        address: '',
                        postalCode: ''
                    });
                })
                .catch((err) => {
                    console.error('Failed to submit form:', err);
                    alert('Failed to submit the form. Please try again.');
                });
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="w-full max-w-3xl p-8 bg-white shadow-lg rounded-lg mx-auto mt-8">
            <h2 className="text-3xl font-bold mb-6 text-navy">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                {['firstName', 'lastName', 'phoneNumber', 'email', 'address', 'postalCode'].map((field) => (
                    <div key={field}>
                        <label htmlFor={field} className="block text-sm font-medium text-navy mb-2">
                            {field.split(/(?=[A-Z])/).join(' ')}
                        </label>
                        <input
                            type={field === 'phoneNumber' ? 'tel' : 'text'}
                            id={field}
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            className={`block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${errors[field] ? 'border-red-500' : 'border-gray-300'} focus:ring-red-500`}
                            placeholder={`Enter your ${field.split(/(?=[A-Z])/).join(' ')}`}
                        />
                        {errors[field] && <p className="mt-1 text-red-500 text-sm">{errors[field]}</p>}
                    </div>
                ))}
                <button
                    type="submit"
                    className="w-full py-3 px-6 bg-navy bg-blue-500 text-red-500 font-semibold rounded-lg shadow-md hover:bg-navy-dark focus:outline-none focus:ring-2 focus:ring-navy focus:ring-opacity-50 transition-all duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
