import React from 'react'
import { Card, Col } from 'react-bootstrap'

const WorkTime = () => {
    return (
        <Col>
            <Card className="bg-info">
              <Card.Body className="my-1 text-white">
                <Card.Title>WORKING TIME</Card.Title>
                <Card.Text>
                  Porta semper lacus cursus, feugiat primis ultrice ligula risus
                  auctor at tempus feugiat dolor lacinia cursus nulla vitae
                  massa
                </Card.Text>
                <div className="my-4 d-flex justify-content-between  py-2 border-bottom border-1">
                  <div>Mon – Wed</div>
                  <div>9:00 AM - 7:00 PM</div>
                </div>
                <div className="my-4 d-flex justify-content-between  py-2 border-bottom border-1">
                  <div>Thursday</div>
                  <div>9:00 AM - 6:30 PM</div>
                </div>
                <div className="my-4 d-flex justify-content-between  py-2 border-bottom border-1">
                  <div>Friday</div>
                  <div>9:00 AM - 6:00 PM</div>
                </div>
                <div className="my-4 d-flex justify-content-between  py-2 border-bottom border-1">
                  <div>Sun - Sun</div>
                  <div>Closed</div>
                </div>
              </Card.Body>
            </Card>
          </Col>
    )
}

export default WorkTime
