import { useEffect, useState } from 'react'
import './App.css'

import axios from 'axios'

function App() {

  const [prints, setPrints] = useState([])
  const API_URL = "http://localhost:3000/api/prints"

  const getPrints = async () => {
    const res = await axios.get(API_URL)
    return res.data
  }


  useEffect(() => {
    getPrints().then(setPrints)

    console.log(prints)
  }, [])


  const AddItemHandler = () => {

    console.log(prints[0])
  }


  return (
    <>
      <div>
        <h1>hola</h1>
        <button onClick={AddItemHandler}>
          + impresion
        </button>
        

      </div>
    </>
  )
}

export default App
/*

Impresiones (inicio) 


cotizacion


CRUD
*/