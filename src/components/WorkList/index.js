import React, { useEffect, useState } from 'react';
import WorkHeader from '../WorkHeader';
import { Container,Row,Col } from 'react-bootstrap';
import {IoAddCircleOutline} from 'react-icons/io5'
import TodoList from '../TodoList'


const getLocalItems =()=>{
    let wlist = localStorage.getItem('worklist');
    if(wlist){
        return JSON.parse(wlist);
    }
    else{
        return ([]);
    }
}

const WorkList = () =>{
    const [inputWorkList, setinputWorkList] = useState("");
    const [workitems, setworkitems] = useState(getLocalItems());
    
    const listofItems = () =>{
        if(inputWorkList !== ''){
        setworkitems((workitems)=>{
            return [...workitems, inputWorkList];
        });
        setinputWorkList("");
    };}


    const itemEvent = (event) => {
        setinputWorkList(event.target.value);
    }


    const deleteItem = (id) =>{
        setworkitems((workitems)=>{
            return workitems.filter((arrEle, index)=>{
                return index !== id;
            });
        });
    }

    useEffect(()=>{
        localStorage.setItem('worklist', JSON.stringify(workitems))
    },[workitems])
    return<>
        <WorkHeader />
        <Container >
            <Row>
                <Col></Col>
                <Col>
                    <div className="list-wrapper mt-5  d-flex ">
                    <input type="text" placeholder="add work" value={inputWorkList} onChange={itemEvent}/>
                    <IoAddCircleOutline className="add-button ml-1" onClick={listofItems}  />
                    </div>
                    
                        <ol className="ol-list mt-5">
                            {workitems.map((itemVal, index)=>{
                            return <TodoList key={index} id={index} text={itemVal} onSelect={deleteItem} />

                            })}
                        </ol>
               
            </Col>
                <Col></Col>
            </Row>
            
        </Container>
        </>

}

export default WorkList;