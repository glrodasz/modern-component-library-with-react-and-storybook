import { Picture } from "./Picture";
import styles from "./Picture.module.css";
import { getTemplate } from "../../helpers/storybook";

const Template = getTemplate(Picture, styles);

export default {
  title: "Picture",
  component: Picture,
  args: {
    src: "https://picsum.photos/id/1033/400/400",
    width: 200,
  },
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
  },
};

export const Default = Template.bind({});

export const Rounded = Template.bind({});
Rounded.args = {
  isRounded: true,
};

export const Height = Template.bind({});
Height.args = {
  height: 400,
  src: "https://picsum.photos/id/1033/400/800"
};

export const Width = Template.bind({});
Width.args = {
  width: 400,
  src: "https://picsum.photos/id/1033/800/400"
};
