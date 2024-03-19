import React, { useState } from 'react';
import axios from 'axios';

const FormComponent = () => {
    const [text, setText] = useState('');
    const[prediction, setPrediction] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/predict', {text});
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
            <p>Output: {prediction}</p>
        </div>
    )
};

export default FormComponent;
