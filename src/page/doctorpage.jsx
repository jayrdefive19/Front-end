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
import Owners from '../components/profilecontents/petowners';
import Vetform from '../components/accountforms/vetlogin';
import Schedules from '../components/profilecontents/schedule';

const Vetpage = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [cookey, setCookey] = useState(document.cookie.split(';')[0].split('=')[1])
    const [user, getUser] = useState('');
    const [doctor, getDoctor] = useState('');
    const [pet, getPet] = useState('');
    const [currentuser, getCurrentUser] = useState('');
    const [appoint, getAppoint] = useState('');

    
    const doctors = "http://localhost:4001/users/doctor";
    const url = "http://localhost:4001/user";
    const currentvet = "http://localhost:4001/vetuser";
    const pets = "http://localhost:4001/pets/allpets";
    const app = "http://localhost:4001/users/getapp";

    
    const cardsdata = ['Patients', 'Schedule', 'Appointments', 'Messages']
    const cardcontent =[user.length, '0', appoint.length, '0']
    console.log(document.cookie)

    const getDoctorData = () => {
        axios.get(`${doctors}`)
        .then((response) => {
            let results = response.data.results;
            getDoctor([...results]);
            console.log(results)
        })
        .catch(error => console.log(`Error: ${error}`));
    }

    const getUserdata = () => {
        axios.get(`${url}` )
        .then(response => {
            let results = response.data.results;
            getUser([...results]);
    });
    }

    const getVetUser = () => {
        axios.patch(`${currentvet}`,{id: `${cookey}`} )
        .then(response => {
            getCurrentUser([...response.data]);
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
        axios.get(`${pets}`)
        .then(response => {
            let results = response.data.results;
            getPet([...results]);
    });

    }
    useEffect(() => {
        getDoctorData();
        getUserdata();
        getPetdata();
        getVetUser();
        getAppdata();
    },[])

    const logOut = () => {
        document.cookie = "user= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        document.cookie = "admin= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        document.cookie = "vet= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        
            window.location.href = '/';
 

    }

    if (document.cookie == 'user=' || cookey == undefined){
        return(<Vetform/>)
    }




    const handleTabChange = (tab) => {
        setActiveTab(tab);
      };
    

    return (
        <div className="container-fluid gx-0" style={{ overflowX: "hidden" }}>
            <div  className="sidebar p-3 text-center">
            <Link to='/' style={{textDecoration:'none' }} className="text-warning">
            <img className='sblogo' src={Logo} alt="logo" />
            </Link>
            <div >
                <div className="profilepic text-start" style={{ backgroundImage: `url(${Profpic})` }}>
                </div>
                
                <span className='name text-warning'>ADMIN</span>
                
                <div className="text-start" style={{margin: "auto"}}>
                <div className='proflink mt-3' onClick={() => handleTabChange('tab1')}><FaUser className="me-2"/>  DASHBOARD</div> 
                <div className='proflink' onClick={() => handleTabChange('tab2')}><FaPaw className="me-2"/> PATIENTS</div>
                <div className='proflink' onClick={() => handleTabChange('tab3')}><FaCalendar className="me-2"/> APPOINTMENTS</div>
                <div className='proflink' onClick={() => handleTabChange('tab5')}><FaHourglass className="me-2"/> SCHEDULES</div>
                <div className='proflink' onClick={() => handleTabChange('tab6')}><FaUser className="me-2"/>  PROFILE</div> 
                </div>
            </div>
            
            <div style={{bottom:'0px', position: "fixed", cursor: 'pointer'}} className="align-middle p-3" onClick={logOut}> Logout <FaDoorOpen  /></div>
            </div>

            <div className="main" style={{overflowX: 'hidden'}}>
                <div>
                {activeTab === 'tab1' && <DashboardUser cardcontent={cardcontent} card={cardsdata} pet={pet} doc={doctor} user={currentuser} />}
                {activeTab === 'tab2' && <Owners user={user}/>}
                {activeTab === 'tab3' && <Appointments appo={appoint}/>}
                {activeTab === 'tab4' && <Owners user={user}/>}
                {activeTab === 'tab5' && <Schedules/>}
                {activeTab === 'tab6' && <Petprofile/>}
                </div>
            </div>
            
        </div>        
    )
}

export default Vetpage;