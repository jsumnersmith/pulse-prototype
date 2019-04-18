import React from 'react';
import { Text } from 'rebass';

const Paragraph = props => (
  <Text
    as="p"
    color="grayDark"
    fontFamily="default"
    fontSize={2}
    fontWeight="light"
    lineHeight={1}
    m={0}
    {...props}
  />
);

export default Paragraph;
