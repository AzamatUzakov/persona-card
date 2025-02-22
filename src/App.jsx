import { useState } from 'react'
import './App.css'

function App() {
  const [val, setValue] = useState({
    count: 0,
    text: ""
  })
console.log(val);

  return (
    <div>
      <button
        onClick={() => setValue({ ...val, count: val.count + 1 })}> +</button >
      {val.count}

      <button
        onClick={() => setValue({ count: val.count   - 1 })}
      >-</button>
    </div >
  )
}
export default App