import cover from '../../image/coverdog.jpg'
import './profile.css'
import { useState  } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import Petcreateform from '../accountforms/createpet';


const Pets = (props) => {

    let [createmodal, setCreatemodal] = useState('none');
    


    const displayData = () => {
        if (props.pet.length > 0){
            return(
                props.pet.map((row, index) => (
                <div className='petcard shadow ' key={index}>
                    <div className='petpic' style={{backgroundImage: `url(${row.pic})`}}></div>
                    <h4>{row.petname}</h4>
                    <p>{row.breed}</p>
                </div>
            )))
        }
        }
    const modalShow = () => {
        setCreatemodal('block')
        // window.location.href = '/login'
    }

    const modalClose = (er) => {
        setCreatemodal('none')
        console.log(er)
    }


return ( 
    <div>
    
    <div className='cover' style={{ backgroundImage: `url(${cover})` }}>
    <h3 className='text-white position-absolute m-4'>My Pets</h3> <br/>
    </div>
    <div className='container-fluid p-3'>
        <div className="modal" style={{display: createmodal}}>
            <div id="myModal" className="modal " >
                <div className="modal-content position-absolute top-50 start-50 translate-middle">
                <Petcreateform onClose={modalClose(er)}/>
                </div>
            </div>
        </div>  
        <div className='d-flex align-items-start text-center'>
        {displayData()}
            <FaPlusCircle onClick={modalShow} className='align-self-center text-primary' style={{fontSize: '80px'}} /> <br/>
            <h5 className='align-self-center ms-3'>Add pet</h5>
        </div>
    </div>
    </div>
    )
}

export default Pets;
