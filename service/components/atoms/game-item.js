import React from 'react';
import { Button, GameCountdown } from '..';

export const GameItem = ({
  answer,
  date,
  destination,
  hour,
  onClick,
  setAnswer,
  to,
  video = 'https://player.vimeo.com/video/508834454',
  visible,
}) => {

  return (
    <>
    <div className="event-item" onClick={onClick}>
      <p>{destination}</p>
      <p>{hour}</p>
      <GameCountdown endDate={date} />
    </div>
    {visible && (<div className="quiz">
      <iframe
        allowFullScreen
        className="quiz-video"
        frameBorder="0"
        src={`${video}?autoplay=1&loop=1&title=0&byline=0&muted=true&responsive=true&controls=false&app_id=122963`}
        width="100%"
      ></iframe>
      <div className="answer">
        <input
          onChange={({ target }) => setAnswer(target.value)}
          type="text"
          value={answer}
        />
        <Button
          content="Submit"
          to={to}
        />
      </div>
    </div>)}
    </>
  );
};
