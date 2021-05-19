import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";
import { JsonForms } from "@jsonforms/react";
import ajv from "ajv";

import uiSchema from "./uiSchema";
import dataSchema from "./dataSchema";
import getData from "./getData";

function App() {
  const [data, setData] = useState(getData());
  const [errors, setErrors] =
    useState<ajv.ErrorObject[] | undefined>(undefined);
  return (
    <div style={{ padding: "1rem" }}>
      <Typography variant="h1" style={{ marginBottom: "1rem" }}>
        Demonstration of JSON Forms Performance Issues
      </Typography>
      <div style={{ marginBottom: "1rem" }}>
        <JsonForms
          schema={dataSchema}
          uischema={uiSchema}
          data={data}
          renderers={materialRenderers}
          cells={materialCells}
          onChange={({ errors, data }) => {
            setErrors(errors);
            setData(data);
          }}
        />
      </div>
      <Typography>Is the form valid? {errors ? "No" : "Yes"}</Typography>
    </div>
  );
}

export default App;
