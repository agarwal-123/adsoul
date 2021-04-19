import React from "react";
import styled from "styled-components";
import AppCard from "./AppCard";

const Wrapper = styled.div`
  .card-section {
    display: flex;
    flex-direction: column;
    background-color: #f7f7f7;
    padding: 25px;
    height: 75vh;
    overflow-y: scroll;
    @media only screen and (max-width: 410px) {
      overflow-y: inherit;
      height: 100%;
    }
  }
  .top-heading {
    margin: 40px 25px 25px;
    display: flex;
    font-size: 24px;
  }
`;

export default function appCardList({ setActiveApp, appsList, appsStats }) {
  const sum = (i) => {
    let revenue = 0,
      adRequest = 0,
      adResponse = 0,
      impressions = 0;
    appsStats?.[i]?.forEach((ele, i) => {
      revenue = revenue + ele["revenue"];
      adRequest = adRequest + ele["adRequest"];
      adResponse = adResponse + ele["adResponse"];
      impressions = impressions + ele["impressions"];
    });
    return { revenue, adRequest, adResponse, impressions };
  };
  return (
    <Wrapper>
      <div className="top-heading">Apps</div>
      <div className="card-section">
        {appsList.map((ele, i) => {
          return (
            <div>
              <AppCard
                setActiveApp={setActiveApp}
                appData={ele}
                stats={sum(i + 1)}
              />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
