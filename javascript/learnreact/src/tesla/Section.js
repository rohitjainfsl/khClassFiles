import React from 'react'
import styled from 'styled-components'

function Section(props) {
  return (
    <section style = {{backgroundImage: `url('tesla images/${props.background}')`}}>
      <div className='carName'>
        <h1>{props.name}</h1>
        <p>{props.text}</p>
      </div>

      <div className='buttons'>
        <div className='button-group'>
          <a href=''>{props.leftBtn}</a>
          {props.rightBtn && <a href=''>{props.rightBtn}</a>}
        </div>
        <div className='scroll-down-icon'>
          {props.icon && <img src='tesla images/down-arrow.svg'></img>}
        </div>
      </div>


    </section>
  )
}

export default Section