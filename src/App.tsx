
import { Card } from './Card'

function App() {



  const dataArr = [
    {
        id: '1',
        name: 'Adam',
        surname: "Karolczak"
    },
    {
        id: '2',
        name: 'Janina',
        surname: "Grodzka"
    },
    {
        id: '3',
        name: 'Ziomek',
        surname: "Bazowy"
    },
    {
        id: '4',
        name: 'Rizzler',
        surname: "Sigmowy"
    },
    {
        id: '5',
        name: 'Skibidi',
        surname: "Toiletowy"
    },
]

  return (
    <div style={{display: 'flex', gap: "10px"}} >
      <h1>TESTOWANIE</h1>
      {!dataArr.length ? 'no data' : dataArr.map((item) => <Card {...item} />)}
    </div>
  )
}

export default App
