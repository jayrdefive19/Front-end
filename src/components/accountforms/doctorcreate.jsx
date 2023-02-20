
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaCheck } from 'react-icons/fa';
import '../modal/modal.css'

const Doctorform = (props) => {
    const [createProcess, setCreateProcess] = useState('');
    const [warning, setWarning] = useState('');
    let [data, setData] = useState()
    const url = "http://localhost:4001/users/create";

    const getFormdata = (e) => {
        console.log(e.target.doctor.value)
        setCreateProcess('');
        e.preventDefault();
        if (e.target.doctor.value === '' || e.target.email.value === '' || e.target.password.value === '' ){
            setWarning('Please fill up the form!')
        }
        else{
          setData({
            doctor: e.target.doctor.value,
            email: e.target.email.value,
            password: e.target.password.value
        })
        setCreateProcess('next')
        }
    }

    const createAccount = (e) =>{
        e.preventDefault();
        if (e.target.specialty.value === '' || e.target.education.value === '' || e.target.address.value === '' ){
            setWarning('Please fill up the form!')
        }
        else{
        
        setData(Object.assign(data,{
            specialty: e.target.specialty.value,
            education: e.target.education.value,
            address: e.target.address.value,
            birthday: e.target.birthday.value,
            gender: e.target.gender.value
        }));
        console.log('heheh')
        console.log(data);

        axios.patch(`${url}`,data )
        .then(response => {
            console.log(response);
        });
        setWarning('')
        setCreateProcess('success')
        }
    }



    return (
        <div className="login">
            
            {createProcess === ""  && <div className="row">
                
                <span className="close" onClick={props.onClose}>&times;</span>
                <div className="col align-self-center text-center ">
                    
                    <h3 className="text-dark">Add Veterinary Account </h3><br/>
                    
                    <form onSubmit={getFormdata}>
                    <div className="mb-3 row">
                            
                            <label htmlFor="InputUser" className="form-label text-dark" >Doctor's Full Name</label>
                            <input name="doctor" type="text" className="form-control  m-auto" style={{width: '400px'}} id="InputUser" aria-describedby="emailHelp" />
                        
                        </div>
                        <div className="mb-3">
                            <label htmlFor="InputEmail1" className="form-label text-dark">Email Address</label>
                            <input type="email" className="form-control m-auto" style={{width: '400px'}} id="InputEmail1" aria-describedby="emailHelp" name="email"/>
                            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label text-dark">Password</label>
                            <input type="password" className="form-control  m-auto" style={{width: '400px'}} id="exampleInputPassword1" name="password"/>
                        </div>
                        <button type="submit" className="btn btn-outline-light signbtn p-3 " >
                        Create Account
                        </button>
                    </form>
                    <p className="text-danger">{warning}</p>   
                </div>
            </div>}

            {createProcess === 'next' && <div className="text-center">

                <div className="container-fluid">
                
                <form onSubmit={createAccount}><br/>
                <h3 className="text-dark">Enter Personal Data</h3><br/><br/>
                
                <div className="mb-3 row">
                    
                    <div className="col gx-0">
                    
                        <label htmlFor="InputUser" className="form-label text-dark" >Education</label>
                        <input name="education" type="text" className="form-control m-auto" id="InputUser" aria-describedby="emailHelp" />
                    </div>
                    <div className="col">
                        <label htmlFor="InputUser" className="form-label text-dark" >Specialize</label>
                        <input name="specialty" type="text" className="form-control m-auto" id="InputUser" aria-describedby="emailHelp" />
                    </div>         
                </div>
                <div className="mb-3 row">
                    <div className="col gx-0">
                    <label htmlFor="InputUser" className="form-label text-dark" >Date of Birth</label>
                    <input type="date" id="birthday" className="form-control" name="birthday"/>
                    </div>
                    <div className="col">
                        <label htmlFor="InputUser" className="form-label text-dark" >Gender</label>
                        <select name="gender" className="form-select" aria-label="Default select example">

                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
    
                        </select>
                    </div>         
                </div>
                <div className="mb-3 row">
                    <div className="col gx-0">
                    <label htmlFor="InputUser" className="form-label text-dark" >Address</label>
                    <input name="address" type="text" className="form-control  m-auto" id="InputUser" aria-describedby="emailHelp" />
                    </div>        
                </div>
                <p className="text-danger">{warning}</p>   
                

                <button type="submit" className="btn btn-outline-light signbtn p-3 w-50"  >
                Continue
                </button>
                </form>
                </div>
                </div>
            }
                {createProcess === 'success' && <div className="text-center ">
                <h3>ACCOUNT CREATED SUCCESSFULY</h3>
                <FaCheck style={{fontSize:'120px'}}/> <br/><br/>
                <button onClick={props.onClose} type="submit" className="btn btn-outline-light signbtn p-3" >
                        Return to Dashboard
                </button>
                </div>
            }
        </div>
    )
}

export default Doctorform