import {
  Body,
  Container,
  Head,
  Html, Img,
  Preview,
  Section,
  Text
} from "@react-email/components";
import * as React from "react";
import { formatDateTime } from "@/lib/formatters";

interface NewBookingEmailProps {
  guestName: string;
  guestEmail: string;
  guestNotes: string | null | undefined;
  startTime: Date;
  eventName: string;
}

export const NewBookingEmail = ({
                                  guestName,
                                  guestEmail,
                                  guestNotes,
                                  startTime,
                                  eventName
                                } : NewBookingEmailProps) => {

  return (
    <Html>
      <Head />
      <Preview>{guestName} - {eventName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img src="https://flowcal.it/logo_rounded.png" alt="Logo" style={logo} />
          <Text style={title}>Hai una nuova prenotazione!</Text>

          <Section style={section}>
            <Text style={text}>
              <strong>Nome:</strong> {guestName}
            </Text>
            <Text style={text}>
              <strong>Email:</strong> {guestEmail}
            </Text>
            <Text style={text}>
              <strong>Servizio:</strong> {eventName}
            </Text>
            <Text style={text}>
              <strong>Quando?:</strong> {formatDateTime(startTime)}
            </Text>
            <Text style={text}>
              <strong>Note:</strong> {guestNotes ?? "Nessuna"}
            </Text>
          </Section>

          <Text style={footer}>FlowCal by Matteo Roman</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default NewBookingEmail;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily: "Outfit, sans-serif"
};

const container = {
  maxWidth: "480px",
  margin: "0 auto",
  padding: "10px 0 20px"
};

const title = {
  fontSize: "24px",
  lineHeight: 1.25,
  textAlign: "center" as const
};

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center" as const
};

const text = {
  margin: "0 0 10px 0",
  textAlign: "left" as const
};

const footer = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "50px"
};


const logo = {
  display: "block",
  margin: "0 auto 20px",
  maxWidth: "150px"
};