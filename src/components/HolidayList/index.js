import React, { useEffect, useState } from 'react';
import HolidayHeader from '../HolidayHeader';
import { Container,Row,Col } from 'react-bootstrap';
import {IoAddCircleOutline} from 'react-icons/io5'
import TodoList from '../TodoList'


const getLocalItems =()=>{
    let hlist = localStorage.getItem('holidaylist');
    if(hlist){
        return JSON.parse(hlist);
    }
    else{
        return ([]);
    }
}

const HolidayList = () =>{
    const [inputList, setinputList] = useState("");
    const [holidayitems, setitems] = useState(getLocalItems());
    
    const listofItems = () =>{
        if(inputList !== ''){
        setitems((holidayitems)=>{
            return [...holidayitems, inputList];
        });
        setinputList("");
    };}


    const itemEvent = (event) => {
        setinputList(event.target.value);
    }


    const deleteItem = (id) =>{
        setitems((holidayitems)=>{
            return holidayitems.filter((arrEle, index)=>{
                return index !== id;
            });
        });
    }

    useEffect(()=>{
        localStorage.setItem('holidaylist', JSON.stringify(holidayitems))
    },[holidayitems])
    return<>
        <HolidayHeader />
        <Container >
            <Row>
                <Col></Col>
                <Col>
                    <div className="list-wrapper mt-5  d-flex ">
                    <input type="text" placeholder="add work" value={inputList} onChange={itemEvent}/>
                    <IoAddCircleOutline className="add-button ml-1" onClick={listofItems}  />
                    </div>
                    
                        <ol className="ol-list mt-5">
                            {holidayitems.map((itemVal, index)=>{
                            return <TodoList key={index} id={index} text={itemVal} onSelect={deleteItem} />

                            })}
                        </ol>
               
            </Col>
                <Col></Col>
            </Row>
            
        </Container>
        </>

}

export default HolidayList;