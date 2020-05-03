import React from 'react'
import './notfound.styles.scss'
import illus from '../../assets/6.png'

const NotFound = () => {
  return (
    <div className='not-found-illustration'>
      <img src={illus} alt='404 not found' height='450px'/>
    </div>
  )
}

export default NotFound
