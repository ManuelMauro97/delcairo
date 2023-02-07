import { Link as RouterLink } from "react-router-dom";
import { ShoppingCart, KeyboardArrowDown, Padding } from "@mui/icons-material";
import {
    AppBar,
    Button,
    Grid,
    IconButton,
    List,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/system";
import { menuList } from "../constants/menuList";
import { Carrito } from "./Carrito";




export const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const test = (
        <Stack direction={'column'} bgcolor='green'>
            Puto el que lee
        </Stack>
    )
    return (
        <AppBar position="sticky" sx={{ width: "100vw", height: 50, alignItems: 'center', justifyContent: 'center' }} color="primary" >
            {isMobile && test}
            <Stack direction={{ xs: "column", md: "row" }}>
                <List>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Button component={RouterLink} to="/" color="secondary">
                            Inicio
                        </Button>

                        <Button
                            color="secondary"
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                        >
                            Productos
                            <KeyboardArrowDown />
                        </Button>
                        <Menu
                            sx={{ color: 'primary' }}
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                        >
                            {menuList.map(m => (
                                <MenuItem sx={{ bgcolor: 'black', color: 'white' }} component={RouterLink} key={m.path} to={`${m.path}`} onClick={handleClose}>
                                    {m.displayName}
                                </MenuItem>
                            ))}
                        </Menu>

                        <Button color="secondary">Contacto</Button>

                        <IconButton color="secondary" aria-label="add to shopping cart">
                            <Carrito />
                        </IconButton>
                    </Grid>
                </List>
            </Stack>
        </AppBar>
    );
};
