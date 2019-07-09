import React from 'react';

import { Button } from '../../componentLibrary/button';
import { Heading, Paragraph } from '../../componentLibrary/text';

import { Fieldset, Input, Label, Matrix,  MultiChoice, Section, Textarea, Wrapper } from './components/';

export default () => (
  <Wrapper>
    <Section noBorder>
      <Heading>This is a mobile form.</Heading>
    </Section>
    <Section
      headingText="Instructions"
      headingIcon="info"
    >
      <Paragraph>Some posit the adored timbale to be less than scrambled. A kindly pencil without minds is truly a earthquake of bragging beetles. Those estimates are nothing more than revolvers. A machine sees a battle as a centrist command.</Paragraph>
    </Section>

    <Section
      headingText="Details"
      headingIcon="user"
      subtitle="> 1 min"
    >
      <Fieldset>
        <Label>First Name</Label>
        <Input />
      </Fieldset>
      <Fieldset>
        <Label>Last Name</Label>
        <Input />
      </Fieldset>
    </Section>

    <Section
      headingText="Bio"
      headingIcon="books"
      subtitle="4 min"
    >
      <Fieldset>
        <Label>Where you at?</Label>
        <Textarea />
      </Fieldset>
    </Section>
    <Section
      headingText="Make some Choices"
      headingIcon="list-alt"
      subtitle="2 min"
    >
      <Fieldset>
        <Label>What is your preference?</Label>
        <MultiChoice
          choices={['PB&J', 'Turkey Club', 'Chicken Salad', 'Falafel']}
          name="sandwiches"
         />
      </Fieldset>
      <Fieldset>
        <Label>Who rules the world?</Label>
        <MultiChoice
          choices={['Girls']}
          name="worldRuler"
        />
      </Fieldset>
    </Section>
    <Section
      headingText="Rate some options"
      headingIcon="shapes"
      subtitle="6 min"
    >
      <Fieldset>
        <Label>What is your preference?</Label>
        <Matrix
          choices={['PB&J', 'Turkey Club', 'Chicken Salad', 'Falafel']}
          rubric={["Hate", "Dislike", "Neutral", "Like", "Love"]}
          name="other-sandwiches"
         />
      </Fieldset>
      <Fieldset>
        <Label>Who rules the world?</Label>
        <Matrix
          choices={['Girls']}
          rubric={["Yes", "No"]}
          name="worldRuler-again"
        />
      </Fieldset>
    </Section>
    <Section noBorder>
      <Button
        block
        mt={5}
        style={{padding: 20}}
      >
        Submit
      </Button>
    </Section>
  </Wrapper>
);