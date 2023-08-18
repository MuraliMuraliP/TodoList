import React from 'react';
function ParentComponent() {
  const message = 'Hello from parent!';
  return (
    <>
     <div>
      <ChildComponent message={message}/>
    </div></>
   
  );
}
function ChildComponent(props) {
  return (
    <div>
      <p>{props.message}</p>
      <ParentComponent/>
    </div>
  );
}
export default ChildComponent;




