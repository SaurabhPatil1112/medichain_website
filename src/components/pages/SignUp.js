import React from 'react';
import '../../App.css';
import { Button } from '../Button';

export default function SignUp() {
  return (
    <div className='signup-container'>
      <div className='input-area'>
        <form>
          <input 
          className='signup-input'
          name='name'
          type='name'
          placeholder='Your Name'
          />
          <input 
          className='signup-input'
          name='email'
          type='email'
          placeholder='Email ID'
          />
          <input 
          className='signup-input'
          name='phone'
          type='phone'
          placeholder='Phone Number'
          />
          <input 
          className='signup-input'
          name='publicid'
          type='id'
          placeholder='Your Public ID'
          />
          <Button buttonStyle='btn--outline'>SUBMIT</Button>
        </form>
      </div>

    </div>
  )
}
