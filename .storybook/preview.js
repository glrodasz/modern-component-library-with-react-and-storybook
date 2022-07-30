import "minireset.css";
import { disableGlobalArgTypes } from "../helpers/storybook";
import "../styles/global.css";
import "../styles/tokens.css";

const styles = {
  display: "flex",
  flexDirection: "column",
  maxHeight: "auto",
  justifyContent: "flex-start",
  alignContent: "flex-start",
  flexWrap: "wrap",
  height: "100%",
  gap: "10px 30px",
};

export const decorators = [
  (Story, { parameters }) =>
    disableGlobalArgTypes(parameters)("getStyles") || (
      <div style={styles}>
        <Story />
      </div>
    ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
