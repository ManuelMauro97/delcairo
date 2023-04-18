import { Autocomplete, Button, ButtonGroup, Grid, Stack, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"
import { NavBar } from '../components/NavBar'
import { Search, SearchIconWrapper, StyledInputBase } from "../constants/buscador"
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../../../assets/logos/delCairo.png'
import { CrearCuenta } from "../components/CrearCuenta";
import { productos } from "../constants/data";
import { menuList } from "../constants/menuList";
import { useNavigate } from "react-router-dom";

export const CairoLayout = ({children}) => {

  const navigate = useNavigate();

  const handleOptionSelected = (event, value) => {
    navigate(`/producto/${value.path}`)
      };

  return (
    <Stack bgcolor={'white'} height={'100vh'} flexDirection={'column'} sx={{ display: 'flex' }}>
        <Stack bgcolor={'black'} justifyContent='space-between' padding={1} sx={{ position: 'relative', height: '100px'}}>
            <Grid color={'white'} align='center'>Envíos a todo el país - Cruelty Free - 10% off abonando en efectivo/transferencia</Grid>
            <Grid color={'white'} sx={{ justifySelf: 'end', alignSelf: 'flex-end'}}>delcairoaccesorios@gmail.com</Grid>
        </Stack>
        <Stack direction={'row'} sx={{ alignItems: 'center', justifyContent: 'space-around', mr: '400px', ml: '400px' }} margin='10px'>
        <Autocomplete
        getOptionLabel={(option) => option.title}
        onChange={handleOptionSelected}
        sx={{ width: 200 }}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={productos}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Buscar..."
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
            {/* <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Buscar..."
                  inputProps={{ 'aria-label': 'search' }}
                />
            </Search> */}

            <img height={200} width={200} src={ Logo } alt='DelCairo Logo'/>

                <CrearCuenta />

        </Stack>

        <NavBar />


            {children}
    </Stack>
  )
}
