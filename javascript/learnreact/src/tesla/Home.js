import React from 'react'
import Header from './Header'
import Section from './Section'
import './tesla.css'

function Home() {
  return (
    <>
      <Header />
      <Section
        name='Model 3'
        text='Order Online for Touchless Delivery'
        leftBtn = 'Custom Order'
        rightBtn = 'Existing Inventory'
        icon = {true}
        background = 'model-3.jpg'
      />
      <Section
        name='Model S'
        text='Order Online for Touchless Delivery'
        leftBtn = 'Custom Order'
        rightBtn = 'Existing Inventory'
        background = 'model-s.jpg'
      />
      <Section
        name='Model X'
        text='Order Online for Touchless Delivery'
        leftBtn = 'Custom Order'
        rightBtn = 'Existing Inventory'
        background = 'model-x.jpg'
      />
      <Section
        name='Model Y'
        text='Order Online for Touchless Delivery'
        leftBtn = 'Custom Order'
        rightBtn = 'Existing Inventory'
        background = 'model-y.jpg'
      />
      <Section
        name='Solar Panels'
        text='Lower Cost Solar Panels in India'
        leftBtn = 'Order Now'
        rightBtn = 'Learn More'
        background = 'solar-panel.jpg'
      />
      <Section
        name='Solar Roof'
        text='Produce Clean Energy from your roof'
        leftBtn = 'Order Now'
        rightBtn = 'Learn More'
        background = 'solar-roof.jpg'
        />
      <Section 
        name = 'Accessories'
        leftBtn = 'Order Now'
        background = 'accessories.jpg'
      />
    </>
  )
}

export default Home