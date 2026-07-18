# Task 31: Context API (ReactJS)

**Author:** D P Rithvik Kumar

## Overview of Decisions
For this task, I implemented global state management using React's Context API.
1. **Context API Implementation:** I created a `CartContext` to hold the state of the shopping cart array. This allows the cart data to persist seamlessly when the user navigates between the `Store` page and the `Payment` page.
2. **Dynamic UI Rendering:** The `<Cart />` component receives an `isPaymentPage` boolean prop. This allows me to reuse the exact same cart component on both pages, simply conditionally rendering the button to say either "Proceed To Payment" or "Go back to Shopping".
3. **Routing:** I utilized `react-router-dom` (specifically `HashRouter` for GH Pages compatibility) to handle the page transitions.