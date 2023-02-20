import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import { Container } from 'app/components/common';

const Section = styled.div``;

const SectionHeader = styled.div`
  background-color: ${props => props.theme.mainRed};
  color: white;
  padding: 1em;
  display: flex;
  justify-content: space-between;
`;

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Section>
        <Container>
          <SectionHeader>
            <h2>Logic Pro Lessons</h2>
            <h3>
              Wish you were more comfortable in the DAW? <br />
              Struggling to create a workflow that's right for you?
            </h3>
          </SectionHeader>
          <Container>
            <h3>
              I have over 12 years experience working in Logic Pro. I can share
              the knowledge I’ve uncovered over that time with you and teach you
              how to do things like:
            </h3>
            <p>
              Covering the basics of an efficient workflow Utilizing the many
              powerful software instruments and plugins that come stock with
              Logic “The Art of Punching In” Utilizing advanced features (clip
              editing, freezing, midi control surface setups) Creating a
              template for your hybrid studio setup and other considerations
              Exploring newer Logic features like Live Loops and Quick Sampling
            </p>
          </Container>
        </Container>
      </Section>
    </>
  );
}
