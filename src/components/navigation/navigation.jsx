import Logo from '../../logo.png';
import './navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="dblue container-fluid">
        <div className="container">
            <div className="row">
                
                <div className="col">
                <Link to="/">
                    <img className="logo" src={Logo} alt="logo" />
                    </Link>
                </div>
                
                <div className=" navlink col d-flex flex-row-reverse">
                <Link to='/login' style={{textDecoration: 'none'}}><div className="p-3 ms-2 bg-warning text-black">
                        LOGIN/SIGNUP
                    </div></Link>
                    <Link to='/contact' style={{textDecoration: 'none', color: 'white'}}>
                    <div className="p-3 ms-2">
                        CONTACT
                    </div>
                    </Link>
                    <Link to='/services' style={{textDecoration: 'none', color: 'white'}}>
                    <div className="p-3 ms-2">
                        SERVICES
                    </div></Link>
                    <Link to='/about' style={{textDecoration: 'none', color: 'white'}}>
                    <div className="p-3 ms-2">
                        ABOUT
                    </div>
                    </Link>
                    
                
                </div>
            </div>
        </div>
        </div>
    )
    
}

export default Navigation;