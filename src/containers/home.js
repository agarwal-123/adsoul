import React from "react";
import { connect } from "react-redux";
import logo from "../logo.svg";
import { INCREMENT, DECREMENT } from "../actions/countActions";

export const home = ({ count, INCREMENT, DECREMENT }) => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {count}
        </p>
        <button
          onClick={() => {
            DECREMENT();
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            INCREMENT();
          }}
        >
          Increment
        </button>
      </header>
    </div>
  );
};

const mapStateToProps = (state) => ({ count: state.count });

// const mapDispatchToProps = { INCREMENT, DECREMENT };

export default connect(mapStateToProps, { INCREMENT, DECREMENT })(home);
