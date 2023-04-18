import { useParams } from "react-router-dom";
import { ImageGalleryBa } from "../components/ImageGalleryBa";
import { CairoLayout } from "../layout/CairoLayout";
import { Typography } from "@mui/material";

const productTitles = {
  rinoneras: "RIÑONERAS",
  bandoleras: "BANDOLERAS",
  billeteras: "BILLETERAS",
  cinturones: "CINTURONES",
  mochilas: "MOCHILAS",
};

export const ProductosPorTipoPage = () => {
  const { tipoProducto } = useParams();
  const title = productTitles[tipoProducto] || "PRODUCTOS";

  return (
    <CairoLayout>
      <Typography
        color={"black"}
        align="center"
        mt={7}
        variant="subtitle1"
        fontSize={30}
      >
        {title}
      </Typography>

      <ImageGalleryBa tipoProducto={tipoProducto} />
    </CairoLayout>
  );
};

