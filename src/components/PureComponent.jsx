import React from 'react';

const PureComponent = ({ name }) => {
  console.log('PureComponent Memo component')

  return (
    <div>Pure Component {name}</div>
  );
};

export default PureComponent;

