import axios from 'axios';
import './profile.css'
import cover from '../../image/coverdog.jpg'
import { useState, useEffect } from 'react';

const Schedules = (props) => {



    const displayData = () => {
        if (data.length > 0){
            return(
                data.map((row, index) => (
                <tr key={index}>
                    <td scope="col">{row.id}</td>
                    <td scope="col">{row.doctor}</td>
                    <td scope="col">{row.email}</td>
                    <td scope="col">{row.specialty}</td>
                    <td scope="col">{row.specialty}</td>
                    <td className='text-center'> <button className='btn btn-dark'> Make appointment</button></td>
                </tr>
            )))
        }
        }
    

    return (
        <div><div className='cover' style={{ backgroundImage: `url(${cover})` }}>
        <h3 className='text-white position-absolute m-4'>Schedules</h3> <br/>
        </div>

        <div className='container-fluid gx-0 p-5'>
            
            <table className="table table-striped table-hover">
                <thead className='table-warning'>
                    <tr>
                    <th scope="col">Session ID</th>
                    <th scope="col">Veterinarian</th>
                    <th scope="col">Specialty</th>
                    <th scope="col">Appointment Date</th>
                    <th scope="col">Available Time</th>
                    <th scope="col" className='text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {displayData()} */}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default Schedules;