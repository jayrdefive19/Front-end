import cover from '../../image/coverdog.jpg'

import './profile.css'

const Petprofile = (props) => {
    return (
        <div className="container-fluid gx-0">
            <div className='cover' style={{ backgroundImage: `url(${cover})` }}>
            <h3 className='text-white position-absolute m-4'>Profile</h3> <br/>
            </div>
            
            <div>
                <div className='row p-3'>
                    <div className='col p-3'>
                    
                    <table className='table table-striped table-hover'>
                   
                    <thead colspan="2">
                        <th >PET'S INFORMATION</th>
                    </thead>
                    <tbody>
                        <tr><td >Breed</td><td>Askal</td></tr>
                        <tr><td >Sex</td><td>Male</td></tr>
                        <tr><td >Age</td><td>3 years</td></tr>
                        <tr><td >Birthplace</td><td>Naga City</td></tr>
                        <tr><td >Color / Markings</td><td>Shiny Black</td></tr>        
                    </tbody>
                    </table>

        
                    </div>
                    <div className='col p-3'>
                        
                    <table className='table table-striped table-hover'>
                    <thead>
                        <th colspan="3">OWNER'S INFO</th>
                    </thead>
                    <tbody>
                        <tr><td >Name</td><td>Sandy Delima</td></tr>
                        <tr><td >Email Address</td><td>jayrdelima139@gmail.com</td></tr>
                        <tr><td >Contact no.</td><td>09123456789</td></tr>
                        <tr><td >Occupation</td><td>Graphic Artist</td></tr>
                        <tr><td >Address</td><td>Magarao, Cam. Sur</td></tr>
                        <tr><td >Age</td><td>2* years old</td></tr>
                        
        
                    </tbody>
                    </table>
                    {props.sample}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Petprofile;