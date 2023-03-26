import React from 'react';
import Header from 'Header';
import Footer from 'Footer';
import Loading from 'Loading';
import Button from 'Button';

export const App = () => {
  return (
    <>
      <Header title="Adventure" />
      <Footer />
      <Loading />
      <Button />
    </>
  );
}