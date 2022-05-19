import React, { useState, useEffect } from "react";
import { render, Static, Box, Text } from "ink";
import Welcome from "./screens/Welcome";

const BBS = () => {
	const [route, setRoute] = useState("welcome");

	return (
		<>
			<Welcome />
		</>
	);
};

render(<BBS />);
