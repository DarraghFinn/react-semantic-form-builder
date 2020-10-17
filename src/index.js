import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import 'semantic-ui-less/semantic.less';

ReactDOM.render(
<Form size="tiny">
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>,
document.getElementById('root'),
);
