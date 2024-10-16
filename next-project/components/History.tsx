import React, { Fragment } from "react";
import { Reveal } from "./animations/Reveal";

interface Event {
  heading: string;
  subHeading: string;
  direction: string;
}

interface Props {
  events: Event[];
}

const History: React.FC<Props> = ({ events }) => {
  return (
    <div className="flex flex-col gap-y-3 w-full my-4">
      <Circle />
      {events.map((event, key) => (
        <Fragment key={key}>
          <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
            {event.direction === "left" ? (
              <EventCard heading={event.heading} subHeading={event.subHeading} />
            ) : (
              <div></div>
            )}

            <Pillar />

            {event.direction === "right" ? (
              <EventCard heading={event.heading} subHeading={event.subHeading} />
            ) : (
              <div></div>
            )}
          </div>
          {key < events.length - 1 && <Circle />}
        </Fragment>
      ))}
      <Circle />
    </div>
  );
};

const Circle = () => {
  return <div className="rounded-full w-4 h-4 bg-purple-500 mx-auto"></div>;
};

const Pillar = () => {
  return <div className="rounded-t-full rounded-b-full h-full w-2 mx-auto bg-gradient-to-b from-purple-500 to-purple-800"></div>;
};

interface EventCardProps {
  heading: string;
  subHeading: string;
}

const EventCard: React.FC<EventCardProps> = ({ heading, subHeading }) => {
  return (
    <Reveal><div className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl shadow-purple-500 shadow-x-1 flex flex-col gap-y-2 border border-purple-500 shadow-md rounded-xl p-4">
    <div className="text-purple-500 font-bold text-lg border-b">{heading}</div>
  <div className="text-sm text-gray-300">{subHeading}</div>

  </div></Reveal>
    
  );
};

export default History;
