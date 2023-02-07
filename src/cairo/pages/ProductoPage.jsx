import { Button, CardMedia, Grid, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { productos } from "../constants/data";
import { CairoLayout } from "../layout/CairoLayout";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useDispatch } from "react-redux";
import { onAddProducto } from "../../store/cairo/cairoSlice";

export const ProductoPage = () => {
  const { path } = useParams();

  const [error, setError] = useState({hasError: false, errorMessage: ''});
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [productoEncontrado, setproductoEncontrado] = useState({});
  const [cantidad, setCantidad] = useState(1);

  const dispatch = useDispatch();

  const handleNextImg = () => {
    if (currentImgIndex === productoEncontrado.imgs.length - 1) {
      setCurrentImgIndex(0);
    } else {
      setCurrentImgIndex(currentImgIndex + 1);
    }
  };

  const handlePrevImg = () => {
    if (currentImgIndex === 0) {
      setCurrentImgIndex(productoEncontrado.imgs.length - 1);
    } else {
      setCurrentImgIndex(currentImgIndex - 1);
    }
  };

  const getProductByPath = () => {
    const producto = productos.find((producto) => producto.path === path);
    const imgs = Object.entries(producto)
      .filter(([key, value]) => key.includes("img"))
      .map(([key, value]) => value);
    setproductoEncontrado({ ...producto, imgs });
  };

  const handleAddProducto = () => {
    const productoSeleccionado = {...productoEncontrado, cantidad: cantidad, count: productoEncontrado.count + JSON.parse(cantidad)};
    dispatch(onAddProducto(productoSeleccionado));
}

  useEffect(() => {
    getProductByPath();
  }, [path]);

  return (
    <CairoLayout>
        <Stack
        maxHeight={'640px'}
        maxWidth={'100vw'}
        container
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        pt={9}
        px={35}
        spacing={10}
      >
        <Grid item xs={6} maxHeight="600px" maxWidth="450px">
          <div style={{ position: "relative" }}>
            <KeyboardArrowLeftIcon
              fontSize="large"
              onClick={handlePrevImg}
              style={{ position: "absolute", left: 0, top: "50%" }}
            />
            {productoEncontrado.imgs && (
              <img
                src={productoEncontrado.imgs[currentImgIndex]}
                style={{ width: "100%", height: "auto" }}
              />
            )}
            <KeyboardArrowRightIcon
              fontSize="large"
              onClick={handleNextImg}
              style={{ position: "absolute", right: 0, top: "50%" }}
            />
          </div>
        </Grid>
        <Grid
          item
          xs={6}
          direction="column"
          alignItems="flex-start"
          spacing={4}
        >
          <Grid>
            <Typography variant="h5">{productoEncontrado.title}</Typography>
          </Grid>
          <Grid>
            <Typography mt={1} variant="h6">$ {productoEncontrado.price}</Typography>
          </Grid>
          <Grid >
            <Typography variant="body1" mt={4}>
              10% de descuento pagando por transferencia bancaria ó efectivo
            </Typography>
          </Grid>
          <Grid
            direction="column"
            alignItems="center"
            spacing={2}
          >
              <TextField
              sx={{mt: 4}}
              fullWidth
                label="Cantidad"
                type="number"
                defaultValue={1}
                style={{ width: "100%" }}
                error={error.hasError}
                helperText={
                  error.hasError ? error.errorMessage : ''
                }
                InputProps={{inputProps: {min: 0, max: productoEncontrado.stok}}}
                onChange={(event) => {
                  const value = event.target.value;
                  if (value < 1) {
                    setError({hasError: true, errorMessage: 'La cantidad debe ser mayor a 0.'});
                  } else if (value > productoEncontrado.stok) {
                    setError({hasError: true, errorMessage: 'La cantidad supera el stok.'});
                  } else {
                    setError({hasError: false, errorMessage: ''});
                    setCantidad(value);
                  }
                }}
              />
              <Button
              sx={{mt: 4}}
              fullWidth
                disabled={productoEncontrado.stok === 0}
                onClick={handleAddProducto}
                style={{
                  backgroundColor: "black",
                  color: "white",
                  width: "100%",
                }}
              >
                Agregar al carrito
              </Button>
          </Grid>
        </Grid>
      </Stack>
    </CairoLayout> 
  );
};

