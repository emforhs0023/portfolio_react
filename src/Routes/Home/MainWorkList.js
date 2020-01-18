import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
import { Icon } from 'antd';

const Container = styled.div`
	:not(:last-child){margin-bottom:50px;}
`;

const Title = styled.span`
	font-size:14px;
	font-weight:600;
`;

const Grid = styled.div`
	margin-top:25px;
	display: grid;
	grid-template-columns: repeat(4, 31fr);
	grid-gap:25px;
`;

const MainWorkList = () => {

	return (
		<>
			<section role="region" id="works" className="l-section">
	            <div className="l-section-holder">
	                <h2 className="section-heading is-init is-animated" data-animation="fade-up">
	                    <span className="secondary">Portfolio</span>
	                    <span className="primary">My works</span>
	                </h2>
	            </div>
	            <div>
	            	<Container>
	            		<Title>About</Title>
	            		<Grid>a</Grid>
	            	</Container>
				</div>
            </section>	
		</>
	)
}

export default MainWorkList