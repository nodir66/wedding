import React, {useState} from 'react';
import './pages.sass'
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
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import order from './assets/img/order.png'


export const Pages = () => {
  const [open, setOpen] = useState(false);

  const [dataa, setDataa] = useState([]);
  const [img, setImg] = useState([]);



  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 400,
    bgcolor: '#15db93',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
    padding: '150px 50px',
    border: 'none',
    transition: '2s'

  };

  const style_modal = {
    display: 'flex',
    // background: 'white'
  }




  useEffect(() => {
    axios
      .get('http://172.104.143.233:8000/services/info/')
      .then(function(response) {
          console.log(response)
        setDataa(response.data)
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


  

        const [eventId, setEventId]= useState(1)


        const [placevalue, setPlacevalue]=useState("no_order")
        const [tablevalue, setTablevalue]=useState("no_order")
        const [menuvalue, setMenuvalue]=useState("no_order")
        const [decorvalue, setDecorvalue]=useState("no_order")


        const [placeid, setPlaceid]=useState()
        const [tableid, setTableid]=useState()
        const [menuid, setMenuid]=useState()
        const [decorid, setDecorid]=useState()

        const Orderpost = () =>{
            
            handleOpenn()
            const token = JSON.parse(localStorage.getItem('token'))
            const [ord, setOrd] = useState()
            useEffect(() => {
                axios.post('http://172.104.143.233:8000/services/order/', {
                    method: 'POST',

                    headers: {
                        "Authorization": `Bearer ${token.access}`
                    },

                    data:{
                        "restoran_id": setPlaceid,
                        "table_id": setTableid,
                        "menu_id": setMenuid,
                        "service_id": 1
                        
                    }
                  })
                  .then(function(response) {
                    console.log(response)
                    setOrd(response.data)

                  })
                  .catch(error => console.log(error));
                
              }, [setPlaceid, setTableid, setMenuid]);
        }

        //modal
        const [openn, setOpenn] = React.useState(false);
        const handleOpenn = () => setOpenn(true);
        const handleClose = () => setOpenn(false);

    return (
        <div className="App">
            {dataa.map((item) =>{
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

            

            {/* <div className='event_container'>
                {event.map((item)=>{
                    return(
                        <Events
                        image={item.image}
                        name={item.name}
                        definition={item.definition}
                        active={item.active}
                    />
                    )

                })}
            </div> */}
            {/* <Events
                setResid={setResid}
            /> */}
            <ImportantDetails 
                setOpen ={setOpen}
            />
            


            <Collapse 
                in={open}
                sx={{ transition: '10s' }}
            
            >
                <div className="titlee">
                    <h1>Мероприятия</h1>
                </div>
                <Events
                    setResid={setEventId}
                />
                <Place
                    resid={eventId}
                    setPlacevalue={setPlacevalue}
                    placeid={placeid}
                />

                <Table
                    setTablevalue={setTablevalue}
                    tableid={tableid}
                />
                <MenuFood 
                    setMenuvalue={setMenuvalue}
                    menuid={menuid}
                    tableid={tableid}
                />
                <Scenery
                    setDecorvalue={setDecorvalue}
                    decorid={decorid}
                />

                <div className="order_container">
                    <div className="order_item">
                        <div className='title'>Место мероприятия:</div>
                        <div>{placevalue}</div>
                    </div>

                    <div className="order_item">
                        <div className='title'>Выбранный стол: </div>
                        <div>{tablevalue}</div>
                    </div>

                    <div className="order_item">
                        <div className='title'>Выбранное меню:</div>
                        <div>{menuvalue}</div>
                    </div>

                    <div className="order_item">
                        <div className='title'>Выбранная декорация:</div>
                        <div>{decorvalue}</div>
                    </div>
                </div>

                <div className='btn_cont'>
                    <button onClick={Orderpost}>ОФОРМИТЬ</button>
                </div>

                <Modal
                    className="modal_cont"
                    open={openn}
                    sx={{ transition: '10s' }}

                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography sx={style_modal} id="modal-modal-title" variant="h6" component="h2">
                            <h1 className='modal_h1'>Ваша заявка принята</h1>
                            <img src={order} alt="" />
                        </Typography>
                        
                    </Box>
                </Modal>

            </Collapse>

            <Footer/>
            
    </div>
    );
};

