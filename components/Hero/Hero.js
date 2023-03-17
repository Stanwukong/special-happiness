import React from 'react';

import { Section, SectionText, SectionTitle } from '../GlobalComponents';
import Button from '../GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      Crafting exceptional code <br />
      for remarkable experiences. 
      </SectionTitle>
      <SectionText>
      Building seamless digital experiences with code. Let's create something amazing together and take your online presence to the next level.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;