import React from 'react';

const RegularComponent = ({ name }) => {
  console.log('RegularComponent Memo component')

    
  return (
    <div>Regular Component {name}</div>
  );
};

export default RegularComponent;
