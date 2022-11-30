import React from "react";
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, IconButton, List, ListItem, ListItemAvatar, ListItemText, TextField } from "@mui/material";
import type { NextPage } from "next";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import CardDataService from "../../services/services";
import HomeIcon from '@mui/icons-material/Home';
import { Create, DeleteForever, Folder } from "@material-ui/icons";

interface folderItem {
  key: string | null;
  value: string | null;
  order: number;
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Usersettings: NextPage = (props) => {
 
  const [formCardFolder, setFormCardFolder] = useState<folderItem>({key:"", value:"", order: 0})
  const { user, getFolders, setFolders } = useAuth()
  const [flgDialogSetOpen, setFlgDialogSetOpen] = React.useState(false);

  const handleClickOpen = () => {
    setFormCardFolder({key: null, value: null, order: 1})
    setFlgDialogSetOpen(true);
  };

  const handleClose = () => {
    setFlgDialogSetOpen(false);
  };
  
  const save = (data: object) => {
    CardDataService.setUserFolders(user.uid, data)
    .then((x) => {
      console.log("Created new item successfully!");
      console.log(x)
      // setCardFolder({key:"", value:"", order: 1});
    })
    .catch((e) => {
      console.log(e);
    });
  }

  const folderAdd = () => {  
    if (formCardFolder.value){
      var array = getFolders()
      if (formCardFolder.key){ // In case if a edition
        var foundIndex = array.findIndex((x: any) => x.key == formCardFolder.key);
        array[foundIndex] = formCardFolder;
      }else{ // In case if a new folder
        array = [ ...array, {key: generateId(), value: capitalizeFirstLetter(formCardFolder.value), order: new Date().getTime()} ]
      }
      console.log(array);
      setFolders(array)
      save(array)
      setFlgDialogSetOpen(false)
    }
  }
  
  const generateId = () => {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36)
  }

  const itemRemove = (index: number, name: string) => {
    if (confirm('Excluir pasta ' + name + '?')){
      var array = [...getFolders()]; 
      array.splice(index, 1);
      setFolders(array);
      save(array)
    }
  }

  const itemEdit = (index: number) => {
    setFlgDialogSetOpen(true)
    // setOperation('Alterar')
    setFormCardFolder({key: getFolders()[index].key, value: getFolders()[index].value, order: getFolders()[index].order})
  }
  return (
    <>
      <Dialog
        open={flgDialogSetOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">
          {"Pasta"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <FormControl fullWidth>
              <TextField
                name="formCardFolder_value"
                value={formCardFolder.value}
                placeholder="Nova pasta"
                onChange={(e)=>{setFormCardFolder({key: formCardFolder.key, value: e.target.value.trim().substring(0,20).replace(' ','_').normalize('NFD').replace(/[\u0300-\u036f]/g, ""), order: formCardFolder.order})}}
              />
            </FormControl>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setFlgDialogSetOpen(false)}>Cancelar</Button>
          <Button onClick={()=>folderAdd()}>Salvar</Button>
        </DialogActions>
      </Dialog>
      <h3>{'Configurações de usuário > Pastas'}</h3><br/>
      <Button onClick={handleClickOpen}>Nova pasta</Button>
      <span style={{width:350}}>
        <List dense={true}>
          {getFolders()&&getFolders().map((item: any, index: any) => {
            return (
              <ListItem key={item.key}
                secondaryAction={
                  <>
                    <IconButton sx={{ margin: 1 }} edge="end" onClick={() => itemEdit(index)} aria-label="edit" disabled={item.key=='/'}>
                    {(item.key!='/')&&
                      <Create />
                    }
                    </IconButton>
                    <IconButton edge="end" onClick={() => itemRemove(index, item.value)} aria-label="delete" disabled={item.key=='/'}>
                    {(item.key!='/')&&
                      <DeleteForever />
                    }
                    </IconButton>
                  </>
                }>
                <ListItemAvatar >
                  <Avatar>
                    {(item.key=='/')?
                    <HomeIcon/>:
                    <Folder />
                    }
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  // onClick={() => itemEdit(index)}
                  primaryTypographyProps={{
                    fontSize: 16
                  }}
                  primary={capitalizeFirstLetter(item.value)}
                />
              </ListItem>
            )})
          }
        </List>
      </span>
    </>
  )
}

export default Usersettings