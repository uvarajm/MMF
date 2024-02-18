import React from 'react';
import MuiTextField from './index'

export default {
  title: 'Textbox',
  component: MuiTextField,
};

const Template = (args) => <MuiTextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '',
  label:'Hello',
  name:"textField",
  onChange: () => {},
};
