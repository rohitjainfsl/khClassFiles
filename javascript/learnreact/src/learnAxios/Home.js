import React, { useState } from 'react'
import axios from 'axios'

function Home() {

  const [photo, setPhoto] = useState('')
  const [name, setName] = useState('')


  async function getRandomData() {
    // axios.get('https://randomuser.me/api/')
    // .then((result) => {console.log(result)})
    // .catch((error) => {console.log(error)})

    const result = await axios.get('https://randomuser.me/api/')
    console.log(result)

    setPhoto(result.data.results[0].picture.large)
    setName(result.data.results[0].name.first + " " + result.data.results[0].name.last)


    // axios.create


  }



  return (
    <>
      <button onClick={getRandomData}>Get Random Data</button>
      <div>
        <img src={photo}></img>
        <h4>{name}</h4>
      </div>
    </>
  )
}

export default Home