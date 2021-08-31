import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

import Dashboard from './dashboard';
import { ContentEl as Content, FooterEl as Footer, HeaderEl as Header } from '../modules/ui';


const StyledBody = styled(Layout)`
  body {
    color: #ffffff;  
  }
`;

const LayoutEl = () => {

    return (
        <StyledBody>
          <Header/>
          <Content>
            <Dashboard/>
          </Content>
          <Footer/>
        </StyledBody>
    );
}

export default LayoutEl;
