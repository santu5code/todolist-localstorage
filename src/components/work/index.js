import React from 'react'
import Workpic from '../../assests/work.jpg'
import { Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Work = () =>{

return <>
        <Container className="m-3">
            <h2 className="option-header">Work</h2>
            <img className='img-fluid p-0 mb-1'src={Workpic} alt="work" />
            <div className="goto-button "><Link className='link' to='/worklist' ><h4 className=" text-center p-1">View Todo's</h4></Link></div>
        </Container>
</>;
};


export default Work;
