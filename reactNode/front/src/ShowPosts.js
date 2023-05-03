import React, { useEffect } from 'react'
import axios from 'axios'

function ShowPosts() {
    useEffect(() => {
        axios.get("/api/showPosts")
        .then((result) => {console.log(result)})
    }, [])
  return (
    <div>ShowPosts</div>
  )
}

export default ShowPosts