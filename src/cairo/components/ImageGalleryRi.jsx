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


export const ImageGalleryRi = () => {
  return (
    <Grid justifyContent={"center"} maxWidth="100vw" padding={10} container>
      {productos.filter( name => name.tipo.includes('rinoneras' )).map((item) => (
        <Card sx={{ maxWidth: 280, margin: "20px" }} key={item.img} >
          <CardMedia sx={{ height: 300 }} image={item.img} title={item.title} />
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
              {item.price}
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
