// @flow
import React from 'react';
import './login.scss';
import Form from 'react-bootstrap/Form';
import Button from '../../components/base/Button/Button';
import Typography from '../../components/base/Typography/Typography';

type Props = {
    onSubmit: Function,
    onChange: Function
}

export default function Login({ onSubmit, onChange }:Props): React$Element<any> {
    return (
        <div className='login'>
            <div className='d-flex justify-content-center align-items-center w-100 h-100'>
                <div className='form-container'>
                    <Typography
                        variant='size-26' color='color-2' weight='bold'
                        className='text-center'>
                        Log in
                    </Typography>
                    <Form onSubmit={onSubmit}>
                        <input className='form-control mt-4' placeholder='Email' type='email'
                            required={true} onChange={onChange} name='email'/>
                        <input className='form-control mt-4' placeholder='Password' type='password'
                            required={true} onChange={onChange} name='password'/>
                        <Button label='Login' type='submit' className='mt-4 px-4 w-100 d-block' />
                    </Form>
                </div>
            </div>
        </div>
    );
}
