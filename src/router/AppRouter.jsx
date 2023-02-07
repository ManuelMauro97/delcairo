import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { CairoRoutes } from '../cairo/routes/CairoRoutes'

export const AppRouter = () => {
  return (
    <Routes>
         
        <Route path='/auth/*' element={ <AuthRoutes /> }/>

        <Route path='/*' element={ <CairoRoutes /> }/>

    </Routes>
  )
}
