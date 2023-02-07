import { Navigate, Route, Routes } from "react-router-dom"
import { productos } from "../constants/data"
import { CairoPage, RiñonerasPage, BandolerasPage, BilleterasPage, CinturonesPage, MochilasPage, ProductoPage } from "../pages"


export const CairoRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <CairoPage /> } />
        <Route path="/rinoneras" element={ <RiñonerasPage /> } />
        <Route path="/bandoleras" element={ <BandolerasPage /> } />
        <Route path="/billeteras" element={ <BilleterasPage /> } />
        <Route path="/cinturones" element={ <CinturonesPage /> } />
        <Route path="/mochilas" element={ <MochilasPage /> } />


        <Route path="/:path" element={ <ProductoPage />} />


        <Route path="/*" element={ <Navigate to="/" /> } />

    </Routes>
  )
}
