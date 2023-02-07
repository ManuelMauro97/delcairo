import { Typography } from "@mui/material"
import { ImageGalleryBi } from "../components/ImageGalleryBi"
import { CairoLayout } from "../layout/CairoLayout"


export const BilleterasPage = () => {
  return (
    <>    
    <CairoLayout />

    <Typography align="center" mt={7} mb={-5} variant='subtitle1' fontSize={30}>BILLETERAS</Typography>

    <ImageGalleryBi />
    </>
  )
}
