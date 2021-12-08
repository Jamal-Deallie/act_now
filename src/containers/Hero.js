import React from 'react';
import styled from 'styled-components';
import { Button } from '../components';

export default function HeroContainer() {
  return (
    <MainContainer>
      <FlexContainer>
        <HeroImage src='images/jaguar.png' alt='' />
        <Title>Act Now</Title>
        <Details>
          With only around 100 adults left in the wild, the Amur leopard could
          be the most endangered big cat on Earth
        </Details>
        <CTAButton>Learn More</CTAButton>
      </FlexContainer>
    </MainContainer>
  );
}

const MainContainer = styled.main`
  background-color: ${props => props.theme.variant.primary};
  height: 100vh;
  width: 100%;
`;

const FlexContainer = styled.div``;
const Title = styled.h1`
  font-family: ${props => props.theme.font.family.mainFont};
  color: ${props => props.theme.font.color.secondaryColor};
  font-size: ${props => props.theme.font.size.heading1};
`;
const Details = styled.p`
  color: ${props => props.theme.font.color.tertiaryColor};
  font-size: ${props => props.theme.font.size.heading5};
  /* text-align: center; */
  line-height: 1.6;
`;

const CTAButton = styled(Button)`
  background-color: ${props => props.theme.variant.secondary};
  color: ${props => props.theme.font.color.tertiaryColor};
`;

const HeroImage = styled.img``;
