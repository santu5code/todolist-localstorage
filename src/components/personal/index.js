import React from 'react'
import { Container } from 'react-bootstrap'
import Family from '../../assests/family.jpg'
import {Link} from 'react-router-dom'


const Personal = () =>{
    return <>
    <Container className="m-3">
    <h2 className="option-header">Personal</h2>
    <img className='img-fluid p-0 mb-1'src={Family} alt="family" />
    <div className="goto-button "><Link className='link' to='/personallist' ><h4 className=" text-center p-1">View Todo's</h4></Link></div>
    </Container>

</>
};



export default Personal;