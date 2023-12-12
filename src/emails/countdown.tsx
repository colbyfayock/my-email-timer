import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from '@react-email/components';
import * as React from 'react';

export const HolidayEmail = () => (
  <Html>
    <Head />
    <Preview>
      Making my list and checking it twice!
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={paragraph}>
          Ho Ho Ho!
        </Text>
        <Text style={paragraph}>
          The elves and I have been preparing for an extra special holiday
          this year. We&apos;re looking forward to delivering presents to you
          and all of the children around the world.
        </Text>
        <Text style={paragraph}>
          Happy holidays,
          <br />
          Santa Claus
        </Text>
        <Hr style={hr} />
        <Text style={footer}>123 Elf Road North Pole, 88888</Text>
      </Container>
    </Body>
  </Html>
);

export default HolidayEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};
