import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { setTotalQuestion } from "../App";

export default function RadioButtonsGroup() {
	const [value, setValue] = useState("20");

	const handleChange = (event) => {
		setValue(event.target.value);
		setTotalQuestion = event.target.value;
	};

	return (
		<FormControl component="fieldset">
			<FormLabel component="legend">Select</FormLabel>
			<RadioGroup
				aria-label="gender"
				name="gender1"
				value={value}
				onChange={handleChange}
			>
				<FormControlLabel value="10" control={<Radio />} label="10" />
				<FormControlLabel value="20" control={<Radio />} label="20" />
				<FormControlLabel value="30" control={<Radio />} label="30" />
			</RadioGroup>
		</FormControl>
	);

	console.log("this is radio", this.props);
}
