import React, { useState, useEffect } from 'react';
import '../App.css';
import Hope from './Hope';

function Countdownlist({ setCountdown }) {
  const [time, setTime] = useState('');
  const [newYear, setNewYear] = useState('New Year');
  const [comingSoon, setComingSoon] = useState('Coming Soon');

  useEffect(() => {
    let countDownDate = new Date('Jan 1, 2022 00:00:00').getTime();
    // update every second
    let x = setInterval(function () {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let second = Math.floor((distance % (1000 * 60)) / 1000);

      setTime(days + 'd ' + hour + 'h ' + minutes + 'm ' + second + 's ');

      if (distance < 0) {
        clearInterval(x);
        setTime(<Hope />);
        setCountdown(true);
        setNewYear('');
        setComingSoon('');
        setTimeout(() => {
          setCountdown(false);
        }, 15000);
      }
    }, 1000);
  }, [setCountdown]);
  return (
    <div className='content'>
      <div className='title'>{newYear}</div>
      <div className='subTitle'>{comingSoon}</div>
      <div>{time}</div>
    </div>
  );
}

export default Countdownlist;
