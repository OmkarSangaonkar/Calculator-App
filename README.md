# Calculator App

This is a simple calculator app built using React. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The app's user interface is styled using the `styled-components` library for a clean and modern look.

## How to Use

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the required dependencies using `npm install`.
4. Run the app using `npm start`.
5. Open your web browser and visit `http://localhost:3000` to access the calculator.

## Features

- The calculator has a display area at the top that shows the previous input, the selected operation, and the current input.
- Buttons for digits 0 to 9 allow users to input numbers.
- Buttons for arithmetic operations (+, -, \*, /) allow users to perform calculations.
- The calculator supports the decimal point (.) for floating-point numbers.
- The "AC" button clears all input and resets the calculator.
- The "DEL" button deletes the last character from the current input.
- The "+/-" button changes the sign of the current input.
- The "=" button computes the result of the expression and displays it.

## Styling

The app's styling is implemented using the `styled-components` library. The main components' styling is defined in the `Main.js` file. The components and their corresponding styles are as follows:

### `Container`

- Represents the outer container for the calculator.
- Displays as a grid layout with four columns and six rows.
- Has a width of 400px and a margin of 40px auto for centering.
- A box shadow effect and rounded corners are applied for a visually appealing look.

### `Screen`

- Represents the top display area of the calculator where input and output are shown.
- Spans across the entire grid using `grid-column: 1 / -1`.
- Has a semi-transparent gray background color.
- Uses flex layout with space-around justification and a column direction for content.

### `Previous`

- Represents the left side of the display area, showing the previous input and selected operation.
- The text color is set to a semi-transparent white color.
- The font size is 1.5rem.

### `Current`

- Represents the right side of the display area, showing the current input.
- The text color is white.
- The font size is 2.5rem.

### `Button`

- Represents individual buttons in the calculator.
- Has a pointer cursor and a font size of 2rem.
- The border style is set to "outset" with a white color.
- A semi-transparent white background color is applied, and it changes to a light grayish tone on hover.
- Depending on the type of button, specific styles are applied:
  - Arithmetic operation buttons have a gray background.
  - The "AC" and "+/-" buttons have a sky blue background.
  - The "=" button has a gray background and a bottom-right rounded border.
  - The decimal button (".") has a sky blue background and a bottom-left rounded border.

Feel free to explore the code and make any improvements or customizations as per your preferences. Happy calculating!
