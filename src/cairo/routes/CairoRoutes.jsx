import { Navigate, Route, Routes } from "react-router-dom";
import {
  CairoPage,
  ProductoPage,
  ProductosPorTipoPage,
} from "../pages";

export const CairoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CairoPage />} />
      <Route path="/producto/:path" element={<ProductoPage />} />
      <Route path="/:tipoProducto" element={<ProductosPorTipoPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

