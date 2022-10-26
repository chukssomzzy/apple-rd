import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "../features/cartSlice"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
})

/*
    * RootState - Infers the `RootState` 
* AppDispatch - Return the Dispatch state type
*/

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
