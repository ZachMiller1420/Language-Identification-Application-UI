import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';


const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#9C27B0', 
    },
    '&:hover fieldset': {
      borderColor: '#9C27B0',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#9C27B0', 
    },
  },
  '& .MuiInputLabel-root': {
    color: '#9C27B0', 
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#9C27B0', 
  },
});

const FormComponent = () => {
    const [text, setText] = useState('');
    const [prediction, setPrediction] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/predict', { text });
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', margin: '0 auto' }}>
            <form onSubmit={handleSubmit} style={{ width: '100%', color: '#fff'}}>
                <StyledTextField
                    label="Enter your message"
                    variant="outlined"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    fullWidth
                    inputProps={{ style: { color: '#fff' } }}
                    InputLabelProps={{ classes: { root: 'input-label', focused: 'input-label-focused' } }}
                />
                <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '1rem', width: '100%', backgroundColor: '#9C27B0', '&:hover': { backgroundColor: '#9C27B0' } }}>
                    Submit
                </Button>
            </form>
            {prediction && (
                <Paper elevation={3} style={{ width: '100%', marginTop: '1rem', padding: '1rem', textAlign: 'center', backgroundColor: '#9C27B0', color: '#fff' }}>
                    <Typography variant="body1" gutterBottom>
                        {prediction}
                    </Typography>
                </Paper>
            )}
        </div>
    );
};

export default FormComponent;


