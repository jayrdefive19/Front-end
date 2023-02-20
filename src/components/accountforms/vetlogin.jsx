import axios from "axios";
import Bgpet from "../../image/bgpet.jpg"
import { useState } from "react";

const Vetform = () => {
    
    let [login, goLogin] = useState('');

    const url = "http://localhost:4001/vet";
    
    
    const loginSubmit = (e) => {

        e.preventDefault();
        axios.post(`${url}`, {
           email:  e.target.email.value,
           password:  e.target.password.value
        }).then((response) => {
            console.log(response);
            document.cookie = response.data.length > 0 ? `vet=${response.data[0].id}`: '';
            response.data.length > 0 ? window.location.href = '/veterinary' : goLogin('Invalid Credentials') ;
        })
    }

        return (
            <div className="container-fluid loginpg" style={{backgroundImage: `url(${Bgpet})`}}>
                <div className="row loginform shadow w-50 m-auto">

                <div className="col login mt-5">
                    <div className="row">
                        <div className="col align-self-center text-center p-5">
                            <h1 className="text-dark">Veterinary Login</h1>
                            <br/>
                            <form onSubmit={loginSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label text-dark">Email</label>
                                    <input type="text" className="form-control w-50 m-auto" name="email" aria-describedby="emailHelp" />
                            
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label text-dark">Password</label>
                                    <input type="password" className="form-control w-50 m-auto" name="password" /> <br/>
                                    <button type="submit" className="btn btn-outline-light signbtn p-3 w-50">
                                LOGIN
                            </button>
                                </div>
                            </form>
                            <p className="text-danger">{login}</p>
                        </div>
                        
                    </div>
                    
                </div>
                
                </div>
            </div>
        )
}

export default Vetform