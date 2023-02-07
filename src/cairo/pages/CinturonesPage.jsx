import { Typography } from "@mui/material"
import { ImageGalleryCi } from "../components/ImageGalleryCi"
import { CairoLayout } from "../layout/CairoLayout"


export const CinturonesPage = () => {
  return (
    <>    
    <CairoLayout />

    <Typography align="center" mt={7} mb={-5} variant='subtitle1' fontSize={30}>CINTURONES</Typography>

    <ImageGalleryCi />
    </>
  )
}
