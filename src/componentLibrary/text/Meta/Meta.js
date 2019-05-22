import React from 'react';
import { Text } from 'rebass';

const Meta = props => (
  <Text
    fontFamily="default"
    fontSize={0}
    fontWeight="bold"
    letterSpacing={1}
    {...props}
    css={{
      textTransform: 'uppercase',
    }}
  />
);

export default Meta;
