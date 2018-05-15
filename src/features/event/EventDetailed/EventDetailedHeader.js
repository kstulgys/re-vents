import React from "react";
import { Segment, Image, Item, Header, Button } from "semantic-ui-react";


const EventDetailedHeader = ({ event }) => (
  <Segment.Group raised>

    <Segment color="orange" attached="top" basic style={{ padding: 0 }}>
      <Image
        style={{ padding: 0, filter: "brightness(50%)" }}
        fluid
        src="https://images.pexels.com/photos/296881/pexels-photo-296881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
      <Segment
        basic
        style={{
          bottom: "5%",
          left: "5%",
          position: "absolute",
          width: "100%",
          height: "auto",
          color: "white"
        }}
      >
        <Item.Group>
          <Item>
            <Item.Content>

              <Header
                size="huge"
                content={event.title}
                style={{ color: "white" }}
              />
              <p>{event.date}</p>
              <p>
                Hosted By <strong>{event.hostedBy}</strong>

              <Header size="huge" content="Hello" style={{ color: "white" }} />
              <p>Event Date</p>
              <p>
                Hosted By <strong>Karolis Stulgys</strong>
              </p>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Segment>

    <Segment attached="bottom">
      <Button>Left </Button>
      <Button color="teal">Left </Button>
      <Button floated="right">Right </Button>
    </Segment>
  </Segment.Group>
);

export default EventDetailedHeader;
