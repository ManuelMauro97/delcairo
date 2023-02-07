import { Fragment, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ShoppingCart } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Card, CardMedia, Grid, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import { onDeleteProducto, onHandleAdd, onHandleRemove } from '../../store/cairo/cairoSlice';

export const Carrito = () => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const dispatch = useDispatch();

  const carrito = useSelector(state => state.cairo.carrito);
  const total = useSelector(state => state.cairo.total);


  const handleDelete = (path) => {
    dispatch(onDeleteProducto(path))
  }
  const handleAdd = (path) => {
    dispatch(onHandleAdd(path))
  }
  const handleRemove = (path) => {
    dispatch(onHandleRemove(path))
  }

  const toggleDrawer = (anchor, open) => (event) => {
    event.stopPropagation()
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 500, mr: 2, ml: 2 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <Grid mt={5} mb={1}>
        <Typography variant='h5'>Mi Carrito</Typography>
      </Grid>
      <Divider />
      <Grid mt={1} mb={1}>
        {carrito.map((item) => (
          <Card key={item.img} sx={{display: 'inline-flex', width: '100%'}}>
            <Stack direction={'row'} justifyContent='space-between' alignItems={'center'} width='100%'>
              <Stack alignItems={'center'} flexDirection='row'>
              <CardMedia sx={{ height: '75px', width: '75px', display: 'inline-flex' }} image={item.img} title={item.title} />
            <Box display={'inline-flex'} alignItems='center'>
              <Button onClick={() => handleRemove(item.path)} disabled={item.count === 1}>
                <RemoveCircleOutlineRoundedIcon />
              </Button>
              <Typography>{item.count}</Typography>
              <Button onClick={() => handleAdd(item.path)} disabled={item.count === item.stok}>
                <AddCircleOutlineRoundedIcon />
              </Button>
            </Box>
              </Stack>

              <Box display={'inline-flex'} justifyContent='flex-end' flexDirection={'row'} alignItems='center'>
              <Typography>$ {item.price * item.count}</Typography>
              <Button onClick={() => handleDelete(item.path)}>
                <DeleteIcon />
              </Button>
            </Box>
            </Stack>
            
          </Card>
        ))}
      </Grid>
      <Divider />

      <Grid container spacing={2} mt={1} mb={1}>
        <Grid item xs={10}>
            Subtotal
        </Grid>
        <Grid item xs={2}>
            $ {total}
        </Grid>
      </Grid>
      <Divider />

      <Grid mt={1} mb={1}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Calcula el costo de envio</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>
      <Divider />

      <Grid mt={1} mb={1}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Tenes un descuento?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>
      <Divider />
 
      <Grid container spacing={2} mt={1} mb={1}>
        <Grid item xs={10}>
            Total
        </Grid>
        <Grid item xs={2}>
            $ {total}
        </Grid>
      </Grid>
      <Divider />

    <Grid mt={5} textAlign='center'>
    <Button variant='contained'>
        Iniciar Compra
    </Button>
    </Grid>

    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <Fragment key={anchor}>
          <Button color='secondary' onClick={toggleDrawer(anchor, true)}>{<ShoppingCart color='secondary'/>}{carrito.length}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
}