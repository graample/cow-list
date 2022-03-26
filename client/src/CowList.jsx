import React from 'react';
import Cow from './Cow.jsx';

var CowList = (props) => (
  <div>
    <p>*************************************</p>
    {props.cows.map((eachCow) => <Cow cow={eachCow} key={eachCow.id}/>)}
  </div>
);

export default CowList;