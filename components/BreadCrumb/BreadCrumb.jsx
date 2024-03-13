import React from 'react'
import { Row, Col, Breadcrumb, BreadcrumbItem,Container } from 'reactstrap';


const BreadCrumbComponent = () => {
    return (
        <div>
            <Container>
            <div className='aboutBreadCrumb'>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <a href="/">
                            Home
                        </a>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Component overview
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            </Container>
        </div>
    )
}

export default BreadCrumbComponent