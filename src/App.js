import { useState } from 'react';
import data from './data';
import './App.css';
import List from './List'

function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
    <div className="container">
      <h3>{data.length} birthdays today</h3>
      <List person={person} />
      <button onClick={()=>setPeople([])}>clear all</button>
    </div>
    </main>
  );
}

export default App;
