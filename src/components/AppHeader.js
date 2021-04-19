import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  background-color: white;
  margin: 10px 0;
  padding: 25px;
  .square {
    height: 50px;
    width: 50px;
    border-radius: 4px;
    margin: 0 15px 0 25px;
  }

  .orange {
    background-color: #ef7854;
  }
  .blue {
    background-color: #7164ff;
  }
  .green {
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
    display: flex;
    align-items: center;
  }
  .nameSection,
  .stats-block {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-evenly;
  }

  .square-heading {
    font-size: 22px;
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

export default function appCard({ handleBack, appInfo }) {
  return (
    <Wrapper>
      <div className="top">
        <div className="start">
          <div className="end" onClick={() => handleBack(null)}>
            <img
              src="assets/left-arrow.svg"
              style={{ width: "25px", cursor: "pointer" }}
            />
          </div>
          <div className="square orange"></div>
          <div className="nameSection">
            <div className="square-heading">{appInfo.appName}</div>
            <div className="square-subheading grey">
              {appInfo.publisherName}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
