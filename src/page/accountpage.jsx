
import AccountForms from "../components/accountforms/signin";
import axios from "axios";
import Bgpet from "../image/bgpet.jpg"
import { useState } from "react";
import Signupform from "../components/accountforms/signup";
import { Link } from "react-router-dom";

const Accountslog = () => {

    let [switchAcc, setSwitch] = useState("signin");
    const cookey = document.cookie.split(';')[0].split('=')[1];
    
    console.log(document.cookie)

    if (cookey > 0){
        window.location.href = '/profile';
    }

    if (switchAcc === "signin"){
        return (
            <div className="container-fluid loginpg" style={{backgroundImage: `url(${Bgpet})`}}>
                
                <div className="row loginform shadow ">
                <AccountForms/>
                <div className="col-5 ryt">

                <div className="row mt-5">
                    <div className="col align-self-center text-center text-light p-5">
                        <h1 className="text-light">Henlo, Hoomans!</h1>
                        <p>New here? Enter your personal details and create your account</p>
                        
                        <button className="btn btn-outline-light p-3 w-50" onClick={()=>setSwitch(switchAcc='signup')} >
                            SIGN UP
                        </button>
                        <br/><br/><br/>
                        <h4 className="text-light">Veterinary Account</h4>
                        
                        <Link to="/veterinary">
                        <button className="btn btn-outline-light p-3 w-50">
                            LOGIN HERE
                        </button></Link>      
                    </div>
                </div>
                </div>
                </div>
            </div>
        )
    }
    else {
        return(
            <div className="container-fluid loginpg" style={{backgroundImage: `url(${Bgpet})`}}>
                
                <div className="row loginform shadow ">
                
                <div className="col-5 ryt">
                <div className="row mt-5">
                <div className="col align-self-center text-center text-light p-5">
                    <h1 className="text-light">Henlo, Hoomans!</h1>
                    <p>Already have account? Click here to sign in</p>
                    <button className="btn btn-outline-light p-3 w-50" onClick={()=>setSwitch(switchAcc='signin')}>
                        LOG IN
                    </button>
                </div>
            </div>
        
            </div>
            <Signupform/>
                </div>
            </div>
        )
    }


}
    
   

export default Accountslog;