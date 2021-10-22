import { useState } from 'react';

import './index.css';
import Nav from './Components/Nav';
import QuickLink from './Components/QuickLinks';
import InputContainer from './Components/InputContainer';
import TransactionTable from './Components/TransactionTable';

function App() {


  const [historyContents, setHistoryContents] = useState([
    {   
        id : 1,
        Account_Name : 'Reuben Gamer',
        Account_Number : 7689744310,
        Account_Type : 'Current Account'
    },
    {   
        id : 2,
        Account_Name : 'James Igbori',
        Account_Number : 8589744310,
        Account_Type : 'Savings Account'
    },
    {   
        id : 3,
        Account_Name : 'Daniel Nwosu',
        Account_Number : 2098534679,
        Account_Type : 'Savings Account'
    }
])


const [showInput , setShowInput] = useState(false);



const addTask = (historyContent) => {
  const id = Math.floor(Math.random() * 1000)
  const newTransaction = { id, ...historyContent }
  setHistoryContents([...historyContents, newTransaction])
}


  return (
    <div className="container">
      <Nav />
      {showInput && <InputContainer onAdd={addTask}/>}
      <QuickLink onAdd={() => setShowInput (!showInput) }/>
      <TransactionTable historyContents={historyContents}/>
    </div>
  );
}

export default App;
