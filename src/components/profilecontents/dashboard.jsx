import { Calendar } from 'react-calendar';
import { FaCalendarWeek, FaFacebookMessenger, FaMedkit, FaPaw } from 'react-icons/fa';
import cover from '../../image/coverdog.jpg'
import './profile.css'
import { useState } from 'react';
import Appointment from '../accountforms/appointment';

const DashboardUser = (props) => {
    let [render, reRender] = useState(true);
    let [createmodal, setCreatemodal] = useState('none');

    const modalShow = () => {
        setCreatemodal('block')
    }

    const modalClose = () => {
        console.log('working')
        setCreatemodal('none')
        
    }
    
    return (
        <div className='container-fluid gx-0' >
            <div className='cover' style={{ backgroundImage: `url(${cover})` }}>
                <h3 className='text-white position-absolute m-4'>Dashboard</h3> <br/>
            </div>
            
        <div className="row p-4" onMouseUp={()=>reRender(false)}>
            <div className='col-8'>
                <div className='d-flex justify-content-between'>
                <div className='mycard d-flex justify-content-start  p-4 shadow' >
                    <div className='col-7'>
                    <h2>{props.cardcontent[0]}</h2>
                    <p>{props.card[0]}</p>
                    </div>
                    <div className='col-5 text-center'>
                    <FaPaw className='mt-3 cardicon'/>
                    </div>
                </div>
                <div className='mycard d-flex justify-content-start  bg-white p-4 shadow'>
                    <div className='col-7'>
                    <h2>{props.cardcontent[1]}</h2>
                    <p>{props.card[1]}</p>
                    </div>
                    <div className='col-5 text-center'>
                    <FaCalendarWeek className='mt-3 cardicon'/>
                    </div>
                </div>
                <div className='mycard d-flex justify-content-start  bg-white p-4 shadow'>
                    <div className='col-7'>
                    <h2>{props.cardcontent[2]}</h2>
                    <p>{props.card[2]}</p>
                    </div>
                    <div className='col-5 text-center'>
                    <FaMedkit className='mt-3  cardicon'/>
                    </div>
                </div>
                <div className='mycard d-flex justify-content-start  bg-white p-4 shadow'>
                    <div className='col-7'>
                    <h2>{props.cardcontent[3]}</h2>
                    <p>{props.card[3]}</p>
                    </div>
                    <div className='col-5 text-center'>
                    <FaFacebookMessenger className='mt-3 cardicon'/>
                    </div>
                </div>
                </div>
                <div className='shadow p-4' style={{height: '500px'}}>
                    <h4>Notifications</h4>
                    <table className="table table-striped table-hover">

                    <tbody>
                        {/* {displayData()} */}
                    </tbody>
                    </table>
                </div>
            </div>
            <div className='col-4'>
                
                <div className=' d-flex align-items-center flex-column' style={{height: '300px'}}>
                <Calendar/> <br/>
                <button className='btn w-50 btn-dark' onClick={modalShow}>REQUEST APPOINTMENT</button>
                </div> 
            </div>
                <div className="modal" style={{display: createmodal}}>
        <div id="myModal" className="modal " >
            <div className="modal-content position-absolute top-50 start-50 translate-middle">
               <Appointment doc={props.doc} onClose={modalClose}  />
            </div>
        </div>
    </div>  
    </div>
    </div>
    )
}

export default DashboardUser;