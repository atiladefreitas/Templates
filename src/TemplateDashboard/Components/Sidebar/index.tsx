import React from "react";
import {Container, LogoContainer} from "./style";
import {Option} from "./Components/Options";

function Sidebar(): JSX.Element {
	return (
		<Container >
			<LogoContainer />
			<Option />
		</Container>
	)
}

export {Sidebar}
