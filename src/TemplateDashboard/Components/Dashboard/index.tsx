import React from "react";
import {Container, ContentWrapper} from "./style";

function Dashboard(): JSX.Element {
	return (
		<Container>
			<ContentWrapper>
				<h1
					style={{
						fontFamily: 'Ubuntu',
						fontWeight: 'bold',
						fontSize: '32px'
					}}
				>Home</h1>
			</ContentWrapper>
		</Container>
	)
}

export { Dashboard}
