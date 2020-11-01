# React-Semantic-Form-Builder

Component Using Semantic UI To Easily Build Forms On Your Application
Features Include:

- Quickly Add Different Form Types To Your Application such as Dropdowns, Input, Checkboxes & Text Areas

<b>Demo:</b> https://react-semantic-form-builder.netlify.app/

## Installation

```bash
npm install react-semantic-form-builder --save
```

## Props

| Prop            | Description                                                                                                                    | Type     |  
| --------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------- | 
| `form`  | Used To Draw Custom Forms                                                                                                    | array   |                                                                                                                                                                                    |
| `mandatoryFields`      | Fields which will be highlighted in red if not set                                                                                           | array  |                                                                                                                                                                                        |
| `setFormObj`      | Function to update your form object                                                                                                | function  |                                                                                                                                                                                        |
| `formObj`        | Form object                                                                           | object  |                                                                                                                                                                                          |
| `grouping` | Whether form should be grouped inline or on separate lines                                                                                                     | boolean   |

## Example

```jsx
import React, { useState } from "react";
import FormDisplay from "react-semantic-form-builder;
import ReactDOM from "react-dom";

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
      //[['name', 'label'],['formType', optionsForDropdown, multipleValues], width(4=25% + 16=100%)]
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
```
