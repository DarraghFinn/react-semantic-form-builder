import React, { memo } from "react";
import FormDisplay from "./FormDisplay";
import "semantic-ui-less/semantic.less";

const BuildForm = memo(({ form, mandatoryFields, setFormObj, formObj, grouping }) => {
  return (
    <FormDisplay
      form={form}
      mandatoryFields={mandatoryFields}
      setFormObj={setFormObj}
      formObj={formObj}
      grouping={grouping}
    />
  );
});

export default BuildForm;
