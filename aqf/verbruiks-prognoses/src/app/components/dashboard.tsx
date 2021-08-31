import React, { useEffect, useState } from 'react';
import { Select, Row, Col } from 'antd';
import styled from 'styled-components';

import Chart from './chart';
import Slides from './chartSlides';

import useAPI from '../hooks/useAPI';

import ChartProps from '../interfaces/ChartInterface';
import { DropdownProps } from '../interfaces/DropdownInterface';
import dropdowns from '../mock/dropdowns';
import graph from '../mock/graph';

const { Option } = Select;

const StyledSelect = styled(Select)`
    width: 400px;
    border: 1px solid #4dafeb;
    border-radius: 5px;
    outline: none;
`;

const StyledHeader = styled.h3`
    color: #2c45b8;
`;

const StyledCol = styled(Col)`
    height: 100px;
`;


const Dashboard = () => {

    const [tmpData, isLoading, error] = useAPI({url: '/api/dropdowns', immediately: true});
    const [dropdownData, setDropdownData] = useState<DropdownProps[]>();
    const [chartData, setChartData] = useState<ChartProps[]>();

    useEffect(() => {
        setDropdownData(dropdowns);
        try {
            if (tmpData) {
              setDropdownData(JSON.parse(JSON.stringify(tmpData)));
            }
          } catch (e) {
              console.log(e);
          }
      }, [tmpData]);
    

    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
            label: 'Sample Data ',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };

    return (
        <div style={{ background: '#f7f7f7', marginBottom: '50px' }}>
            <div style={{ padding: '50px', background: '#ffffff' }}>
                <div style={{ color: '#8f8f91', marginBottom: '50px' }}>
                    <h1 style={{ color: '#2c45b8', fontWeight: 600 }}>Lorem ipsum</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <Row>
                    {dropdownData && dropdownData.map(item => {
                        return (<StyledCol sm={24} md={8}>
                            <StyledHeader>{item.dropdownName}</StyledHeader>
                            <StyledSelect className="dashboardSelect" defaultValue={item.items[0].id} onChange={()=>{}}>
                                {item.items.map((val) => {
                                    return (<Option value={val.id}>{val.value}</Option>
                                )
                            })}
                            </StyledSelect>
                        </StyledCol>)
                    })}
                </Row>
            </div>
            <div>
                <Row>
                    <Col sm={24} md={16}>
                        <Chart data={data} />
                    </Col>
                    <Col sm={24} md={8}>
                        <Slides/>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Dashboard;



