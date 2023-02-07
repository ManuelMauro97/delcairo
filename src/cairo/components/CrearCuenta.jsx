import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ButtonGroup, Divider, Grid, Typography } from '@mui/material';

export const CrearCuenta = () => {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpenClose = () => {
    setOpen2(false);
    setOpen1(true);
  };

  const handleOpenCloseStok = () => {
    setOpen2(true);
    setOpen1(false);
  };

  return (
    <ButtonGroup variant="text" aria-label="text button group">
      <Button variant="text" onClick={handleClickOpen1}>
        Crear Cuenta
      </Button>
      <Dialog open={open1} onClose={handleClose1} fullWidth='400px' >
        <DialogTitle>Crear Cuenta</DialogTitle>
        <Divider />
        <DialogContent>
            <Grid container spacing={2}>
                <Grid item xs={6}>            
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            variant="standard"
          />
                </Grid>
                <Grid item xs={6}>            
          <TextField
            autoFocus
            margin="dense"
            id="lastName"
            label="Last Name"
            type="lastName"
            fullWidth
            variant="standard"
          />
                </Grid>
            </Grid>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Phone"
            type="phone"
            fullWidth
            variant="standard"
          />
            <Grid container spacing={2}>
                <Grid item xs={6}>            
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
                </Grid>
                <Grid item xs={6}>            
          <TextField
            autoFocus
            margin="dense"
            id="passwor"
            label="Repeat Password"
            type="password"
            fullWidth
            variant="standard"
          />
                </Grid>
            </Grid>
        </DialogContent>
        <Grid container justifyContent={'right'}>
        <Typography fontSize={'small'}>
            Ya tienes cuenta? <Button variant='text' onClick={handleOpenCloseStok}>Iniciar Sesion</Button>
        </Typography>
        </Grid>
        <Divider />
        <DialogActions>
          <Button onClick={handleClose1}>Crear Cuenta</Button>
        </DialogActions>
      </Dialog>



      <Button variant="text" onClick={handleClickOpen2}>
        Iniciar Sesion
      </Button>
      <Dialog open={open2} onClose={handleClose2} fullWidth='400px'>
        <DialogTitle>Iniciar Sesion</DialogTitle>
        <Divider />
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <Grid container justifyContent={'right'}>
        <Typography fontSize={'small'}>
            Aun no tienes cuenta? <Button variant='text' onClick={handleOpenClose}>Crear Cuenta</Button>
        </Typography>
        </Grid>
        <Divider />
        <DialogActions>
          <Button onClick={handleClose2}>Ingresar</Button>
        </DialogActions>
      </Dialog>
      </ButtonGroup>
  );
}