import React from 'react';
import { DiAngularSimple, DiEclipse, DiFirebase, DiNodejs, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I've worked with a range a technologies in the front-end web development world.</SectionText>
    <List>
      <ListItem>
        <DiEclipse size= "3rem" />
        <ListContainer>Eclipse</ListContainer>
        <ListParagraph>
          Amateur experience
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiReact size= "3rem" />
        <ListContainer>ReactJS</ListContainer>
        <ListParagraph>
          Amatuer experience
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiAngularSimple size= "3rem" />
        <ListContainer>Angular</ListContainer>
        <ListParagraph>
          Beginner experience
        </ListParagraph>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;
