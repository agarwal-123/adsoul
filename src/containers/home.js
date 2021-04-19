import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// import logo from "/favicon.ico";
import { getAppsList } from "../actions/appsList";
import { getAppsStats } from "../actions/appsStats";

import styled from "styled-components";
import AppCardList from "../components/appCardList";
import HeroSection from "../components/HeroSection";
import ListPage from "./list";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .right {
    width: 50%;
    @media only screen and (max-width: 780px) {
      width: 100%;
    }
  }
  .tc-1 {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;

export const Home = ({
  count,
  getAppsList,
  appsList,
  getAppsStats,
  appsStats,
}) => {
  const [activeApp, setActiveApp] = useState(null);

  useEffect(() => {
    getAppsList();
    getAppsStats();
  }, []);
  return (
    <Wrapper>
      {activeApp == null ? (
        <>
          <HeroSection />
          <div className="right">
            <AppCardList
              setActiveApp={setActiveApp}
              appsList={appsList}
              appsStats={appsStats}
            />
          </div>
        </>
      ) : (
        <ListPage setActiveApp={setActiveApp} activeApp={activeApp} />
      )}
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  appsList: state.appsList,
  appsStats: state.appsStats,
});

// const mapDispatchToProps = { getAppsList, DECREMENT };

export default connect(mapStateToProps, { getAppsList, getAppsStats })(Home);
