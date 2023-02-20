import cover from '../../image/coverdog.jpg'
import AppointmentForm from '../modal/appointmentform';
import './profile.css'
import { useState  } from 'react';
import axios from 'axios';
import Doctorform from '../accountforms/doctorcreate';


const Veterinary = ({data}) => {
    let [showmodal, setShowmodal] = useState('none');
    let [createmodal, setCreatemodal] = useState('none');
    const [docStatus, setDocstatus] = useState('');
    const [rowselect, getRowselect] = useState([]);

    
    const deleteDoc = (e) => {
        e.preventDefault();
        document.getElementById(rowselect[0]).remove();
        axios.delete(`http://localhost:4001/users/doctor/${rowselect[1]}`)
        .then((response) => {
            setShowmodal('none')
            setDocstatus('Account Deleted');
        })
    }

    const prompAppear = (e) => {
        setShowmodal('block')
        let deleterow = e.target.id.slice(1,5)
        getRowselect([deleterow, e.target.name])
    }

    let count = 0;
    const displayData = () => {
    if (data.length > 0){
        return(
            data.map((row, index) => (
            <tr key={index}  id={'row'+count}>
                <td scope="col">{row.id}</td>
                <td scope="col">{row.doctor}</td>
                <td scope="col">{row.email}</td>
                <td scope="col">{row.specialty}</td>
                <td className='text-center'><button className='btn btn-dark me-2' > View Schedules</button><input id={'trow'+count++} onClick={prompAppear} type="button" className='btn btn-dark' value="Delete User" name={row.id} /></td>
            </tr>
        )))
    }
    }
   
    const modalShow = () => {
        setCreatemodal('block')
        // window.location.href = '/login'
    }

    const modalClose = () => {
        setCreatemodal('none')
    }
    

return ( 
    <div><div className='cover' style={{ backgroundImage: `url(${cover})` }}>
        
    <h3 className='text-white position-absolute m-4'>Veterinaries</h3> <br/>
    </div>

    <div className="modal" style={{display: createmodal}}>
        <div id="myModal" className="modal " >
            <div className="modal-content position-absolute top-50 start-50 translate-middle">
               <Doctorform onClose={modalClose}/>
            </div>
        </div>
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
        <input className='btn btn-primary mb-3' style={{float: 'right'}} type="submit" value="Add New Doctor" onClick={modalShow} />
        <h5>All doctors</h5>
        <table id="myTable" className="table table-striped table-hover">
            <thead className='table-warning'>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Vet's Name</th>
                <th scope="col">Email</th>
                <th scope="col">Specialties</th>
                <th scope="col" className='text-center'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {displayData()}
            </tbody>
        </table>
        {docStatus}

    </div>
    
    </div>
    )
}

export default Veterinary;
