import React, { useState, useEffect } from "react";
import '../App.css'

function Countdownlist({ setCountdown }) {
  const [time, setTime] = useState("");
  useEffect(() => {
    let countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();
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

      setTime(days + "d " + hour + "h " + minutes + "m " + second + "s ");

      if (distance < 0) {
        clearInterval(x);
        setTime("Happy New Year 2022!");
        setCountdown(true);
        setTimeout(() => {
          setCountdown(false);
        }, 15000);
      }
    }, 1000);
  }, []);
  return (
    <div className="content">
      <div className="title">New Year</div>
      <div className="subTitle">Coming Soon</div>
      <div>{time}</div>
    </div>
  );
}

export default Countdownlist;
