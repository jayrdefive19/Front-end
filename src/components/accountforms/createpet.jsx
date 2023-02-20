
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaCheck } from 'react-icons/fa';
import '../modal/modal.css'

const Petcreateform = (props) => {
    const [createProcess, setCreateProcess] = useState('');
    const [warning, setWarning] = useState('');

    let user_id = document.cookie.split(';')[0].split('=')[1];
    console.log(user_id)
    const url = "http://localhost:4001/users/petcreate";

    const getFormdata = (e) => {
        if (createProcess =='success'){
            setCreateProcess('');
        }
        setCreateProcess('');
        e.preventDefault();

        let data = {
            petname: e.target.petname.value,
            species: e.target.species.value,
            breed: e.target.breed.value,
            sex: e.target.sex.value,
            birthplace: e.target.birthplace.value,
            birthday: e.target.birthday.value,
            color: e.target.color.value,
            pic: e.target.pic.value,
            user_id: `${user_id}`
        }
        createAccount(data)
        setCreateProcess('success')
    }

    const createAccount = (data) =>{

        axios.patch(`${url}`,data )
        .then(response => {
            console.log(response);
            setWarning('')
        });

    }

    return (
        <div className="login">
            
            {createProcess === ""  && <div className="row">
                
                <span className="close" onClick={props.onClose}>&times;</span>
                <div className="container align-self-center text-center ">
                    
                    <h3 className="text-dark">Enter your Pet's details </h3><br/>
                    
                    <form onSubmit={getFormdata}>
                        <div className="row">
                            <div className="col">
                            <label className="form-label text-dark" >Pet Name</label>
                            <input name="petname" type="text" className="form-control  m-auto" />
                            </div>
                            <div className="col">
                            <label className="form-label text-dark">Species</label>
                            <select name="species" className="form-select" aria-label="Default select example">
                                <option value="cat">Cat</option>
                                <option value="dog">Dog</option>
                                <option value="other">other</option>
                            </select>
                            </div>
                        </div>
                        <div className=" row">
                            <div className="col">
                            <label className="form-label text-dark" >Breed</label>
                            <input name="breed" type="text" className="form-control  m-auto" />
                            </div>
                            <div className="col">
                            <label className="form-label text-dark">Gender</label>
                            <select name="sex" className="form-select" aria-label="Default select example">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            </div>
                        </div>
                        <div className=" row">
                            <div className="col">
                            <label className="form-label text-dark" >Birthplace</label>
                            <input name="birthplace" type="text" className="form-control  m-auto" />
                            </div>
                            <div className="col">
                            <label className="form-label text-dark">Birthday</label>
                            <input type="date" className="form-control m-auto" name="birthday"/>
                            </div>
                        </div>
                        <div className=" row">
                            <div className="col">
                            <label className="form-label text-dark" >Color/Markings</label>
                            <input name="color" type="text" className="form-control  m-auto" />
                            </div>
                            <div className="col">
                            <label className="form-label text-dark">Picture</label>
                            <input type="text" defaultValue={`https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Creative-Tail-Animal-dog.svg/1024px-Creative-Tail-Animal-dog.svg.png`} className="form-control m-auto" name="pic"/>
                            </div>
                        </div><br/>
                        <button type="submit" className="btn btn-outline-light signbtn p-3 " >
                        Submit Details
                        </button>

                    </form>
                    <p className="text-danger">{warning}</p>   
                </div>
            </div>}

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

export default Petcreateform