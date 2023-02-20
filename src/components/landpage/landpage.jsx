import React, { useState, useEffect } from 'react';
import bgimage from '../../image/bgimage.png'
import Consult from '../modal/consult'


const Landpg = () => {
    let [showmodal, setShowmodal] = useState(false);
   

    const modalShow = () => {
        // setShowmodal(true)
        window.location.href = '/login'
    }

    const modalClose = () => {
        setShowmodal(false)
    }

    const sampLe = () =>{
        alert("Under development");       
    }
    return (
        <div>
        <div >
            {showmodal && <Consult onClose={modalClose}/>}
        </div>
        
        <div id="home" className="bg-primary container-fluid" style={{ backgroundImage: `url(${bgimage})` }}>
            <div className="intro container">
                <div className="col-6">
                    <h1>Pet Health Appointment System</h1>
                    <p className="">Schedule appointment and consult online</p>
                    <button onClick={sampLe} className="btn btn-light btn-outline-dark">LEARN MORE</button>
                    <button onClick={modalShow} className="btn btn-dark ms-2 text-white"><strong>GET STARTED</strong></button>  
                </div>
            </div>
        </div>
    </div>
    )
}

export default Landpg;