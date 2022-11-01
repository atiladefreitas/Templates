import React from "react";
import {FaHome} from "react-icons/fa";
import {Container} from "./style";

function Option(): JSX.Element {
	return (
		<Container>
			<aside style={{
				width: '5px',
				height: '100%',
				backgroundColor: '#DDE2FF',
			}}/>
			<FaHome
				style={{
					width: '25px',
					height: '25px',
					paddingLeft: '20px',
					color: '#DDE2FF',
				}}
			/>
			<h1
				style={{
					paddingLeft: '15px',
					color: '#DDE2FF',
					fontFamily: 'Ubuntu',
					fontWeight: 'normal'
				}}
			>Home</h1>
		</Container>
	)
}

export {Option}
