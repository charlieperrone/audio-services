import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import headshot from '../../../assets/images/headshot.jpg';
import studio from '../../../assets/images/stock-studio.jpg';
import logic from '../../../assets/images/logic.jpeg';

import {
  BorderedImage,
  Column,
  Container,
  Grid,
  Header,
  HeadlineH2,
  HeadlineH3,
  ViewportContainer,
} from 'app/components/common';
import Footer from 'app/components/Footer';
import { ContactUs } from 'app/components/Contact';

type VALID_COLOR = 'mainRed';

const Section = styled.div<{ color?: VALID_COLOR }>`
  /* enforce the type of prop 'color' to be of VALID_COLOR and pass into main theme provider, default to white */
  background-color: ${props =>
    props.color ? props.theme[props.color] : 'white'};
`;

const SectionHeader = styled(Header)`
  background-color: ${props => props.theme.mainRed};
  color: white;
`;

const FullwidthImage = styled.img`
  object-fit: cover;
  width: 100%;
`;

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Section>
        <ViewportContainer>
          <FullwidthImage src={studio} />
        </ViewportContainer>
        <Container>
          <SectionHeader id="consulting">
            <HeadlineH2>Home Studio Consultations</HeadlineH2>
            <HeadlineH3>
              How do you begin building a small home recording setup?
            </HeadlineH3>
          </SectionHeader>
          <Grid>
            <Column width="1">
              <BorderedImage src={headshot} alt="react logo" />
            </Column>
            <Column width="2" style={{ padding: '0 3em' }}>
              <p>
                I'm a devoted home recordist with 12 years experience building
                small studio setups. I believe there are significant benefits to
                giving consideration to the workflows that your setup implies,
                identifying aspects of your setup that are slowing you down or
                causing you to execute repetitive tasks, or how your setup may
                be restricting your ability to produce the music that you really
                want to be making. I’m offering consultations in which I will
                evaluate your space, needs and budget. We’ll go over some of the
                core concepts that will be useful to you. With enough
                understanding of these concepts, we can begin to see the studio
                as an ecosystem of various parts that feed into and support one
                another. Finally, I’ll present some specific studio layouts for
                you to consider. This will include gear lists as well as
                suggested placement of equipment for the best results. Below are
                some of the topics we’ll be covering in our time together:
              </p>
              <h3>We'll Cover:</h3>
              <ul>
                <li>Cabling and Signal Flow</li>
                <li>Choosing the right gear</li>
                <li>Audio Interfaces</li>
                <li>Managing varying audio levels</li>
                <li>Enabling Multitrack recording</li>
                <li>Monitoring</li>
                <li>Creating connectivity</li>
                <li>Uses of mixers, patch bays and matrix</li>
                <li>
                  Pedals, Synths and how to integrate them into your studio as
                  sound design tools
                </li>
                <li>Midi Controllers, Sequencing and CC</li>
              </ul>
            </Column>
          </Grid>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeader id="consulting">
            <HeadlineH2>Logic Pro Lessons</HeadlineH2>
            <HeadlineH3>
              How do you begin building a small home recording setup?
            </HeadlineH3>
          </SectionHeader>
          <Grid>
            <Column width="1">
              <BorderedImage src={logic} alt="react logo" />
            </Column>
            <Column width="2" style={{ padding: '0 3em' }}>
              <p>
                I'm a devoted home recordist with 12 years experience building
                small studio setups. I believe there are significant benefits to
                giving consideration to the workflows that your setup implies,
                identifying aspects of your setup that are slowing you down or
                causing you to execute repetitive tasks, or how your setup may
                be restricting your ability to produce the music that you really
                want to be making. I’m offering consultations in which I will
                evaluate your space, needs and budget. We’ll go over some of the
                core concepts that will be useful to you. With enough
                understanding of these concepts, we can begin to see the studio
                as an ecosystem of various parts that feed into and support one
                another. Finally, I’ll present some specific studio layouts for
                you to consider. This will include gear lists as well as
                suggested placement of equipment for the best results. Below are
                some of the topics we’ll be covering in our time together:
              </p>
              <h3>We'll Cover:</h3>
              <ul>
                <li>Cabling and Signal Flow</li>
                <li>Choosing the right gear</li>
                <li>Audio Interfaces</li>
                <li>Managing varying audio levels</li>
                <li>Enabling Multitrack recording</li>
                <li>Monitoring</li>
                <li>Creating connectivity</li>
                <li>Uses of mixers, patch bays and matrix</li>
                <li>
                  Pedals, Synths and how to integrate them into your studio as
                  sound design tools
                </li>
                <li>Midi Controllers, Sequencing and CC</li>
              </ul>
            </Column>
          </Grid>
        </Container>
      </Section>
      <Footer />
    </>
  );
}
