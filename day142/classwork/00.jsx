import React from 'react';

function List() {
  const sia=['bread', 'milk', 'sugar'];

  function app(e){
    e.target.textContent=sia[0];
  }

  return (  
      <h1 onClick={app}>click</h1>
  );
}
export default List;