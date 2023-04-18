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
import { useState } from "react";
import { productos } from "../constants/data";



export const ImageGallery = () => {


    const [showMore, setshowMore] = useState(12);

    const totalProducts = productos.length;

  return (
    <Stack bgcolor={'white'}>
    <Grid justifyContent={"center"} maxWidth="100vw" padding={10} container>
      {productos.slice(0, showMore).map((item) => (
        <Card sx={{ maxWidth: 300, margin: "30px", ':hover': {cursor:'pointer'} }} key={item.img} component={RouterLink} to={`/producto/${item.path}`} >
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
              {`$${item.price}`}
            </Typography>
            <Typography align="center" variant="body2" color="text.secondary">
              10% off abonando en efectivo/transferencia
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Grid>
        { showMore < totalProducts && (
            <Box textAlign={'center'} mb='100px'>
                <Button variant="contained" onClick={ () => setshowMore(showMore + 4)}>
                    Ver Mas...
                </Button>
            </Box>
        )}
    </Stack>
  );
};
