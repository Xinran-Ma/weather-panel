import React from 'react';
import { updateSydney, updateTokyo, updateBeijing, updateLondon } from '../App';

const Location = ({location}) => {
  return (
    <div className="location">
      <p className="location__name">{location}</p>
      <ul className="location__list">
        <li onClick={updateSydney} key="Sydney">Sydney</li>
        <li onClick={updateTokyo} key="Tokyo">Tokyo</li>
        <li onClick={updateBeijing} key="Beijing">Beijing</li>
        <li onClick={updateLondon} key="London">London</li>
      </ul>
    </div>
  )
}

export default Location;