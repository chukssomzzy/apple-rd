import {createSlice} from "@reduxjs/toolkit"
import type {PayloadAction} from "@reduxjs/toolkit"
import {Product} from "../types"
import {RootState} from "../app/store"

export type CartSlice = {
    items: Product[],
}

const initialState: CartSlice = {
    items: [],
}  

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state: CartSlice, action: PayloadAction<Product>) => {
            state.items = [...state.items, action.payload]
        },
        removeFromCart: (
            state: CartSlice,
            action: PayloadAction<{id: string}>
        ) => {
            state.items = state.items.filter(item => (item._id !== action.payload.id))
        }
    }
})
// actions
export const {addToCart, removeFromCart} = cartSlice.actions

// selector
export const selectCartItems = (state: RootState) => (state.cart.items)
export const selectCartItemsById = (state: RootState, id: string) => (state.cart.items.filter((item)=>
                                                                                              item._id === id));
export const selectCartTotal = (state: RootState) => (
    state.cart.items.reduce((total, item: Product) => (total += item.price), 0)
)

export default cartSlice.reducer
