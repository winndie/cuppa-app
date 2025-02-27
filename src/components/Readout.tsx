import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'
import { IReadout } from '../types'
import { Spinner } from 'reactstrap'

const Readout: React.FC<{ item: IReadout }> = ({ item }) => {

    const [base64, setBase64] = useState<string | null>(null);

    useEffect(() => {
        fetch(window.location + item.imageUrl)
            .then((response) => response.text())
            .then((svgData) => {
                const base64String = btoa(unescape(encodeURIComponent(svgData)))
                setBase64(`data:image/svg+xml;base64,${base64String}`)
            })
    }, [item])

    return (
        base64 ?
            <Card className='text-center'>
                <img src={window.location + item.imageUrl} alt={window.location + item.imageUrl} width='400px' height='400px' />
                <CardBody>
                    <CardTitle tag="h5">
                        {item.name}
                    </CardTitle>
                </CardBody>
            </Card>
            : <Spinner />
    )
}

export default Readout
