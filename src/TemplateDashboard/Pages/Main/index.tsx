import React from "react";
import { Sidebar } from "../../Components/Sidebar";
import {Container} from './style'
import {Dashboard} from "../../Components/Dashboard";

function Main(): JSX.Element {
	return (
		<Container>
			<Sidebar />
			<Dashboard />
		</Container>
	)
}

export { Main }
