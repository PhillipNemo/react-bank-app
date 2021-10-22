import { useState } from 'react';

const InputContainer = ({ onAdd }) => {

    const [Account_Name, setAccount_Name] = useState(' ');
    const [Account_Number, setAccount_Number] = useState(' ');
    const [Account_Type, setAccount_Type] = useState(' ');


const onSubmit = (e) => {
   e.preventDefault();

   onAdd({Account_Name,Account_Number,Account_Type})

   setAccount_Name('')
   setAccount_Number('')
   setAccount_Type('')

   alert('Transaction Succesful')
}

    return (
        <div className='create'>
            <h2>SEND MONEY</h2>
            <form  onSubmit={onSubmit}>
                <label>Account name</label>
                <input type="text" placeholder='Account name...'
                value={Account_Name} 
                required
                onChange={(e) => setAccount_Name(e.target.value)}
                    />
                    <label>Account number</label>
                <input type="number" placeholder='Account number...'
                value={Account_Number} 
                required
                onChange={(e) => setAccount_Number(e.target.value)}
                    />
                <label>Account type(Savings/Current)</label>
                <input type="text" placeholder='Savings/Current...'
                value={Account_Type} 
                required
                onChange={(e) => setAccount_Type(e.target.value)} />
                <div className='btn'>
                    <button> Send</button>
                </div>
             </form>       
            
        </div>
      );
}
 
export default InputContainer;