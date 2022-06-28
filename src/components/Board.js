import '../styles/Board.css'
import car from '../img/car.png'
import blackCar from '../img/black-car.png'
import plane from '../img/plane.png'
import bike from '../img/bike.png'
import motorcycle from '../img/motorcycle.png'
import iceSkate from '../img/ice-skate.png'
import skateboard from '../img/skateboard.png'
import boat from '../img/boat.png'
import bus from '../img/bus.png'
import truck from '../img/truck.png'
import rocket from '../img/rocket.png'
import jetski from '../img/jetski.png'
import { useState } from 'react'

function Board(props) {
  const [background, setBackground] = useState([car, blackCar, plane, bike, motorcycle, iceSkate, skateboard, boat, bus, truck, rocket, jetski]);

  return(
    <div className='board-container'>
      <button value={props.value.val1} onClick={(e) => props.game(e)} style={{backgroundImage: `url(${background[props.value.val1]})`}} />
      <button value={props.value.val2} onClick={(e) => props.game(e)} style={{backgroundImage: `url(${background[props.value.val2]})`}} />
      <button value={props.value.val3} onClick={(e) => props.game(e)} style={{backgroundImage: `url(${background[props.value.val3]})`}} />
      <button value={props.value.val4} onClick={(e) => props.game(e)} style={{backgroundImage: `url(${background[props.value.val4]})`}} />
      <button value={props.value.val5} onClick={(e) => props.game(e)} style={{backgroundImage: `url(${background[props.value.val5]})`}} />
      <button value={props.value.val6} onClick={(e) => props.game(e)} style={{backgroundImage: `url(${background[props.value.val6]})`}} />
      <button value={props.value.val7} onClick={(e) => props.game(e)} style={{backgroundImage: `url(${background[props.value.val7]})`}} />
      <button value={props.value.val8} onClick={(e) => props.game(e)} style={{backgroundImage: `url(${background[props.value.val8]})`}} />
      <button value={props.value.val9} onClick={(e) => props.game(e)} style={{backgroundImage: `url(${background[props.value.val9]})`}} />
      <button value={props.value.val10} onClick={(e) => props.game(e)} style={{backgroundImage: `url(${background[props.value.val10]})`}} />
      <button value={props.value.val11} onClick={(e) => props.game(e)} style={{backgroundImage: `url(${background[props.value.val11]})`}} />
      <button value={props.value.val12} onClick={(e) => props.game(e)} style={{backgroundImage: `url(${background[props.value.val12]})`}} />
    </div>
  )
}

export default Board