import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { IReadout } from '../types'
import {LemonTea, Coffee, Chocolate} from '../constants'

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        cooking: false as boolean,
        drinks: undefined as IReadout[]|undefined,
        recipes: undefined as IReadout[]|undefined,
        currentRecipe:0 as number,
        timer: undefined as NodeJS.Timer|undefined,
    },
    reducers: {
        setDrinks: (state) => {            
            state.drinks = [LemonTea,Coffee,Chocolate]
        },
        setCooking: (state, action:PayloadAction<IReadout>) => {
            state.cooking = true
            state.recipes = action.payload.recipes
            state.currentRecipe = 0
        },      
        setTimer: (state, action:PayloadAction<NodeJS.Timer|undefined>) => {
            state.timer = action.payload
        },
        setCurrentRecipe: (state) => {
            if(!!state.recipes && state.currentRecipe === state.recipes?.length -1){
                state.cooking = false
                state.currentRecipe = 0
                state.recipes = undefined
            }
            else if(state.cooking){
                state.currentRecipe = state.currentRecipe + 1
            }
        },      
    },
  })

export const {
    setDrinks,
    setCooking,
    setCurrentRecipe,
    setTimer,
} = appSlice.actions