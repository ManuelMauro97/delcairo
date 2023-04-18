import { Box, Button, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"
import { CairoLayout } from "../layout/CairoLayout"


export const CairoPage = () => {
  return (  
    <CairoLayout>

    <Typography align="center" mt={7} variant='subtitle1' fontSize={30}>TODOS LOS PRODUCTOS</Typography>

    <ImageGallery />
    </CairoLayout>
  )
}
