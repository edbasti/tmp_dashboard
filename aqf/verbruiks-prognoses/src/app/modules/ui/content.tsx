import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

type Props = { children: React.ReactNode };

const ContentEl: React.FC<Props> = ({ children }) => {

    return (
        <Content style={{ marginTop: '140px', color: '#ffffff' }}>
            {children}
        </Content>
    );
}

export default ContentEl;
