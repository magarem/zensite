import styles from '../../../styles/data.module.scss'
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import { useRouter } from 'next/router'
import { Button, Card, CardMedia, Container, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from "@mui/material";
import CardDataService from "../../../services/services";
import Upload from '../../../components/Upload'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useAuth } from '../../../context/AuthContext'
import Box from '@mui/material/Box';
import AlertDialog from '../../../components/AlertDialog'
// import Image from 'next/image'
import Image from 'mui-image'
import React from 'react';
const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;

// import 'react-quill/dist/quill.snow.css';
// Import the Slate editor factory.


// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import { Padding } from '@mui/icons-material';
import { margin } from '@mui/system';
//import the component lazily (not module itself)


function ShowOk() {
  return <img src="/ok.png" alt="me" width="64" height="64" />
}

interface Props {
  setuser: Function,
  user: {
    uid: string,
    email: string
  }
}
interface Obj1 {
  [x: string]: any;
  id: any;
  img: string; 
  cardSession: string,
  title: string;
  body: string;
  type: any;
  order: number;
}

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }


const Create: NextPage<Props> = (props) => {
  const [value, setValue] = useState('');
  const [desableSaveButton, setDesableSaveButton] = useState(false);
  const [bodyValue, setBodyValue] = useState('');
  const { user } = useAuth()
  const router = useRouter()
  const editor = useRef()

  const [uploadRefresh, setUploadRefresh] = useState(0);
  const [saved, setSaved] = useState({opened: false, txt: ""});
  const cardObj = {id: "", img: "", cardSession: "", title: "", body: "", type: "card", order: -1 };
  const [state, setState] = useState<Obj1>(cardObj)
  const [stateFolder, setStateFolder] = useState([{key: String, value: String}])
  const [mostra, setMostra] = useState(false)
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    console.log(name, value)
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
    console.log(state)
  };
  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ]
  const saveCard = () => {
    setDesableSaveButton(true)
    let data = { img: state.img, cardSession: state.cardSession, title: state.title, body: bodyValue, type: state.type, order: -1 };
    CardDataService.create(user.displayName, data)
      .then((x) => {
        console.log("Created new item successfully!");
        console.log(x)
        // setState({ ...state, submitted: true });
        setUploadRefresh(uploadRefresh + 1)
        setMostra(true)
        setTimeout(() => {
          setMostra(false)
        }, 1000)
        setState(cardObj)
        setDesableSaveButton(false)
      })
      .catch((e) => {
        console.log(e);
      });
  }
  
  const updateCard = () => {
    setDesableSaveButton(true)
    let data = {
      img: state.img,
      title: state.title,
      cardSession: state.cardSession,
      body: bodyValue,
      type: state.type||"card",
      order: state.order
    };

    console.log(user.displayName, data)

    CardDataService.update(user.displayName, state.id, data)
      .then((x) => {
        console.log("Update item successfully!");
        console.log(x)
        // setState({...state, submitted: true });
        setUploadRefresh(uploadRefresh + 1)
        setMostra(true)
        setTimeout(() => {
          setMostra(false)
        }, 1000)
        setDesableSaveButton(false)
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    if (router.query.card_id) {
      console.log(user.displayName);
      // CardDataService.readById(router.query.username, router.query.card_id).then((data) => {
      CardDataService.readById(user.displayName, router.query.card_id as string).then((data) => {
        console.log(data)
        if (data) {
          if (data.type == undefined) data.type="card"
          setState({ id: router.query.card_id, cardSession: data.cardSession, title: data.title, body: data.body, img: data.img, type: data.type, order: data.order })
          setBodyValue(data.body)
          console.log(state);
        }
      })
    }
  }, [])

  useEffect(() => {
    if (user) {
      const data = CardDataService.readById(user.displayName, "settings").then((data: any) => {
        console.log(data)
        console.log(Object.values(data))
        // const map1 = new Map(Object.values(data))
        // console.log(map1);
        
        setStateFolder(Object.values(data))
      })
    }
  }, [])

  const ActionLink = () => {
    console.log(11);
    setMostra(true)
  }
  if (true) {
    return (
      <div>
        <main className="py-10">
          <AlertDialog time title="" body="" img="/static/ok.png" mostra={mostra} setMostra={setMostra}/>
          <div className="w-full max-w-3xl px-3 mx-auto">
            <Grid container alignItems="center" justifyContent="center" spacing={{ xs: 2, md: 1 }}>
              <Grid item xs={12} sm={12} md={12} style={{textAlign: "left"}} >
                {state.id?<h2>Editar</h2>:<h2>Criar</h2>}
              </Grid>
              <Grid item={true} xs={12} sm={12} md={12} sx={{ padding: 0 }} style={{textAlign: "center"}}>
                <Box >
                  <Grid mb={2} container spacing={{ xs: 2, md: 1 }} alignItems="center" justifyContent="center">
                    <Grid item xs={12} sm={12} md={8} lg={9} style={{textAlign: "left"}} >
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Seção</InputLabel>
                     
                      <Select
                        fullWidth
                        name="cardSession"
                        defaultValue="general"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={state.cardSession}
                        label="Seção"
                        onChange={handleChange}>
                          
                          {stateFolder.map((item: any)=>{
                            return (
                              <MenuItem key={item.key} value={item.key}>{item.value}</MenuItem>
                            )
                          })}
                      </Select>
                    </FormControl>
                        <br/><br/>
                        <TextField 
                          id="outlined-basic"
                          fullWidth
                          name="title"
                          label="Titulo"
                          variant="outlined"
                          onChange={handleChange}
                          value={state.title}
                        /><br/><br/>
                        <Upload key={uploadRefresh} user={user} state={state} setState={setState} /> <br/>
                    </Grid>
                    {/* <Grid item xs={12} sm={12} md={6} style={{textAlign: "left"}} > */}
                    {/* <Upload key={uploadRefresh} user={user} state={state} setState={setState} /> <br/> */}
                    <Grid item xs={12} sm={12} md={4} lg={3} style={{textAlign: "right"}} >
                    {/* <Container maxWidth="xs" > */}
                      {state.img?
                      <>
                        <Card sx={{ width: 200, margin: 'auto', maxHeight: 500 }}>
                          <CardMedia
                            component="img"
                            height="100%"
                            width="100%"
                            image={state.img}
                          />
                        </Card>
                      </>
                      :
                      <>
                        <Box
                          sx={{
                            display: { xs: 'none', xl: 'none', md: 'block', lg: 'block' },
                            borderRadius: '4px',
                            margin: 'auto',
                            width: "98%",
                            height: 215,
                            backgroundColor: 'darkslategray',
                            '&:hover': {
                              backgroundColor: 'primary.main',
                              opacity: [0.9, 0.8, 0.7],
                            },
                          }}
                        />
                        {/* <Box sx={{ m: 1 }} /> */}
                      </>
                      }
                    {/* </Container> */}
                  </Grid>
                  {/* </Grid> */}
                  <Box sx={{ m: 0 }} />
                </Grid>
                    <ReactQuill theme="snow" value={bodyValue} onChange={setBodyValue} />
                    {/* {JSON.stringify(bodyValue[1])} */}
                    {/* <TextField
                    fullWidth
                    name="body"
                    label="Descrição"
                    multiline
                    rows={13}
                    onChange={setBodyValue}
                    value={bodyValue}/> */}
    
                      {/* </Typography>
                  <Typography variant="body2" color="text.secondary"> */}
                    {/* <TextField
                    fullWidth
                    name="body"
                    label="Descrição"
                    multiline
                    rows={13}
                    onChange={handleChange}
                    value={state.body}
                  /> */}
                 
                  {/* </Typography><br/>
                  <Typography variant="body2" color="text.secondary"> */}
                    <TextField
                    name="order"
                    label="Order"
                    onChange={handleChange}
                    value={state.order}
                    hidden
                  />
                   <Grid sx={{marginTop: "10px"}} container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                      <Grid item xs={12} sm={12} md={12} style={{textAlign: "center"}} >
                        <Box sx={{ m: 1 }} />
                        {/* <RadioGroup
                          row
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="card"
                          name="type"
                          value={state.type}
                          onChange={handleChange}
                        >
                          <FormControlLabel value="card" control={<Radio />} label="Cartão" />
                          <FormControlLabel value="section" control={<Radio />} label="Seção" />
                        </RadioGroup> */}
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} style={{textAlign: "left"}} >
                      <Button color="success" disabled={desableSaveButton} variant="contained" fullWidth component="label"  onClick={state.id?updateCard:saveCard}>
                        Salvar
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} style={{textAlign: "left"}} >
                      <Button color="warning" variant="contained" fullWidth component="label" onClick={() => router.back()}>
                        Cancelar
                      </Button>
                    </Grid>
                    </Grid>
                  {/* </Typography> */}
                  {/* <Button variant="contained" fullWidth component="label"  onClick={(e)=>alert(editor.current)}>
                    ver
                  </Button> */}
                </Box>
              </Grid>
            </Grid><br/><br/>
          </div>
        </main>
      </div>
    );
  } else {
    return <div>go to login page</div>
  }
};

export default Create;

// export async function getServerSideProps(context) {
//   if (!context.req.cookies['user']) {
//     const { res } = context;
//     res.setHeader("location", "/Login");
//     res.statusCode = 302;
//     res.end();
//     return;
//   }
//   return {
//     props: { user: JSON.parse(context.req.cookies['user']) }, // will be passed to the page component as props
//   }
// }