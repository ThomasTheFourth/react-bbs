import React, { useState, useEffect } from "react";
import { Text, Box, Newline } from "ink";
import TextInput from "ink-text-input";

let userName = "";

const welcomeString = "Welcome to the Honeypot BBS";

const Welcome = () => {
	return (
		<>
			<Box
				padding={1}
				borderStyle="round"
				borderColor="green"
				width={welcomeString.length + 4}
			>
				<Text>{welcomeString}</Text>
			</Box>
			<Newline />
			<TextInput
				value={userName}
				onChange={(e) => {
					// console.log(e);
				}}
			/>
		</>
	);
};

export default Welcome;
