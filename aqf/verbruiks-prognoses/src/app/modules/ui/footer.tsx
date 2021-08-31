import React from 'react';
import styled from 'styled-components';

import { Layout } from 'antd';

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
    background-color: #2f48b1;
`;

const FooterMain = () => {

    return (
        <StyledFooter/>
    );
}

export default FooterMain;
