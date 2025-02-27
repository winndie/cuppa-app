import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'
import { IReadout } from '../types'
import { Spinner } from 'reactstrap'

const Readout: React.FC<{ item: IReadout }> = ({ item }) => {

    const [url, setUrl] = useState<string | null>(null);

    useEffect(() => {
        fetch(item.imageUrl)
            .then((response) => response.text())
            .then((data) => setUrl(data))
    }, [item])

    return (
        !url ? <Spinner /> :
        <Card className='text-center'>
                <span dangerouslySetInnerHTML={{ __html: url }} className='img-readout' />
            <CardBody>
                <CardTitle tag="h5">
                    {item.name}
                </CardTitle>
            </CardBody>
        </Card>
    )
}

export default Readout
