import axios from 'axios';
import { Link } from 'react-router-dom';
import Profpic from '../image/dog.webp'
import Logo from '../logo.png';
import React, { useState, useEffect } from 'react';
import Messages from "../components/profilecontents/messages";
import Veterinary from "../components/profilecontents/veterinary";
import { FaUser,FaBookMedical,FaCalendar, FaDoorOpen, FaHourglass, FaPaw } from 'react-icons/fa'
import DashboardUser from "../components/profilecontents/dashboard";
import Petprofile from "../components/profilecontents/petprofile";
import Appointments from '../components/profilecontents/appointment';
import Schedules from '../components/profilecontents/schedule';
import Pets from '../components/profilecontents/pets';

const Profilepg = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [cookey, setCookey] = useState(document.cookie.split(';')[0].split('=')[1])
    const [user, getUser] = useState('');
    const [doctor, getDoctor] = useState('');
    const [pet, getPet] = useState('');
    const [appoint, getAppoint] = useState('');
    const cardsdata = ['Pets owned', 'Schedules', 'Veterinary', 'Appointments']
    const cardcontent =[pet.length, '0', doctor.length, appoint.length]


    const doctors = "http://localhost:4001/users/doctor";
    const url = "http://localhost:4001/usera";
    const pets = "http://localhost:4001/pets/mypet";
    const app = "http://localhost:4001/users/getapp";


    const getDoctorData = () => {
        axios.get(`${doctors}`)
        .then((response) => {
            const results = response.data.results;
            getDoctor([...results]);
        })
        .catch(error => console.log(`Error: ${error}`));
    }

    const getUserdata = () => {
        axios.patch(`${url}`,{id: `${cookey}`} )
        .then(response => {
            getUser([...response.data]);
    });
    }
    
    const getAppdata = () => {
        axios.patch(`${app}`,{user_id:`${parseInt(cookey)}`} )
        .then(response => {
            console.log(response)
            getAppoint([...response.data]);
            console.log(cookey)
    });
    }


    const getPetdata = () => {
        axios.patch(`${pets}`,{user_id:`${cookey}`} )
        .then(response => {
            getPet([...response.data]);
    
    });
}

    useEffect(() => {
        getDoctorData();
        getUserdata();
        getPetdata();
        getAppdata();
    },[])

    const logOut = () => {
        document.cookie = "user= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        document.cookie = "admin= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        document.cookie = "vet= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        setCookey(undefined)
    }
    
    if (cookey <= 0 || cookey === undefined){
        window.location.href = '/';
    }

    const handleTabChange = (tab) => {
        setActiveTab(tab);
      };
    
    const showName = () => {
        if (user.length > 0){
            return(user[0].first_name );}
        else {return('');}}

    

    return (
        <div className="container-fluid gx-0" style={{ overflowX: "hidden" }}>
            <div  className="sidebar p-3 text-center">
            <Link to='/' style={{textDecoration:'none' }} className="text-warning">
            <img className='sblogo' src={Logo} alt="logo" />
            </Link>
            <div >
                <div className="profilepic text-start" style={{ backgroundImage: `url(${Profpic})` }}>
                </div>
                <p style={{marginBottom: '-2px'}}>Welcome</p>
                <span className='name text-warning'>{showName()}</span>
                
                <div className="text-start" style={{margin: "auto"}}>
                <div className='proflink mt-3' onClick={() => handleTabChange('tab1')}><FaUser className="me-2"/>  DASHBOARD</div> 
                <div className='proflink' onClick={() => handleTabChange('tab2')}><FaPaw className="me-2"/> MY PETS</div>
                <div className='proflink' onClick={() => handleTabChange('tab4')}><FaCalendar className="me-2"/> APPOINTMENTS</div>
                <div className='proflink' onClick={() => handleTabChange('tab5')}><FaHourglass className="me-2"/> SCHEDULES</div>
                <div className='proflink' onClick={() => handleTabChange('tab6')}><FaUser className="me-2"/>  PROFILE</div> 
                </div>
            </div>

            <div style={{bottom:'0px', position: "fixed", cursor: 'pointer'}} className="align-middle p-3" onClick={logOut}> Logout <FaDoorOpen  /></div>
            </div>

            <div className="main" style={{overflowX: 'hidden'}}>
                <div>
                {activeTab === 'tab1' && <DashboardUser cardcontent={cardcontent} card={cardsdata} doc={doctor} pet={pet}/>}
                {activeTab === 'tab2' && <Pets pet={pet}/>}
                {activeTab === 'tab4' && <Appointments appo={appoint}/>}
                {activeTab === 'tab5' && <Schedules/>}
                {activeTab === 'tab6' && <Petprofile pet={pet}/>}
                </div>
            </div>
            
        </div>        
    )
}

export default Profilepg;