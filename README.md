## 1. What is JSX, and why is it used?

JSX means JavaScript XML.\
It lets us write HTML inside JavaScript. We use it because Easy to read, Looks like HTML, Makes UI building simple.

------------------------------------------------------------------------

## 2. What is the difference between State and Props?

**Props** - Passed from parent to child - Read-only (cannot change)

**State** - Managed inside component - Can change - When it changes,
component re-renders

------------------------------------------------------------------------

## 3. What is the useState hook, and how does it work?

useState is a React Hook.\
It is used to create and manage state in functional components.

------------------------------------------------------------------------

## 4. How can you share state between components in React?

Use **Lifting State Up**: - Move state to the common parent - Pass it to
children using props

Other ways: - Context API - Redux

------------------------------------------------------------------------

## 5. How is event handling done in React?

Event handling in React is similar to HTML but written in camelCase.

-   Use `onClick`, `onChange`
-   Pass a function (not a string)