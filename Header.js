import { Link } from 'react-router-dom';

function Header (){
    return(
        <div className="Header">
            <button>Logo</button>
            <Link className="Links" to="/Section2">Section2</Link>
            <Link className="Links" to="/Section3">Section3</Link>
            <Link className="Links" to="/Section4">Section4</Link>
            <Link className="Links" to="/Section5">Section5</Link>
        </div>
    )
}
export default Header