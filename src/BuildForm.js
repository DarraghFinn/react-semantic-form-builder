import React, { useState } from "react";
import FormDisplay from "./FormDisplay";
import ReactDOM from "react-dom";
import "semantic-ui-less/semantic.less";

export default function BuildForm() {
  let [value, setValue] = useState({});

  let options = [
    { text: "1", value: 1 },
    { text: "2", value: 2 },
    { text: "3", value: 3 },
    { text: "4", value: 4 },
  ];

  console.log(value);

  return (
    <FormDisplay
      form={[
        [["multipleDropdown"], ["Select", options, true], 4],
        [["input"], ["Input"], 4],
        [["singleDropdown"], ["Select", options], 4],
        [["textArea"], ["TextArea"], 4],
        [["grouping", "Set Grouping On Form"], ["Checkbox"], 4],
        [["checkbox", "Standard Checkbox"], ["Checkbox"], 4],
      ]}
      mandatoryFields={["input", "singleDropdown", "checkbox"]}
      setFormObj={setValue}
      formObj={value}
      grouping={value.grouping}
    />
  );
}
ReactDOM.render(<BuildForm />, document.getElementById("root"));
