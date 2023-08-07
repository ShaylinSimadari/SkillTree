import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Tree from 'react-tree-graph';
import tasks from './tasks.json'
import { Box, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { Item } from './Item';
import { ItemList } from './ItemList';

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

  const t = (str: string, count: number) => {
    let s = ""
    for(let i = 0 ; i < count; i++){
      s += " "
    }
    return s
  }

  const rec = (obj: Object, count: number=0) => {
    let s = ""
    for(const [k, v] of Object.entries(obj)){
      s += t(" ", count) + k + "\n" + rec(v, count + 1)
    }
    return s
  }

  const recd = (obj: Object, count: number=0): [string, number][] => {
    let s: [string, number][] = []
    for(const [k, v] of Object.entries(obj)){
      s.push([k, count])
      s.push(...recd(v, count + 1))
    }
    return s
  }

  return (
    <div className="App">
      <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
        <ItemList items={recd(tasks)} />
      </Box>
    </div>
  )
}

export default App
