import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const ProgressB = () => {
  return (
    <div className='lg:p-4 lg:w-full p-3 mt-5'>
      <h1 className='text-1xl font-semibold '> India</h1>
      <ProgressBar striped variant="success" now={40} className='mb-3' />
      <h1 className='text-1xl font-semibold '> Maurituis</h1>
      <ProgressBar striped variant="info" now={20} className='mb-3' />
      <h1 className='text-1xl font-semibold '> Colombia</h1>
      <ProgressBar striped variant="warning" now={60} className='mb-3' />
      <h1 className='text-1xl font-semibold '> Russia</h1>
      <ProgressBar striped variant="danger"  now={80} className='mb-3' />
      <h1 className='text-1xl font-semibold '> France</h1>
      <ProgressBar striped variant="alert"  now={80} className='mb-3' />
    </div>
  );
}

export default ProgressB;
