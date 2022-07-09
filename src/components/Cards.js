import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check this out!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/doctor-1.jpg'
              text='Know more about the doctors'
              label='Doctors'
              path='/doctors'
            />
            <CardItem
              src='images/hospital-1.jpg'
              text='Information about the hospitlas'
              label='Hospitals'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/about-1.jpg'
              text='Know Everything About Our Services'
              label='More About us'
              path='/services'
            />
            <CardItem
              src='images/blockchain-1.jpg'
              text='What are the BENEFITS of Blockchain Based Health Records'
              label='Blockchain EHR'
              path='/products'
            />
            <CardItem
              src='images/future-1.jpg'
              text='Join the FUTURE'
              label='FUTURE'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
