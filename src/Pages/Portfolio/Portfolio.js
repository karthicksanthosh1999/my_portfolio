import React from "react";
import portfolio1 from "../../Assets/portfolios/1.jpg";
import portfolio2 from "../../Assets/portfolios/2.jpg";
import portfolio3 from "../../Assets/portfolios/3.jpg";
import portfolio4 from "../../Assets/portfolios/3.jpg";
import portfolio5 from "../../Assets/portfolios/4.jpg";
import portfolio6 from "../../Assets/portfolios/5.jpg";
import portfolio7 from "../../Assets/portfolios/6.jpg";
import "./portfolio.scss";

const Portfolio = () => {
 

  return (
    <div>
      <div id="portfolio">
        <h3 className="portfolio-heading">Portfolio</h3>
      </div>
      <div className="portfolio-container">
        <img id="myImg" src={portfolio1} alt="porjects" />
        <img id="myImg" src={portfolio2} alt="porjects" />
        <img id="myImg" src={portfolio3} alt="porjects" />
        <img id="myImg" src={portfolio4} alt="porjects" />
        <img id="myImg" src={portfolio5} alt="porjects" />
        <img id="myImg" src={portfolio6} alt="porjects" />
        <img id="myImg" src={portfolio7} alt="porjects" />
      </div>

      <div id="myModal" class="modal">
        <span class="close">&times;</span>
        <img class="modal-content" id="img01" />
        <div id="caption"></div>
      </div>

      
    </div>
  );
};

export default Portfolio;
 