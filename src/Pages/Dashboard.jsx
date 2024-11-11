import React from 'react'
import Sidenav from '../Components/Sidenav'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import Slicemobile from '../Slicepages/Slicemobile'
import Slicelaptop from '../Slicepages/Slicelaptop'
import Sliceearbuds from '../Slicepages/Sliceearbuds'
import Slicetvs from '../Slicepages/Slicetvs'

function Dashboard() {
    return (
        <Row>
            <Header />
            <Col sm={2}>
                <Sidenav />
            </Col>
            <Col sm={10}>
                <Slicemobile/>
                <Slicelaptop/>
                <Sliceearbuds/>
                <Slicetvs/>
            </Col>
        </Row>
    )
}

export default Dashboard
