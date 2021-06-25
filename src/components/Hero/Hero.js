import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br /> 
        my personal portfolio!
      </SectionTitle>
      <SectionText>
        I'm passionate about coding and solving problems !
      </SectionText>
      <Button onClick={() => window.open('https://www.linkedin.com/in/thi-nguyen-1310', '_blank')}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;