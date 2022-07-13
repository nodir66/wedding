import React from 'react';
import { Header } from './components/header';
import { OurClients } from './components/our_clients';
import { Footer } from './components/footer/index.jsx'
import { Events } from './components/events';
import { ImportantDetails } from './components/important_details/index.jsx';
import { Place } from './components/place';
import { Table } from './components/table';
import { MenuFood } from './components/menu_food';
import { Scenery } from './components/scenery';
import { Collapse } from '@mui/material';
import { useState } from 'react';


export const Pages = () => {
  const [open, setOpen] = useState(false);

    return (
        <div className="App">
            <Header/>
            <OurClients/>
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

