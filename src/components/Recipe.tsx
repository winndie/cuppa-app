import React from 'react'
import { IReadout } from '../types'
import { Col, Row } from 'reactstrap'

const Recipe: React.FC<{ items: IReadout[] }> = ({ items }) => {
    return (
        <Row xs={items.length} className='align-middle'>
            {items.map(x =>
                <Col className="bg-light border">
                </Col>
            )}
        </Row>
    )
}

export default Recipe
