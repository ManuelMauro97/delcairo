import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { productos } from "../constants/data";
import { useDispatch, useSelector } from "react-redux";
import { onSelectTipo } from "../../store/cairo/cairoSlice";
import { useEffect } from "react";



export const ImageGalleryBa = () => {

  const dispatch = useDispatch();

  const tipo = useSelector(state => state.cairo.menuList);

  const menuList = () => {
    menuList.map(item)
  }

  const handleTipo = () => {
    dispatch(onSelectTipo(menuList))
  }

  useEffect(() => {
    handleTipo
  }, [])
  

  return (
    <Grid justifyContent={"center"} maxWidth="100vw" padding={10} container>
      {productos.filter( name => name.tipo.includes('bandoleras')).map((item) => (
        <Card sx={{ maxWidth: 300, margin: "30px", ':hover': {cursor:'pointer'} }} key={item.img} component={RouterLink} to={`/${item.path}`} >
        { item.stok === 0 ? (
          <div>
            <Typography variant="h6" align="center" color="error">SIN STOK</Typography>
            <CardMedia className="blurred" sx={{ height: 300 }} image={item.img} title={item.title} />
          </div>
        ) : (
          <CardMedia sx={{ height: 300 }} image={item.img} title={item.title} />
        )}
          <Grid justifyContent={"center"} container>
            <CardActions>
              <Button size="medium">
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
              </Button>
            </CardActions>
          </Grid>
          <CardContent>
            <Typography
              mt={-5}
              align="center"
              variant="body1"
              color="text.secondary"
            >
              $ {item.price}
            </Typography>
            <Typography align="center" variant="body2" color="text.secondary">
              10% off abonando en efectivo/transferencia
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};
