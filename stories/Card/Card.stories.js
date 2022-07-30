import { getListTemplate, getOptionsArgTypes, getTemplate } from "../../helpers/storybook";
import { Card } from "./Card";
import styles from './Card.module.css'
import { options } from "./constants";

const Template = getTemplate(Card, styles)
const ListTemplate = getListTemplate(Card, styles)

export default {
  title: "Card",
  component: Card,
  args: {
    children: "I'm a card by default in the stories"
  },
  argTypes: {
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
  }
};

export const Default = Template.bind({});

export const Clickable = Template.bind({});
Clickable.args = {
  isClickable: true,
};

export const Draggable = Template.bind({});
Draggable.args = {
  isDraggable: true,
};

export const Colors = ListTemplate.bind({});
Colors.args = {
  items: options.colors.map((color) => ({ color })),
};

export const Sizes = ListTemplate.bind({});
Sizes.args = {
  items: options.sizes.map((size) => ({ size })),
};
