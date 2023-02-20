
import './modal.css';
import { useForm } from "react-hook-form";
import MyCalendar from '../calendar/calendar';

const AppointmentForm = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it

    return (
    <div className="modal container-fluid" >
        <div id="myModal" className="modal container-fluid" >
            <div className="modal-content row">
            <div className="row mb-4 ">
                <div className="col">
                <span className="close" onClick={props.onClose}>&times;</span>
                <h3 className="text-start ">Make appointment</h3>
                </div>
            </div>
            <table class="table">
  <tbody>
    <tr>
      <th scope="row">Doctor's Name</th>
      <td>{'Data from mysql'}</td>
    </tr>
    <tr>
      <th scope="row">Doctor's Name</th>
      <td>{'Data from mysql'}</td>
    </tr>
    <tr>
      <th scope="row">Doctor's Name</th>
      <td>{'Data from mysql'}</td>
    </tr>
  </tbody>
</table>
<div className='container'>
    <div className='row'>
        <div className='col'><p>Select Date for appointment</p><MyCalendar /></div>
        <div className='col'>
            <p>Reason for Appointment</p>
            <form onSubmit={handleSubmit(onSubmit)}>
            <textarea className='form-control' rows="11" type="text" {...register("message")} /><br/>
            <button className='btn btn-dark' type="submit">Submit</button>
            </form>
        </div>

    </div>
    </div>
              
            </div>
        </div>
    </div>
    )
}




export default AppointmentForm;

