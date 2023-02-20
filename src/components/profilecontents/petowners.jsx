import cover from '../../image/coverdog.jpg'
import AppointmentForm from '../modal/appointmentform';
import './profile.css'
import { useState  } from 'react';
import axios from 'axios';


const Owners = (props) => {
    const [docStatus, setDocstatus] = useState('');
    let [showmodal, setShowmodal] = useState('none');
    const [rowselect, getRowselect] = useState([]);
    
    
    
    const deleteDoc = (e) => {
        e.preventDefault();
        document.getElementById(rowselect[0]).remove();
        console.log(rowselect[1])
        
        axios.delete(`http://localhost:4001/pucha/userx/${rowselect[1]}`)
        .then((response) => {
            setShowmodal('none')
            setDocstatus('Account Deleted');
        })
    }



    let count = 0;
    const displayData = () => {
    if (props.user.length > 0){
        return(
            props.user.map((row, index) => (
            <tr key={index} id={'row'+count}>
                <td scope="col">{row.id}</td>
                <td scope="col">{row.first_name} {row.last_name}</td>
                <td scope="col">{row.email}</td>
                <td scope="col"></td>
                <td className='text-center'><input id={'trow'+count++} onClick={prompAppear} type="button" className='btn btn-dark' value="Delete User" name={row.id} /></td>
            </tr>
        )))
    }
    }

    const prompAppear = (e) => {
        setShowmodal('block')
        let deleterow = e.target.id.slice(1,5)
        getRowselect([deleterow, e.target.name])
    }

return ( 
    <div><div className='cover' style={{ backgroundImage: `url(${cover})` }}>
    <h3 className='text-white position-absolute m-4'>Pet owners</h3> <br/>
    </div>

        <div className="modal" style={{display: showmodal}}>
        <div id="myModal" className="modal " >
            <div className="modal-content position-absolute top-50 start-50 translate-middle text-center">
                <h3>Are you sure?</h3><br/>
                Do you really want to delete? Process can't be undone! <br/><br/>
                <div className='d-flex justify-content-center'>
                <input className='btn btn-light btn-outline-dark w-50 m-1' type="button" value="NO" onClick={()=>setShowmodal('none')} />
                <input className='btn btn-dark w-50 m-1' type="submit" value="YES" onClick={deleteDoc} /></div>
            </div>
        </div>
    </div>
    <div className='container-fluid gx-0 p-5'>
        <h5>All users</h5>
        <table className="table table-striped table-hover">
            <thead className='table-warning'>
                <tr>
                <th scope="col">User ID</th>
                <th scope="col">Pet Owner</th>
                <th scope="col">Email</th>
                <th scope="col">Appointments</th>
                <th scope="col" className='text-center'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {displayData()}
            </tbody>
        </table>
    </div>
    </div>
    )
}

export default Owners;
