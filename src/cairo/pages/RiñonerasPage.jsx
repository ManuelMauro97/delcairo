import { Typography } from "@mui/material"
import { ImageGalleryRi } from "../components/ImageGalleryRi"
import { CairoLayout } from "../layout/CairoLayout"


export const RiñonerasPage = () => {
  return (
    <>    
    <CairoLayout />

    <Typography align="center" mt={7} mb={-5} variant='subtitle1' fontSize={30}>RIÑONERAS</Typography>

    <ImageGalleryRi />
    </>
  )
}
