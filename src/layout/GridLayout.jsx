import React from "react";
import { Col, Row, Divider } from "antd";

const GridLayout = () => {
  return (
    <>
      {/* fluid-layout : .fluid 클래스 추가 */}
      <div className="wrap">
        <Row gutter={8}>
          <Col xl={24} lg={6} span={12}>
            <div style={{ height: "100px", background: "skyblue" }}>A111</div>
          </Col>
          <Col span={12} lg={6} xl={24}>
            <div style={{ height: "100px", background: "coral" }}>A222</div>
          </Col>
        </Row>
        <Divider></Divider>
        <Row gutter={[8, 15, 20]}>
          <Col xs={24} sm={8} xl={8}>
            <div style={{ height: "100px", background: "skyblue" }}>B111</div>
          </Col>
          <Col xs={24} sm={8} xl={12}>
            <div style={{ height: "100px", background: "coral" }}>B222</div>
          </Col>
          <Col xs={24} sm={8} xl={4}>
            <div style={{ height: "100px", background: "lightgray" }}>B333</div>
          </Col>
        </Row>
        <Divider></Divider>
        <Row gutter={[8, 10]}>
          <Col xs={24} sm={12} md={8} lg={6} xl={10}>
            <div style={{ height: "100px", background: "skyblue" }}>col</div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={12}>
            <div style={{ height: "100px", background: "coral" }}>col</div>
          </Col>
        </Row>
        <Divider></Divider>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={12}>
            <div style={{ height: "100px", background: "skyblue" }}>col</div>
          </Col>
          <Col span={12}>
            <div style={{ height: "100px", background: "coral" }}>col</div>
          </Col>
        </Row>
        <Divider></Divider>
        <Row>
          <Col flex={3}>
            <div style={{ height: "100px", background: "skyblue" }}>3/5</div>
          </Col>
          <Col flex={2}>
            <div style={{ height: "100px", background: "coral" }}>2/5</div>
          </Col>
        </Row>
        <Divider></Divider>
        <Row>
          <Col span={20} offset={6}>
            <div style={{ height: "100px", background: "skyblue" }}>
              col-6 col-offset-6
            </div>
          </Col>
          <Col span={6} offset={6}>
            <div style={{ height: "100px", background: "coral" }}>
              col-6 col-offset-6
            </div>
          </Col>
        </Row>
        <Divider></Divider>
        <Row>
          <Col span={18} push={6}>
            <div style={{ height: "100px", background: "skyblue" }}>
              col-18 col-push-6
            </div>
          </Col>
          <Col span={6} pull={18}>
            <div style={{ height: "100px", background: "coral" }}>
              col-6 col-pull-18
            </div>
          </Col>
        </Row>
        <Divider></Divider>
        <Row justify="space-between" align="top">
          <Col span={4}>
            <div style={{ height: "100px", background: "skyblue" }}>col</div>
          </Col>
          <Col span={4}>
            <div style={{ height: "200px", background: "coral" }}>col</div>
          </Col>
          <Col span={4}>
            <div style={{ height: "100px", background: "skyblue" }}>col</div>
          </Col>
          <Col span={4}>
            <div style={{ height: "200px", background: "coral" }}>col</div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default GridLayout;
