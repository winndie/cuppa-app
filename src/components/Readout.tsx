import React from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'
import { IReadout } from '../types'

const Readout: React.FC<{ item: IReadout }> = ({ item }) => {

    return (
        <Card className='text-center'>
            <item.image className='img-readout' />
            <CardBody>
                <CardTitle tag="h5">
                    {item.name}
                </CardTitle>
            </CardBody>
        </Card>
    )
}

export default Readout
