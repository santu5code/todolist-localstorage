import React from 'react'
import Holi from '../../assests/holiday.jpg'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Holiday = () =>{
    return <>
        <Container className="m-3">
            <h2 className="option-header">Holiday</h2>
            <img className='img-fluid p-0 mb-1'src={Holi} alt="Holiday" />
            <div className="goto-button"><Link className='link' to='/holidaylist' ><h4 className=" text-center p-1">View Todo's</h4></Link></div>
        </Container>
</>;
};



export default Holiday;