import React, { useEffect } from 'react'
import { IReadout } from '../types'
import Readout from './Readout'
import { Col, Row } from 'reactstrap'
import { setCooking, setCurrentRecipe } from '../state/app'
import { useAppDispatch } from '../state'

const Menu:React.FC<{items :IReadout[]}> = ({items}) => {

  const dispatch = useAppDispatch()
  const cookingTime = parseInt(process.env.REACT_APP_COOKING_TIME??'2000')
  let timer = setInterval(startCooking,cookingTime)

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
          timer = setInterval(startCooking,cookingTime)
          dispatch(setCooking(x))
        }}>
                <Readout item={x}/>
        </Col>
    )}
    </Row>
    )
}

export default Menu
