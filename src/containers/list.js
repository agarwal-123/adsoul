import React from "react";
import { connect } from "react-redux";
import AppHeader from "../components/AppHeader";
import StatsTable from "../components/StatsTable";
import Header from "../components/Header";

export const List = ({ setActiveApp, activeApp, appsStats, appsList }) => {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <AppHeader handleBack={setActiveApp} appInfo={appsList[activeApp - 1]} />
      <StatsTable rows={appsStats?.[activeApp]} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  appsStats: state.appsStats,
  appsList: state.appsList,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(List);
