import axios from "axios";
import { useState } from "react";
import { get } from "react-hook-form";
import { FaCheck } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Signupform = () => {
    const [createSuccess, setCreateSuccess] = useState('');
    const [warning, setWarning] = useState('');
    let [data, setData] = useState()
    const url = "http://localhost:4001/user";

    const createAccount = (e) =>{
        if (e.target.firstname.value === '' || e.target.lastname.value === '' || e.target.address.value === '' ){
            setWarning('Please fill up the form!')
        }
        else{
            e.preventDefault();
     
        setData(Object.assign(data,{first_name: e.target.firstname.value,
            last_name: e.target.lastname.value,
            address: e.target.address.value,}));

        console.log(data);
        axios.patch(`${url}`,data )
        .then(response => {
            document.cookie = `user=${response.data.results.insertId}`;
        });

        setCreateSuccess('success')  
        }

        
    }

    const getData = (e) => {
        e.preventDefault();

        if (e.target.username.value === '' || e.target.username.value === '' || e.target.username.value === '' ){
            setWarning('Please fill up the form!')
        }
        else{
          setData({
            username: e.target.username.value,
            password: e.target.password.value,
            email: e.target.email.value
        })
        setCreateSuccess('next')
        }

    }

        return (
            <div className="col-7 login mt-5">
                {createSuccess === ""  && <div className="row">
                    <div className="col align-self-center text-center p-5">
                        <h1 className="text-dark">Create your account</h1>
                        <form onSubmit={getData}>
                        <div className="mb-3 row">
                                
                                <label htmlFor="InputUser" className="form-label text-dark" >Username</label>
                                <input name="username" type="text" className="form-control w-50 m-auto" id="InputUser" aria-describedby="emailHelp" />
                            
                            </div>
                            <div className="mb-3">
                                <label htmlFor="InputEmail1" className="form-label text-dark">Email Address</label>
                                <input type="email" className="form-control w-50 m-auto" id="InputEmail1" aria-describedby="emailHelp" name="email"/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label text-dark">Password</label>
                                <input type="password" className="form-control w-50 m-auto" id="exampleInputPassword1" name="password"/>
                            </div>
                            <button type="submit" className="btn btn-outline-light signbtn p-3 w-50" >
                            Create Account
                            </button>
                        </form>
                        <p className="text-danger">{warning}</p>   
                    </div>
                </div>}
                {createSuccess === 'next' && <div className="text-center mt-5">
                    <div className="container-fluid w-50">
                    <form onSubmit={createAccount}>
                    <h3 className="text-dark">Enter your Personal Data</h3><br/>
                    <div className="mb-3 row">
                        <div className="col gx-0">
                            <label htmlFor="InputUser" className="form-label text-dark" >First Name</label>
                            <input name="firstname" type="text" className="form-control m-auto" id="InputUser" aria-describedby="emailHelp" />
                        </div>
                        <div className="col">
                            <label htmlFor="InputUser" className="form-label text-dark" >Last Name</label>
                            <input name="lastname" type="text" className="form-control m-auto" id="InputUser" aria-describedby="emailHelp" />
                        </div>         
                    </div>
                    <div className="mb-3 row">
                        <div className="col gx-0">
                        <label htmlFor="InputUser" className="form-label text-dark" >Date of Birth</label>
                        <input type="date" id="birthday" className="form-control" name="birthday"/>
                        </div>
                        <div className="col">
                            <label htmlFor="InputUser" className="form-label text-dark" >Gender</label>
                            <select className="form-select" aria-label="Default select example">

                                <option value="1">Male</option>
                                <option value="2">Female</option>
        
                            </select>
                        </div>         
                    </div>
                    <div className="mb-3 row">
                        <div className="col gx-0">
                        <label htmlFor="InputUser" className="form-label text-dark" >Address</label>
                        <input name="address" type="text" className="form-control  m-auto" id="InputUser" aria-describedby="emailHelp" />
                        </div>        
                    </div>
                    

                    <button type="submit" className="btn btn-outline-light signbtn p-3 w-50"  >
                    Continue
                    </button>
                    </form>
                    </div>
                    </div>
                }
                    {createSuccess === 'success' && <div className="text-center mt-5">
                    <h3><br/>ACCOUNT CREATED<br/> SUCCESSFULY</h3>
                    <FaCheck style={{fontSize:'120px'}}/> <br/><br/>
                    <Link to="/profile">
                    <button type="submit" className="btn btn-outline-light signbtn p-3 "  >
                           Continue to your Account
                    </button></Link>
                    </div>
                }
            </div>
)


}

export default Signupform;