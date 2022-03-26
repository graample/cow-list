import React from 'react';

var Cow = (props) => (
  <div>
    My name is {props.cow.name}! {props.cow.description} {props.cow.catchphrase}
    <p>*****</p>
  </div>
);

export default Cow;