import storeItems from "../data/items.json"
import { Col, Row } from 'react-bootstrap'
import { StoreItems } from "../components/StoreItems"

export function Store(){
    return <>
    <h1>Store</h1>
    <Row md={2} xs={1} lg={3}>
        {storeItems.map(item=>(
            <Col key={item.id}>
                <StoreItems{...item} />
            </Col>
        ))}
    </Row>
    </>
}