import { Typography } from "@mui/material"
import { ImageGalleryMo } from "../components/ImageGalleryMo"
import { CairoLayout } from "../layout/CairoLayout"


export const MochilasPage = () => {
  return (
    <>    
    <CairoLayout />

    <Typography align="center" mt={7} mb={-5} variant='subtitle1' fontSize={30}>MOCHILAS</Typography>

    <ImageGalleryMo />
    </>
  )
}
