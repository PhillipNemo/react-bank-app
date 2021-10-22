import { FaHistory, FaMobileAlt, FaMoneyCheck, FaNewspaper, FaPaypal, FaShoppingBag, FaTv} from 'react-icons/fa'


const QuickLink = ({onAdd}) => {
 
    return ( 
        <div className='quickLink'>
            <h3>Banking Quick Links</h3>
            <div className='quickLinkContainer'>

                <div onClick={onAdd}>
                    <div className="symbol"><FaMoneyCheck/></div>
                    <p className='link'>Send Money</p>
                </div>

                <a className='history' href="#history">
                    <div>
                        <div className="symbol"><FaHistory/></div>
                    <p>Transaction History</p>
                    </div>
                </a>
                <div>
                    <div className="symbol"><FaTv/></div>
                    <p>Tv Subscription</p>
                </div>
                <div>
                    <div className="symbol"><FaNewspaper/></div>
                    <p>Lifestyle</p>
                </div>
                <div>
                    <div className="symbol"><FaShoppingBag/></div>
                    <p>Quick Loans</p>
                </div>
                <div>
                    <div className="symbol"><FaMobileAlt/></div>
                    <p>Data and Mobile Top-up</p>
                </div>
                <div>
                    <div className="symbol"><FaPaypal/></div>
                    <p>Pay Bills</p>
                </div>
          </div>
        </div>
     );
}
 
export default QuickLink;