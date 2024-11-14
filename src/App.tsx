import { useEffect, useState } from 'react'
import { Card, CardProps } from './Card'

function App() {
  const [data, setData] = useState<CardProps[]>([])

  useEffect(() => {
    fetch('http://localhost:4200/data')
    .then((data) => data.json())
    .then((data) => setData(data.data))
  }, [])

 console.log('data ', data)

  return (
    <div style={{display: 'flex', gap: "10px"}} >
      {!data.length ? 'no data' : data.map((item) => <Card {...item} />)}
    </div>
  )
}

export default App
