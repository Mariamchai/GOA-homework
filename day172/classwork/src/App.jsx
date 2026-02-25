import React, {useState} from 'react';
import { useEffect } from 'react';


export default function App() { 
  const [data, setData] = useState(null)

  useEffect(() => {
    let subscribed = true

    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(result => {
        if (subscribed) {
          setData(result)
        }});


      return () => {
        subscribed = false
      }
  }, [])



  return (
    <>
      <div>Data: {data[0].price}</div>
    </>
  )
}

export default function App() { 
  const [count, setCount] = useState(10)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev > 0) {
          return prev - 1
        } else {
          clearInterval(interval)
          return 0
        }
      })
    } , 1000)


    return () => {
        clearInterval(interval)
      }
  }, [])}
