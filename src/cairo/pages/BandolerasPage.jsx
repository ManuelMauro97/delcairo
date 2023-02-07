import { Typography } from "@mui/material"
import { ImageGalleryBa } from "../components/ImageGalleryBa"
import { CairoLayout } from "../layout/CairoLayout"


export const BandolerasPage = () => {
  return (
        
    <CairoLayout>

    <Typography align="center" mt={7} mb={-5} variant='subtitle1' fontSize={30}>BANDOLERAS</Typography>

    <ImageGalleryBa />
    
    </CairoLayout>
  )
}
