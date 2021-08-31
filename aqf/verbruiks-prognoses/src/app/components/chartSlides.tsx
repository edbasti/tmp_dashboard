import React from 'react';
import { Slider, Button } from 'antd';
import { ReloadOutlined } from '@ant-design/icons'
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: #49abea;
    height: auto;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    h1 {
        color: #ffffff
    }
    width: 100%;
    margin-left: 20px;
`;

const StyledButton = styled(Button)`
    width: 100%;
    height: 50px;
    margin-top: 50px;
`;

const StyledSlideDiv = styled.div`
    line-height: 40px;
    margin-bottom: 37px;
    text-align: left;
`;

const SlideItemDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Slides = () => {

    return (
        <StyledDiv>
            <h1>Relative invloed variabelen</h1>
            <StyledSlideDiv>
                <SlideItemDiv>
                    <div>
                        Aantal EWW
                    </div>
                    <ul>
                        <li>0.93</li>
                    </ul>
                </SlideItemDiv>
                <Slider/>
            </StyledSlideDiv>
            <StyledSlideDiv>
                <SlideItemDiv>
                    <div>
                        Temperatuur
                    </div>
                    <div>
                        <ul>
                            <li>0.82</li>
                        </ul>
                    </div>
                </SlideItemDiv>
                <Slider min={-10} max={40} />
            </StyledSlideDiv>
            <StyledSlideDiv>
                <p>Neerslag</p>
                <Slider />
            </StyledSlideDiv>
            <StyledButton type="primary">
                <ReloadOutlined />Simulate
            </StyledButton>
        </StyledDiv>
    );
}

export default Slides;



