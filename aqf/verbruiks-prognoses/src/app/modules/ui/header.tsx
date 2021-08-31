import React from 'react';
import { Layout, Row, Col } from 'antd';
import styled from 'styled-components';
import Logo from '../../assets/aquaflanders-logo.png';

const { Header } = Layout;
const StyledMenu = styled(Col)`
  color: #2c45b8;
`;

// const aqfLogo = require('../../assets/aquaflanders-logo.png');

const HeaderMain = () => {

    return (
      <Header style={{ background: '#fff' }}>
        <div className="logo" />
        <Row>
          <Col style={{ textAlign: 'right' }} xs={3} offset={21}>
            English?
          </Col>
        </Row>
        <Row>
          <Col md={24} xl={6}>
            <img src={Logo} alt="" />
          </Col>
          <StyledMenu md={24} xl={3}>Mijn Water</StyledMenu>
          <StyledMenu md={24} xl={3}>Kierungen</StyledMenu>
          <StyledMenu md={24} xl={3}>Opleidingen</StyledMenu>
          <StyledMenu md={24} xl={3}>Standpunten & publicaties</StyledMenu>
          <StyledMenu md={24} xl={3}>Over ons</StyledMenu>
          <StyledMenu xs={1}>|</StyledMenu>
          <StyledMenu md={24} xl={2}>Ledenportaal</StyledMenu>
        </Row>
      </Header>
    );
}

export default HeaderMain;
