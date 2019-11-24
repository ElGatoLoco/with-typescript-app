import React from 'react';
import Navbar from '../features/navigation/Navbar';

const Page: React.FC = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default Page;
