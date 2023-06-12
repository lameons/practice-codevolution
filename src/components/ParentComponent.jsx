import React, { useEffect, useState } from 'react';
import RegularComponent from './RegularComponent';
import PureComponent from './PureComponent';
import MemoComponent from './MemoComponent';

const ParentComponent = () => {
  const [name, setName] = useState('jeco');

  useEffect(() => {
    const interval = setInterval(() => {
      setName('jeco');

    }, 2000);

    return () => {
      clearInterval(interval);
      
    };
  }, []);
  console.log('====================PARENT COMPONENT=================')

  return (
    
    <div>
        
      <h1>ParentComponent</h1>
      <MemoComponent name={name}/>
      <RegularComponent name={name} />
      <PureComponent name={name} />
    </div>
  );
};

export default ParentComponent;
