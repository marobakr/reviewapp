/* eslint-disable */
import React from 'react'
import { useState, useEffect } from 'react'
import { hooks } from './hooks'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

// if you not make export defult to file hooks prefare but it in cerly prasec same this... {}
const OurReviews = () => {
  const [person, setPerson] = useState(hooks)
  const [counter, setCounter] = useState(1)

  const increase = () => {
    setCounter(counter + 1)
    console.log(counter)
    if (counter === 4) {
      setCounter(1)
    }
  }
  const decrease = () => {
    setCounter(counter - 1)
    if (counter === 1) {
      setCounter(4)
    }
  }
  const iteration = () => {
    setCounter(Math.floor(Math.random() * 4) + 1)
    console.log(Math.floor(Math.random() * 4) + 1)
  }

  return (
    <React.Fragment>
      {person.map((dataForMen) => {
        if (dataForMen.id === counter) {
          const { imge, name, title, info, id } = dataForMen
          return (
            <div key={id} className='box'>
              <div className='img'>
                <img src={imge} alt='' />
                <div className='icons'>
                  <span>,,</span>
                </div>
              </div>
              <div className='heading'>
                <h3>{name}</h3>
                <p>{title}</p>
              </div>
              <div className='info'>{info}</div>
              <div className='angle'>
                <FaAngleLeft onClick={() => decrease()} />
                <FaAngleRight onClick={() => increase()} />
              </div>
              <button onClick={() => iteration()}>surprise me</button>
            </div>
          )
        }
      })}
    </React.Fragment>
  )
}

export default OurReviews
