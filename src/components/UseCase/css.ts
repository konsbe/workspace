import styled from "@emotion/styled";
import { ContainerProps } from "./interface";

export const Container = styled.div<ContainerProps>((props) => ({
  border: "1px solid red",
  color: props.color,
  backgroundColor: props.backgroundcolor ? props.backgroundcolor : "green",
  width: props.width ? props.width : "200px",
  margin: "auto",
  "&:hover": {
    backgroundColor: "orange",
  },
  hover: props.onMouseEnter,
}));
export const ContainerTwo = styled.div<ContainerProps>((props) => ({
  "&:hover": {
    backgroundColor: "red",
  },
}));
