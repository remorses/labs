import React from 'react';

// import { Toto } from '@sterblue/example-module-react';
const Toto = ()=>(<div>Ok</div>);

export default {
  title: 'Example/Toto',
  component: Toto,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};



export const Test1 = (args) => (<Toto {...args} />);
