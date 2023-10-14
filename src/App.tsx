import React from 'react'
import './App.css'
import {LemonTea, Coffee, Chocolate} from './types'
import Menu from './components/Menu'
import { RootState } from "./state"
import { useSelector } from "react-redux"
import Readout from './components/Readout'

const App:React.FC = () => {

  const {cooking,recipes,currentRecipe} = useSelector((state:RootState) => state.app)

  return (
    <div className="container">
    {cooking && !!recipes ?
    <div className='readout'>
    <Readout item={recipes[currentRecipe]} />
    </div>
    :
    <Menu items={[LemonTea,Coffee,Chocolate]}/>
    }
    </div>
  )
}

export default App
