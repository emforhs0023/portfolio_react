import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import backLogo from '../../assets/backLogo.png'
import logo from '../../assets/logo2.png'

const MainHeader = () => {

	const Logo = styled.img`
    	float:left;
    
	`;

	const Image = styled.div`
		background-image: url(${props => props.bgUrl});
	    background-size: 100% 100%;
	`;

	return (
		<>
			<Image bgUrl={backLogo}>
        		<div id= "asdfasf" style={{height:"500px", position:"relative", margin: "0 auto"}}>
            		<div>
            			<Fade bottom>    
							<Logo src={logo} style={{width:"50%", marginTop: "114px", position: "absolute", left: "230px"}} />
			            </Fade>
            		</div>
          		</div>   
        	</Image>
		</>
	)
}

export default MainHeader