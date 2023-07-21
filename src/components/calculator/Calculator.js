import React, { useState } from "react";
import { Container, Screen, Prevoius, Current, Button } from "./Main";

const Calculator = () => {
  // States to store the current input, previous input, and selected operation
  const [current, setCurrent] = useState("");
  const [prevoius, setPrevoius] = useState("");
  const [operations, setOperations] = useState("");

  // Function to append a value to the current input
  const appendValueHandler = (el) => {
    const value = el.target.getAttribute("data");
    // Check if the value is a decimal point and if the current input already contains one
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  };

  // Function to clear the current input, previous input, and selected operation
  const allclearHandler = () => {
    setCurrent("");
    setOperations("");
    setPrevoius("");
  };

  // Function to change the sign of the current input
  const changeSignHandler = () => {
    if (current >= 0) {
      // Change the sign of the current input to negative
      setCurrent(current * -1);
    }
  };

  // Function to handle the selection of arithmetic operations (+, -, *, /, %)
  const chooseOperationHandler = (el) => {
    // Check if the current input is empty; if so, return
    if (current === "") return;
    // If there is a previous input, calculate the result and update the previous input
    if (prevoius !== "") {
      let value = compute();
      setPrevoius(value);
    } else {
      // If there is no previous input, set the current input as the previous input
      setPrevoius(current);
    }
    setCurrent("");
    setOperations(el.target.getAttribute("data"));
  };

  // Function to calculate the result based on the selected operation
  const equalHandler = () => {
    let value = compute();
    if (value === undefined || value == null) return;
    setCurrent(value);
    setPrevoius("");
    setOperations("");
  };

  // Function to perform arithmetic operations (+, -, *, /, %) based on the selected operation
  const compute = () => {
    let result;
    let previousNumber = parseFloat(prevoius);
    let currentNumber = parseFloat(current);
    if (isNaN(previousNumber) || isNaN(currentNumber)) return;
    switch (operations) {
      case "÷":
        result = previousNumber / currentNumber;
        break;
      case "x":
        result = previousNumber * currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      case "%":
        result = previousNumber % currentNumber;
        break;
      default:
        return;
    }
    return result;
  };

  return (
    <>
      <Container>
        <Screen>
          <Prevoius>
            {prevoius} {operations}
          </Prevoius>
          <Current>{current}</Current>
        </Screen>
        <Button gridSpan={1} control onClick={allclearHandler}>
          AC
        </Button>
        <Button gridSpan={1} control onClick={changeSignHandler}>
          +/-
        </Button>
        <Button data={"%"} onClick={chooseOperationHandler} operation>
          %
        </Button>
        <Button data={"÷"} onClick={chooseOperationHandler} operation>
          ÷
        </Button>
        <Button data={7} onClick={appendValueHandler}>
          7
        </Button>
        <Button data={8} onClick={appendValueHandler}>
          8
        </Button>
        <Button data={9} onClick={appendValueHandler}>
          {" "}
          9
        </Button>
        <Button data={"x"} operation onClick={chooseOperationHandler}>
          x
        </Button>
        <Button data={4} onClick={appendValueHandler}>
          4
        </Button>
        <Button data={5} onClick={appendValueHandler}>
          5
        </Button>
        <Button data={6} onClick={appendValueHandler}>
          6
        </Button>
        <Button data={"+"} operation onClick={chooseOperationHandler}>
          +
        </Button>
        <Button data={1} onClick={appendValueHandler}>
          1
        </Button>
        <Button data={2} onClick={appendValueHandler}>
          2
        </Button>
        <Button data={3} onClick={appendValueHandler}>
          3
        </Button>
        <Button data={"-"} operation onClick={chooseOperationHandler}>
          -
        </Button>
        <Button data={"."} onClick={appendValueHandler} decimal>
          .
        </Button>
        <Button data={0} onClick={appendValueHandler}>
          0
        </Button>
        <Button gridSpan={2} equals onClick={equalHandler}>
          =
        </Button>
      </Container>
    </>
  );
};

export default Calculator;
