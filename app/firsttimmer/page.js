import React from 'react';
import Form from '@/components/FirstTimerForm.js';

const FirstTimerPage = () => {
  return (
    <div className="  p-4 bg-bg-green">
      <h1 className=" text-2xl sm:text-3xl font-bold mb-6 text-white">First Timer Form</h1>
      <Form />
    </div>
  );
};

export default FirstTimerPage;
