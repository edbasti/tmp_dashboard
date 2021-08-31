import React from 'react';
import { Line } from 'react-chartjs-2';
import { Row, Col, Button } from 'antd';
import styled from 'styled-components';
import { ArrowDownOutlined } from '@ant-design/icons'

import ChartInterface from '../interfaces/ChartInterface';

const StyledButton = styled(Button)`
  color: #2f48b1;
  border: none;
  background-color: #ffffff;
  padding: 11px 8px 18px 8px;
  width: 160px;
  font-size: 12px;
`;
const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

interface DataProps {
    data: ChartInterface;
}

const Chart: React.FC<DataProps> = ({ data }: DataProps) => (
  <>
    <Row>
      <Col xs={24}>
        <Line data={data} options={options} />
      </Col>
    </Row>
    <Row>
      <Col xs={3} offset={20}>
        <StyledButton type="ghost">
          <ArrowDownOutlined />Download to Excel
        </StyledButton>
      </Col>
    </Row>
  </>
);

export default Chart;