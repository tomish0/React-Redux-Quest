import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = dispatch => ({
  addAction: () => dispatch({ type: "ADD" }),
  minusAction: () => dispatch({ type: "MINUS" }),
  add10Action: () => dispatch({ type: "ADD10" }),
  minus10Action: () => dispatch({ type: "MINUS10" }),
  resetAction: () => dispatch({ type: "RESET" })
});

const CounterContainer = ({
  count,
  addAction,
  minusAction,
  add10Action,
  minus10Action,
  resetAction
}) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={addAction}>+</button>
      <button onClick={minusAction}>-</button>
      <button onClick={add10Action}>+ 10</button>
      <button onClick={minus10Action}>- 10</button>
      <button onClick={resetAction}>RESET</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
