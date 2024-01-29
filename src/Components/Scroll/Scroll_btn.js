import React from "react";
import "./scroll_btn.scss";
import arrow from "../../Assets/svgs/arrow-up-solid.svg";

const Scroll_btn = () => {

  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    var scrollButton = document.getElementById("scrollTop");
    if (
      document.body.scrollTop > 0 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  };

  // Smooth scroll to top when button is clicked
  function scrollToTop() {
    var currentPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (currentPosition > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentPosition - currentPosition / 8);
    }
  }

  return (
    <div>
      <a onClick={scrollToTop} id="scrollTop">
        <img src={arrow} />
      </a>
    </div>
  );
};

export default Scroll_btn;
