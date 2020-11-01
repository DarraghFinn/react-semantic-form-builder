import React, { useCallback } from "react";
import { Form } from "semantic-ui-react";
import _ from "lodash";

export default function FormDisplay({ form = [], mandatoryFields = [], setFormObj, formObj = {}, grouping }) {
  let FormPane = grouping ? Form["Group"] : Form["Field"];

  let handleForm = useCallback(
    (__, { name, value, checked }) => {
      setFormObj({ ...formObj, [name]: value || checked });
    },
    [formObj]
  );

  let getOptions = (array) => {
    if (Array.isArray(array)) {
      return array.some((value) => typeof value == "object")
        ? array.map(({ text }, index) => ({ key: index, text, value: text }))
        : array.map((text, index) => ({ key: index, text, value: text }));
    }
  };

  let renderDropdown = (value, options, multiple) => ({
    multiple,
    options: getOptions(options),
    value: multiple ? _.map(getOptions(value), "text") : value,
    selection: true,
    clearable: true,
    search: true,
  });

  let renderCheckbox = (checked) => ({ checked });

  return (
    <Form size="tiny">
      <FormPane style={grouping ? { flexWrap: "wrap" } : undefined}>
        {form.map(([[name, label], [type, options, multiple], width]) => {
          let FormType = Form[type];
          return (
            <FormType
              key={name}
              label={label || _.startCase(name)}
              width={width}
              error={mandatoryFields.includes(name) && (!formObj[name] || formObj[name].length < 1)}
              name={name}
              placeholder={`Enter ${label || _.startCase(name)}`}
              onChange={handleForm}
              {...(["Checkbox", "Radio"].includes(type) && renderCheckbox(formObj[name]))}
              {...(type === "Select" && renderDropdown(formObj[name], options, multiple))}
            />
          );
        })}
      </FormPane>
    </Form>
  );
}
