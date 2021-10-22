import { FaUser } from 'react-icons/fa'


const TransactionTable = ({ historyContents }) => {
  
    return (
        <div className='transactionTable'  id='history'>
         <h2 className='tansHistory'>Transaction History</h2>

            <table>
                <thead>
                    <tr>
                        <th>Account Name</th>
                        <th>Account Number</th>
                        <th>Account Type</th>
                    </tr>
                </thead>

                <tbody>
                
                {historyContents.map(historyContent => (
                <tr key={historyContent.id} className="historyContent">
                    <td ><span><FaUser/></span> { historyContent.Account_Name }</td>
                    <td >{ historyContent.Account_Number }</td>
                    <td>{ historyContent.Account_Type }</td> 
                 </tr>
                 ))}
                 
               </tbody>
            </table>
        </div>
      );
}
 
export default TransactionTable;