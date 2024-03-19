import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Field, Form, FormSpy } from 'react-final-form';
import AppFooter from '../modules/views/AppFooter';
import AppAppBar from '../modules/views/AppAppBar';
import AppForm from '../modules/views/AppForm';
import FormComponent from '../components/form';
import Typography from '@mui/material/Typography';

const HomePage = () => {
    return (
        <Box
            sx={{
                background: 'linear-gradient(to bottom, #000000, #4A148C)',
                minHeight: '100vh'
            }}
        >
            <AppAppBar />
            <AppForm>
                <React.Fragment>
                    <FormComponent />
                </React.Fragment>
            </AppForm>
        </Box>
    );
};

export default HomePage;
