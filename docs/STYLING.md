# Styling in Vip Customer App

To avoid style clashes use css modules when styling in Zuri Main
for example

```ts
// IS NOT VALID UNLESS REFERENCING A STYLE MADE AVAILABLE IN THE GLOBAL STYLESHEET
const ExampleComponent = () => {
  return <div style={`testComponentDiv`}></div>;
};
export default TestComponent;
```

```ts
// IS VALID
import style from "./styles.module.css";

const ExampleComponent = () => {
  return <div style={`${style.testComponentDiv}`}></div>;
};
export default TestComponent;
```
