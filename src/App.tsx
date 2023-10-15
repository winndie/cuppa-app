import React, { useEffect } from 'react'
import './App.css'
import Menu from './components/Menu'
import { RootState, useAppDispatch } from "./state"
import { useSelector } from "react-redux"
import Readout from './components/Readout'
import { setDrinks } from './state/app'
import { Spinner } from 'reactstrap'

const App:React.FC = () => {

  const dispatch = useAppDispatch()
  const {cooking,drinks,recipes,currentRecipe} = useSelector((state:RootState) => state.app)

  useEffect(()=>{
    dispatch(setDrinks())
  },[dispatch])

  return (
    !!drinks?
    <div className="container">
    {cooking && !!recipes ?
      <div className='readout'>
        <Readout item={recipes[currentRecipe]} />
      </div>
    :
      <Menu items={drinks}/>
    }
    </div>
    :<Spinner/>
  )
}

export default App
