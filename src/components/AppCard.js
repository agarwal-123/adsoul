import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  background-color: white;
  // width: 100%;
  margin: 10px 0;
  padding: 25px;
  @media only screen and (max-width: 410px) {
    padding:25px 15px;
  }
  
  border: 1px solid #f4f1f1;
  border-radius: 4px;
  .square {
    height: 50px;
    width: 50px;
    border-radius: 4px;
    margin-right: 15px;
  }

  .color1 {
    background-color: #ef7854;
  }
  .color2 {
    background-color: #7164ff;
  }
  .color3 {
    background-color: #60c940;
  }
  .top,
  .bottom {
    display: flex;
    width: 100%;
  }
  .top {
    margin-bottom: 25px;
  }
  .start {
    display: flex;
  }
  .end {
    margin-left: auto;
  }
  .nameSection,
  .stats-block {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-evenly;
  }

  .stats-block {
    margin-right: 40px;
    @media only screen and (max-width: 580px) {
      margin-right: 25px;
    }
    @media only screen and (max-width: 510px) {
      margin-right: 20px;
    }
  }

  .square-heading {
    font-size: 22px;
    align-items: baseline;
    @media only screen and (max-width: 410px) {
      font-size: 20px;
    }
  }
  .square-subheading {
    font-size: 14px;
  }
  .subheading {
    font-size: 12px;
  }
  .grey {
    color: grey;
  }
`;

export default function appCard({ setActiveApp, appData, stats }) {
  function nFormatter(num) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num;
  }

  let { revenue, adRequest, adResponse, impressions } = stats;

  return (
    <Wrapper>
      <div className="top">
        <div className="start">
          <div className={`square color${Math.floor(Math.random()*3)+1}`}></div>
          <div className="nameSection">
            <div className="square-heading tc-1">{appData.appName}</div>
            <div className="square-subheading grey">
              {appData.publisherName}
            </div>
          </div>
        </div>
        <div className="end" onClick={() => setActiveApp(appData.id)}>
          <img
            src="assets/right-arrow.svg"
            style={{ width: "20px", cursor: "pointer" }}
          />
        </div>
      </div>
      <div className="bottom">
        <div className="stats-block">
          <div className="subheading"> Revenue</div>
          <div className="square-heading">${nFormatter(revenue)}</div>
        </div>
        <div className="stats-block">
          <div className="subheading"> Ad Requests</div>
          <div className="square-heading">{nFormatter(adRequest)}</div>
        </div>
        <div className="stats-block">
          <div className="subheading"> Ad Response</div>
          <div className="square-heading">{nFormatter(adResponse)}</div>
        </div>
        <div className="stats-block">
          <div className="subheading"> Impressions</div>
          <div className="square-heading">{nFormatter(impressions)}</div>
        </div>
      </div>
    </Wrapper>
  );
}
