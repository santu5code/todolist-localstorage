import React, { useEffect, useState } from 'react';
import PersonalHeader from '../PersonalHeader';
import { Container,Row,Col } from 'react-bootstrap';
import {IoAddCircleOutline} from 'react-icons/io5'
import TodoList from '../TodoList'


const getLocalItems =()=>{
    let plist = localStorage.getItem('personallist');
    if(plist){
        return JSON.parse(plist);
    }
    else{
        return ([]);
    }
}

const PersonalList = () =>{
    const [inputList, setinputList] = useState("");
    const [personalitems, setitems] = useState(getLocalItems());
    
    const listofItems = () =>{
        if(inputList !== ''){
        setitems((personalitems)=>{
            return [...personalitems, inputList];
        });
        setinputList("");
    };}


    const itemEvent = (event) => {
        setinputList(event.target.value);
    }


    const deleteItem = (id) =>{
        setitems((personalitems)=>{
            return personalitems.filter((arrEle, index)=>{
                return index !== id;
            });
        });
    }

    useEffect(()=>{
        localStorage.setItem('personallist', JSON.stringify(personalitems))
    },[personalitems])
    return<>
        <PersonalHeader />
        <Container >
            <Row>
                <Col></Col>
                <Col>
                    <div className="list-wrapper mt-5  d-flex ">
                    <input type="text" placeholder="add work" value={inputList} onChange={itemEvent}/>
                    <IoAddCircleOutline className="add-button ml-1" onClick={listofItems}  />
                    </div>
                    
                        <ol className="ol-list mt-5">
                            {personalitems.map((itemVal, index)=>{
                            return <TodoList key={index} id={index} text={itemVal} onSelect={deleteItem} />

                            })}
                        </ol>
               
            </Col>
                <Col></Col>
            </Row>
            
        </Container>
        </>

}

export default PersonalList;