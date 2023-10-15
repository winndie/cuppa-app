import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { IReadout } from '../types'

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        cooking: false as boolean,
        drink: undefined as IReadout|undefined,
        recipes: undefined as IReadout[]|undefined,
        currentRecipe:0 as number,
        timer: {} as NodeJS.Timer
    },
    reducers: {
        setCooking: (state, action:PayloadAction<IReadout>) => {
            state.cooking = true
            state.drink = action.payload
            state.recipes = action.payload.recipes
            state.currentRecipe = 0
        },      
        setTimer: (state, action:PayloadAction<NodeJS.Timer>) => {
            state.timer = action.payload
        },
            setCurrentRecipe: (state) => {
            if(!!state.recipes && state.currentRecipe === state.recipes?.length -1){
                state.cooking = false
                state.currentRecipe = 0
                state.drink = undefined
                state.recipes = undefined
            }
            else if(state.cooking){
                state.currentRecipe = state.currentRecipe + 1
            }
        },      
    },
  })

export const {
    setCooking,
    setCurrentRecipe,
    setTimer,
} = appSlice.actions