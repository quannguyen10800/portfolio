import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding> 
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        my personal portfolio
      </SectionTitle>
      <SectionText >
      I am a third-year student in CS from Concordia University (Montreal, Quebec, Canada) with an interest in the foundation of programming and algorithm. I have experience in Java 8 and 11, Javascript with React. I also know a bit of Angular (10) with Typescript. As you can see, this portfolio is developed by using React (Javascript) and thanks to Github pages, I can host it for free.
I also enjoy working in PHP 7 and WordPress 4 and above, to develop professional websites, integrating some WordPress and WooCommerce plugins, together with MySQL, CSS3, HTML5, and Javascript.
      </SectionText>
      <Button onClick ={() => window.location = 'https://google.com'} >
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;