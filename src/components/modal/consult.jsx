import { useEffect, useState } from 'react';
import './modal.css';

const Consult = (props) => {

    return (
      <div className="modal container-fluid" >
    <div id="myModal" className="modal container-fluid" >

    <div className="modal-content row">
    <div className="row mb-4 ">
        <div className="col">

        <span className="close" onClick={props.onClose}>&times;</span>
        <p className="fw-bold">DIAGNOSIS AND PRESCRIPTION</p>
        <h3 className="text-start ">Ask a Veterinary Now</h3>
        </div>
    </div>
    <div className="row">
    
    <div className="col-6 m-6">
    
    <form>
        <div className="form-group">
        <label htmlFor="putName">Your Pet</label>
        <div className="row">
            <div className="col">
            <input type="email" className="form-control" id="putName" aria-describedby="emailHelp" placeholder="Name" />
            </div>
            <div className="col">
            <input type="email" className="form-control" id="putName" aria-describedby="emailHelp" placeholder="Species (eg. Cat, Dog, etc)" />
            </div>
        </div>
        
        </div><br />

        <div className="form-group">
        <label htmlFor="businessName">Owner's Name</label>
        <input type="email" className="form-control" id="businessName" aria-describedby="emailHelp" placeholder="" />
        </div><br />

        <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="businessName" aria-describedby="emailHelp" placeholder="Enter email" />
        
        </div><br />

        <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="number" className="form-control" id="phone" aria-describedby="numberHelp" placeholder="Enter your number" />
        </div><br />

        <div className="form-group">
        <label htmlFor="req">Describe your Concern</label>
        <textarea type="text" cols="30" rows="5" className="form-control" id="request" aria-describedby="textHelp" placeholder="Your Message here" />
        </div><br />
        
    </form>
    </div>
    <div className="col-6 ps-5">
    <form>
        <div className="form-group">
        <label htmlFor="putName">Choose Your Veterinary</label>
        <div className="row">
            <div className="col">
            <select className="form-select" aria-label="Default select example">
            <option defaultValue>Open this menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
            </div>
        
        </div>
        
        </div><br />

        {/* <div className="form-group">
        <label htmlFor="businessName">Choose a Date</label>
        <input className="dropdown-item input-group" type="date" id="date" />
        </div><br />

        <div className="form-group">
        <label htmlFor="exampleInputEmail1">Time</label><br/>
        <input type="time" className="dropdown-item input-group" />
        
        </div><br /> */}


        <div className="form-group">
        <label htmlFor="phone">Upload a Picture (Optional)</label><br/>
        <div className="input-group">
        
        <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />

        </div>
        </div><br />
        
        <div className="d-grid gap-2">
        <button id="submit" type="submit" className="btn btn-lg btn-dark w-5" >Submit</button>
        </div>
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    )
}




export default Consult;
