import React, { useEffect } from 'react'
import { IReadout } from '../types'
import Readout from './Readout'
import { Col, Row } from 'reactstrap'
import { setCooking, setCurrentRecipe,setTimer } from '../state/app'
import { RootState, useAppDispatch } from '../state'
import { useSelector } from 'react-redux'

const Menu:React.FC<{items :IReadout[]}> = ({items}) => {

  const dispatch = useAppDispatch()
  const cookingTime = parseInt(process.env.REACT_APP_COOKING_TIME??'2000')
  const {timer} = useSelector((state:RootState) => state.app)

  function startCooking()
  {
    dispatch(setCurrentRecipe())
  }

  useEffect(()=>{
    clearInterval(timer)
  },[dispatch])

  return (
    <Row xs={items.length} className='menu'>
    {items.map((x,i) => 
        <Col key={i} className="bg-light border" onClick={()=>{
          const newTimer = setInterval(startCooking,cookingTime)
          dispatch(setTimer(newTimer))
          dispatch(setCooking(x))
        }}>
                <Readout item={x}/>
        </Col>
    )}
    </Row>
    )
}

export default Menu
