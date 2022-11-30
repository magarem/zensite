import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';

interface Obj1 {
    key: any;
    value: any;
}
export default function BasicTable(props: { stateExtra: any; setStateExtra: (arg0: Obj1[]) => void; }) {

    // const tblObj = [{key: "", value: ""}];
    // const [stateExtra, setStateExtra] = React.useState<Obj1[]>(tblObj)

    // React.useEffect(() => {
    //     //Typical usage, don't forget to compare the props
    //     console.log(JSON.stringify(props.stateExtra));
    //     if (JSON.stringify(props.stateExtra) !== JSON.stringify(stateExtra)) {
    //         console.log(props.stateExtra);
            
    //         // let x = props.stateExtra
            
    //         setStateExtra(props.stateExtra)
    //     }
    // },[props.stateExtra])

    // React.useEffect(() => {
    //     props.setStateExtra(stateExtra)
    //     // let y = stateExtra
    // },[stateExtra])
    
    
    const updateFieldChanged = (index: number) => (e: { target: { name: string; value: string; }; }) => {
        console.log('index: ' + index);
        console.log('property name: '+ e.target.name);
        let newArr = [...props.stateExtra];
        if (e.target.name == 'key'){
            newArr[index][e.target.name] = e.target.value.substring(0,20).replace(' ','_').normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        }
        if (e.target.name == 'value'){
            newArr[index][e.target.name] = e.target.value 
        }
        
        props.setStateExtra(newArr)
      }
    
    const rowAdd = () => {
      props.setStateExtra([...props.stateExtra, {key: "", value: ""}])
    }
    
    const itemDel = (index: number) => {
      props.setStateExtra(props.stateExtra.filter((x: any, i:any) => i !== index))
    }

  return (
    <>
        {/* {JSON.stringify(stateExtra)} */}
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Chave</TableCell>
            <TableCell align="center">Valor</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            
          {props.stateExtra.map((row: any, index: number) => (
            <TableRow 
              key={'key_'+index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell width={150} key={'keyss_'+index} align="center" component="th" scope="row">
                <TextField 
                  key={'key_'+index}
                  id="outlined-basic"
                  fullWidth
                  name="key"
                  variant="outlined"
                  onChange={updateFieldChanged(index)}
                  value={props.stateExtra[index].key}
                  />
              </TableCell>
              <TableCell width={200} align="center">
                <TextField 
                 key={'value_'+index}
                    id="outlined-basic"
                    fullWidth
                    name="value"
                    variant="outlined"
                    onChange={updateFieldChanged(index)}
                    value={props.stateExtra[index].value}
                    />
              </TableCell>
              <TableCell width={1} align="center">
                <Button onClick={()=>itemDel(index)}>x</Button>
              </TableCell>
            </TableRow>
           
          ))}
           <TableRow>
                <TableCell colSpan={3}><Button onClick={rowAdd}>Nova linha</Button></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

