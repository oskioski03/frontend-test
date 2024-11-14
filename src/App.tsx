import { useEffect, useState } from 'react'
import { Card, CardProps } from './Card'

function App() {
  const [data, setData] = useState<CardProps[]>([])

  useEffect(() => {
    fetch('http://frog01.mikr.us:41679//data')
    .then((data) => data.json())
    .then((data) => setData(data.data))
  }, [])


  return (
    <div style={{display: 'flex', gap: "10px"}} >
      <h1>TESTOWANIE</h1>
      {!data.length ? 'no data' : data.map((item) => <Card {...item} />)}
    </div>
  )
}

export default App
