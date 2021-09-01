import React from "react";
import 'components/DayListItem.scss';


const classNames = require('classnames');


export default function DayListItem(props) {

  const dayClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0
  })

  const formatSpots = function() {
    let remainingSpots;

    if (props.spots === 0) {
      remainingSpots = 'no spots remaining';
    } else if (props.spots > 0) {
      remainingSpots = `${props.spots}${props.spots === 1 ? ' spot ': ' spots '} remaining`;
    }
    return remainingSpots;
  }
  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}> 
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}