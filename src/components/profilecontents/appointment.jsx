import axios from 'axios';
import './profile.css'
import cover from '../../image/coverdog.jpg'
import { useState } from 'react';

const Appointments = (props) => {
    let [showmodal, setShowmodal] = useState('none');
    const [rowselect, getRowselect] = useState([]);

    const deleteDoc = (e) => {
        e.preventDefault();
        document.getElementById(rowselect[0]).remove();
        console.log(rowselect)
        axios.delete(`http://localhost:4001/sched/delete/${rowselect[1]}`)
        .then((response) => {
            setShowmodal('none')
        })
    }
    const prompAppear = (e) => {
        setShowmodal('block')
        let deleterow = e.target.id.slice(1,5)
        getRowselect([deleterow, e.target.name])
    }
    let count = 0;
    const displayData = () => {
        if (props.appo.length > 0){
            return(
                props.appo.map((row, index) => (
                <tr key={index} id={'row'+count}>
                    <td scope="col">{row.id}</td>
                    <td scope="col">{row.doctor}</td>
                    <td scope="col">{row.date.slice(0,9)}</td>
                    <td scope="col">{row.reason}</td>
                    <td scope="col">{row.status}</td>
                    <td className='text-center'><button className='btn btn-dark '> Edit</button> <input id={'trow'+count++} onClick={prompAppear} type="button" className='btn btn-dark' value="Cancel" name={row.id} /></td>
                </tr>
            )))
        }
    }
    
    return (
        <div><div className='cover' style={{ backgroundImage: `url(${cover})` }}>
        <h3 className='text-white position-absolute m-4'>Appointments</h3> <br/>
        </div>

        <div className='container-fluid gx-0 p-5'>
            
            <table className="table table-striped table-hover">
                <thead className='table-warning'>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Veterinary</th>
                    <th scope="col">Date Requested</th>
                    <th scope="col">Reason</th>
                    <th scope="col">Status</th>
                    <th scope="col" className='text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {displayData()}
                </tbody>
            </table>

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
        </div>
        </div>
    )
}

export default Appointments;