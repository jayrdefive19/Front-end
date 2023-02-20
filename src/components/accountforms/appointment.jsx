
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaCheck } from 'react-icons/fa';
import '../modal/modal.css'

const Appointment = (props) => {
    const [createProcess, setCreateProcess] = useState('');
    const [warning, setWarning] = useState('');
    const url = "http://localhost:4001/sched/appoint";
    const cookey = document.cookie.split(';')[0].split('=')[1];
    console.log(props.doc)

    const getFormdata = (e) => {

        setCreateProcess('');
        e.preventDefault();
            
        if (e.target.doctor.value === '' || e.target.date.value === '' || e.target.time.value === '' ){
            setWarning('Please fill up the form!')
        }
        else{
          let data = {
            doctor: e.target.doctor.value,
            date: e.target.date.value,
            time: e.target.time.value,
            reason: e.target.reason.value,
            user_id: cookey
        }
        console.log(data)
        setCreateProcess('success')
        createSched(data)
        }
    }

    const createSched = (data) =>{
        console.log(data)
        axios.patch(`${url}`,data)
        .then(response => {
            console.log(response);
        });
        setWarning('')
    }

    const displayData = () => {
        if (props.doc.length > 0){
            return(
                props.doc.map((row, index) => (
                <select key={index} name="doctor" className="form-select m-auto" style={{width: '400px'}} aria-label="Default select example">
                    <option value={row.doctor} >{row.doctor}</option>
                </select>
            )))
        }
    }


    return (
        <div className="login">
            
            {createProcess === ""  && <div className="row">
                
                <span className="close" onClick={props.onClose}>&times;</span>
                <div className="col align-self-center text-center ">
                    
                    <h3 className="text-dark">Schedule Appointment </h3><br/>
                    
                    <form onSubmit={getFormdata}>
                        <div className="mb-3 row">
                            <label htmlFor="InputUser" className="form-label text-dark" >Select Doctor</label>
                            {displayData()}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="InputEmail1" className="form-label text-dark">Select a Date</label>
                            <input type="date" className="form-control m-auto" style={{width: '400px'}} id="InputEmail1" aria-describedby="emailHelp" name="date"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label text-dark">Choose Time</label>
                            <input type="time" className="form-control  m-auto" style={{width: '400px'}} id="exampleInputPassword1" name="time"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label text-dark">Please state your request</label>
                            <textarea type="text" col="5" className="form-control  m-auto" style={{width: '400px'}} id="exampleInputPassword1" name="reason"/>
                        </div>
                        <button type="submit" className="btn btn-outline-light signbtn p-3 " >
                        Submit Request
                        </button>
                        
                    </form>
                    <p className="text-danger">{warning}</p>   
                </div>
            </div>}

        
                {createProcess === 'success' && <div className="text-center ">
                <h3>Appointment has been made</h3>
                    <FaCheck style={{fontSize:'120px'}}/> <br/><br/>
                    <button onClick={props.onClose} type="submit" className="btn btn-outline-light signbtn p-3" >
                            Return to Dashboard
                    </button>
                </div>
            }
        </div>
    )
}

export default Appointment