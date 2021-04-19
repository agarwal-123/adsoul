import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const Wrapper = styled.div`
  min-width: 50%;
  @media only screen and (max-width: 780px) {
    min-width: 100%;
  }

  .upper {
    padding: 20px 0px;
    background-color: #7164ff;
  }

  .lower {
    padding: 40px 150px 20px 40px;
    background-color: #6156dc;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 780px) {
      display: none;
    }
  }

  .heroImg {
    width: 40vw;
    max-width: 340px;
    @media only screen and (max-width: 780px) {
      width: 80vh;
    }
  }

  .heading {
    font-size: 30px;
    font-weight: medium;
    color: white;
    align-self: baseline;
    margin: 20px 0;
  }
  .icon-section {
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
  }
  .icon {
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 10px;
  }
  .icon-text {
    margin-top: 10px;
    font-size: 14px;
  }
`;

export const home = ({ count, INCREMENT, DECREMENT }) => {
  return (
    <Wrapper>
      <div className="left">
        <Header />
        <div className="upper">
          <img src="/assets/asset1.svg" alt="logo" className="heroImg" />
        </div>
        <div className="lower">
          <div className="heading">Revenue Optimization</div>
          <div className="icon-section">
            <div className="icon">
              <img src={`/assets/icon1.svg`} style={{ width: 40 }} />
              <div className="icon-text">Fill Rate</div>
            </div>
            <div className="icon" style={{ marginRight: 25 }}>
              <img src={`/assets/icon2.svg`} style={{ width: 55 }} />
              <div className="icon-text">Improve CTR</div>
            </div>
          </div>
          <div className="icon-section">
            <div className="icon">
              <img src={`/assets/icon3.svg`} style={{ width: 50 }} />
              <div className="icon-text">Refresh Rate</div>
            </div>
            <div className="icon">
              <img src={`/assets/icon4.svg`} style={{ width: 50 }} />
              <div className="icon-text">Quick Integration</div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default home;
