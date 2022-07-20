import React, {useState} from 'react';
import {useEffect} from 'react'
import axios from 'axios'
import { Header } from './components/header';
import { OurClients } from './components/our_clients';
import { Footer } from './components/footer/index.jsx'
import { Events } from './components/events';
import { ImportantDetails } from './components/important_details/index.jsx';
import { Place } from './components/place';
import { Table } from './components/table';
import { MenuFood } from './components/menu_food';
import { Scenery } from './components/scenery';
import { Collapse, ListItemText } from '@mui/material';


export const Pages = () => {
  const [open, setOpen] = useState(false);

  const [data, setData] = useState([]);
  const [img, setImg] = useState([]);




  useEffect(() => {
    axios
      .get('http://172.104.143.233:8000/services/info/')
      .then(function(response) {
          console.log(response)
        setData(response.data)
      })
      .catch(error => console.log(error));
    
  }, []);

  useEffect(() => {
    axios
      .get('http://172.104.143.233:8000/services/services/')
      .then(function(response) {
          console.log(response)
        setImg(response.data)
      })
      .catch(error => console.log(error));
    
    }, []);


    const [event, setEvent]= useState([]);

    useEffect(() => {
        axios
          .get('http://172.104.143.233:8000/services/events/')
          .then(function(response) {
              console.log(response)
            setEvent(response.data)
          })
          .catch(error => console.log(error));
        
        }, []);


  


  

    return (
        <div className="App">
            {data.map((item) =>{
                return(
                    <Header 
                        title={item.title}
                        description={item.description}
                        image={item.image}
                    />

                )
            })}


            {/* {img.map((item, index) =>{
                return(
                    <OurClients
                        img={item.file}
                        index={index}
                    />
                )
            })} */}
            <OurClients/>
            {event.map((item)=>{
                <Events
                    image={item.image}
                    name={item.name}
                    definition={item.definition}
                    active={item.active}
                />

            })}
            <Events/>
            <ImportantDetails setOpen ={setOpen}/>

            <Collapse 
                in={open}
                sx={{ transition: '10s' }}
            
            >
                <Place/>
                <Table/>
                <MenuFood/>
                <Scenery/>
            </Collapse>
            
            <Footer/>
            
    </div>
    );
};

