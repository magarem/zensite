import type { NextPage } from "next";
import { useEffect, useState, useRef } from "react";
import { useRouter } from 'next/router'
import { BottomNavigation, BottomNavigationAction, Button, Card, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select } from "@mui/material";
import CardDataService from "../../../services/services";
import Upload from '../../../components/Upload'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useAuth } from '../../../context/AuthContext'
import Box from '@mui/material/Box';
import AlertDialog from '../../../components/AlertDialog'
import React from 'react';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;
import { TagsInput } from "react-tag-input-component";
import FullFeaturedCrudGrid from "../../../components/dataGrid"
import Image from 'next/image'
import MagaTable from "../../../components/table"
import { spacing } from '@mui/system';
interface Props {
  setuser: Function,
  user: {
    uid: string,
    email: string
  }
}
interface Obj1 {
  id: any;
  card_id: any;
  img: string; 
  folder: string,
  title: string;
  body: string;
  order: number;
}

interface Obj2 {
  key: any;
  value: any;
}
const Create: NextPage<Props> = (props) => {
  const { user, getFolderKeyByValue, getFolders } = useAuth()
  const [desableSaveButton, setDesableSaveButton] = useState(false);
  const [bodyValue, setBodyValue] = useState('');
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);

  const [selected, setSelected] = useState<string[]>([]);
  

  const router = useRouter()
  let folder = router.query.folder
  if (folder=='usersettings') folder = 'Home'
  const original_card_id = router.query.id
  const id = router.query.id

  const cardObj = {id: "", card_id: "", img: "", folder: "", title: "", body: "", tags: "", order: -1 };
  const [state, setState] = useState<Obj1[]>([cardObj])
  const [data, setData] = useState<Obj1>(cardObj)
 
  const tblObj = [{key: "", value: ""}];
  const [stateExtra, setStateExtra] = React.useState<Obj2[]>(tblObj)

 
//   const cols = ['Nome', 'Email', 'Fone', 'Adress', 'Obs']
//   const rows = [
//       ['Maguete!', 'maga@teste.com', 6.0, 24, 4.0], 
//       ['Ice cream sandwich', 237, 9.0, 37, 4.3], 
//       ['Eclair', 262, 16.0, 24, 6.0], 
//       ['Cupcake', 305, 3.7, 67, 4.3], 
//       ['Gingerbread', 356, 16.0, 49, 3.9]
//   ]


  const cols = ['Chave', 'Valor']
  const rows: any[] = []


  useEffect(() => {
    const folder_key = getFolderKeyByValue(folder)
    // setState({...state, folder: folder_key})
    const username = location.href.split('//')[1].split('.')[0]
    console.log(username);
    
    CardDataService.readUserData(username).then(async (ret: any)=>{
        const uid = ret.uid
        console.log(uid, router.query.id)
        CardDataService.readById(uid, router.query.id as string).then((data: any) => {
            console.log(data)
            if (data) {
                setData(data)
                console.log(data.extra);
                data.extra.map((item: any)=>{
                    rows.push([item.key, item.value])
                })
                setState(rows)

               console.log(rows);
               
                // if (!data.extra) data.extra = [{key: "", value: ""}] 
                
            }
        })
    })
  }, [])
 
  return (
    <> 
    
        <h1>{data.title}</h1>
        {/* <img src={data.img}/> */}
        {/* <div style={{ position: "relative", width: "100%", paddingBottom: "20%" }} > */}
       {/* {data.img} */}
        {data.img&&
        <Container disableGutters
            sx={{
                padding: 0,
                maxWidth: '100%',
            }}
        // alt="Logo"
        >
        <img src={data.img} style={{maxWidth: '100%'}}/>
    </Container>
       }<br/>
                   <div style={{fontSize: '20px'}} dangerouslySetInnerHTML={{ __html: data.body }}/>

        {/* </div> */}
        <MagaTable cols={cols} rows={state}/>
        <br/><br/>
    </>
   
  );
} 

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