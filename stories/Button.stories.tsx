import Button from "../components/Button";
import { ComponentMeta } from "@storybook/react";
import "../styles/globals.css";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Red = () => <Button text="press me" />;
