import React from "react";
import { Card, Row, Col } from "antd";
const { Meta } = Card;

export default function index(props) {
  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={props.title} src={props.src} />}
      >
        <Meta title={props.title} description={props.description} />
        <Row>
          <Col span={24}>
            <h4>Precio: {props.costo} </h4>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <h4>{props.title}</h4>
          </Col>
        </Row>
      </Card>
    </>
  );
}
