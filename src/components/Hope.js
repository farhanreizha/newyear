import React, { Component } from "react";
import { init } from "ityped";
import "../App.css";

export default class Hope extends Component {
  componentDidMount() {
    const element = document.querySelector(".hope");
    init(element, {
      showCursor: false,
      loop: false,
      backDelay: 2000,
      strings: [
        "Happy New Year 2023!",
        "Hi semua, engga kerasa udah tahun 2023 lagi aja.",
        "Mari kita awali dengan Do'a.",
        "Alhamdulillah kita masih diberikan umur oleh Allah subhanahu wa ta'ala untuk menginjak tahun baru.",
        "Bersyukurlah bagi mereka yang saat ini masih tetap diberi kesehatan.",
        "Terimakasih.",
      ],
    });
    const by = document.querySelector(".by");
    init(by, {
      showCursor: false,
      loop: false,
      strings: ["- Farhan Reizha Fauzan -"],
    });
  }
  render() {
    return (
      <>
        <div className="hope"></div>
        <div className="text by"></div>
      </>
    );
  }
}
