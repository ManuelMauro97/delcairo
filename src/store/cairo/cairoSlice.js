import { createSlice } from '@reduxjs/toolkit';

export const cairoSlice = createSlice({
    name: 'cairo',
    initialState: {
        carrito: [],
        menuList: [],
        total: 0,
    },
    reducers: {
        onAddProducto: (state, {payload}) => {
            state.carrito.push(payload);
            state.total += payload.price * payload.cantidad;
        },
        onDeleteProducto: (state, {payload}) => {
            const producto = state.carrito.find(producto => producto.path === payload);
            state.carrito = state.carrito.filter(producto => producto.path !== payload);
            state.total -= producto.price;
        },
        onHandleAdd: (state, {payload}) => {
            const producto = state.carrito.find(producto => producto.path === payload);
            producto.count += 1;
            state.total += producto.price;
        },
        onHandleRemove: (state, {payload}) => {
            const producto = state.carrito.find(producto => producto.path === payload);
            producto.count -= 1;
            state.total -= producto.price;
        },
        onSelectTipo: (state, {payload}) => {
            state.menuList.push(payload);
        },
    }
});



export const { onAddProducto, onDeleteProducto, onHandleAdd, onHandleRemove, onSelectTipo } = cairoSlice.actions;