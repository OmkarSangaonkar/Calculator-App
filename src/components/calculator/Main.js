import styled from "styled-components";

// Styling for the container of the calculator
export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  width: 400px;
  margin: 40px auto;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: minmax(120px, auto) repeat(5, 100px);
  box-shadow: 2px 2px 10px #333;
  border-radius: 10px;
`;

// Styling for the screen display of the calculator
export const Screen = styled.div`
  grid-column: 1 / -1;
  background-color: rgba(60, 64, 67, 0.75);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

// Styling for the previous input display on the screen
export const Prevoius = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.5rem;
`;

// Styling for the current input display on the screen
export const Current = styled.div`
  color: white;
  font-size: 2.5rem;
`;

// Styling for the calculator buttons
export const Button = styled.button`
  cursor: pointer;
  font-size: 2rem;
  outline: none;
  border: 1px outset white;
  background-color: rgba(255, 255, 255, 0.75);
  &:hover {
    background-color: rgb(180, 180, 200);
  }
  ${function ({ gridSpan }) {
    if (gridSpan) {
      return `grid-column: span ${gridSpan} ;`;
    }
  }};
  ${({ operation }) => operation && `background-color:gray;`};
  ${({ control }) => control && `background-color:skyBlue;`};
  ${({ equals }) =>
    equals && `background-color:gray;border-bottom-right-radius:10px;`};
  ${({ decimal }) =>
    decimal && `background-color:skyBlue;border-bottom-left-radius:10px;`};
`;
