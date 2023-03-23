import React from 'react';

function TodayDate() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const today = new Date().toLocaleDateString('en-US', options);
  return (
    <div>
      <h1>{today}</h1>
    </div>
  );
}

export default TodayDate;
