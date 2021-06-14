import React, { FC, useState } from "react";
import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";

interface RadioGroupsComponentProps {
  handleRadioSelect: (value: number) => void;
}

const RadioGroupsComponent: FC<RadioGroupsComponentProps> = (props) => {
  const [value, setValue] = useState(0);
  const values = Array.from({ length: 10 }, (_, i) => i + 1);

  const { handleRadioSelect } = props;

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let val = parseInt(event.target.value);
    setValue(val);
    handleRadioSelect(val);
  };

  return (
    <RadioGroup
      row
      aria-label="gender"
      name="gender1"
      value={value}
      onChange={handleRadioChange}
    >
      {values.map((v) => (
        <FormControlLabel key={v} value={v} control={<Radio />} label={v} />
      ))}
    </RadioGroup>
  );
};

export default RadioGroupsComponent;
