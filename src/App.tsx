import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Tree from 'react-tree-graph';
import tasks from './tasks.json'

function App() {
  const [count, setCount] = useState(0)
  let data = {
    name: 'Parent',
    children: [{
      name: 'Child One'
    }, {
      name: 'Child Two'
    }]
  };

  const x = () => {
    let s = ""
    for(const [k, v] of Object.entries(tasks)){
      s += k
    }
    return s
  }

  return (
    <div className="App">
    {/* <Tree
      data={data}
      height={400}
      width={400}
    /> */}
      {/* {JSON.stringify(Object.entries(tasks))} */}
      {x()}
    </div>
  )
}

export default App
