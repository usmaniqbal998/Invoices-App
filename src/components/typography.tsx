import React from "react";
import styled from "styled-components";
import { typographyVariants } from "../common/types";

interface Props {
  variant?: typographyVariants;
  children: React.ReactNode;
}

interface TextProps {
  type: typographyVariants;
}

const Typography = ({ variant = undefined, children }: Props) => {
  return (
    <Text
      as={variant === "body1" || variant === "body2" ? "p" : variant}
      type={variant}
    >
      {children}
    </Text>
  );
};

const Text = styled.p<TextProps>((props) => {
  const styles = {
    color: props.theme.heavyTextColor,
    transition: "color 0.2s",
  };
  switch (props.type) {
    case "h1":
      return {
        fontSize: "32px",
        lineHeight: "36px",
        letterSpacing: "-1px",
        ...styles,
      };

    case "h2":
      return {
        fontSize: "20px",
        lineHeight: "22px",
        letterSpacing: "-0.63px",
        ...styles,
      };

    case "h3":
      return {
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "-0.8px",
        ...styles,
      };

    case "h4":
      return {
        fontSize: "12px",
        lineHeight: "15px",
        letterSpacing: "-0.25px",
        ...styles,
      };

    case "body1":
      return {
        fontSize: "12px",
        lineHeight: "15px",
        letterSpacing: "-0.25px",
        ...styles,
      };

    case "body2":
      return {
        fontSize: "11px",
        lineHeight: "18px",
        letterSpacing: "-0.23px",
        ...styles,
      };

    default:
      return styles;
  }
});

export default Typography;
