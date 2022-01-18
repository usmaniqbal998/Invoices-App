import React from "react";
import styled from "styled-components";
import { typographyVariants } from "../common/types";

interface Props {
  variant?: typographyVariants;
  children: React.ReactNode;
  className?: string;
}

interface TextProps {
  type: typographyVariants;
}

const Typography = ({ variant = undefined, children, className }: Props) => {
  return (
    <Text
      as={variant === "body1" || variant === "body2" ? "p" : variant}
      type={variant}
      className={className}
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
        fontSize: "3.2rem",
        lineHeight: "3.6rem",
        letterSpacing: "-1px",
        ...styles,
      };

    case "h2":
      return {
        fontSize: "2.0rem",
        lineHeight: "2.2rem",
        letterSpacing: "-0.63px",
        ...styles,
      };

    case "h3":
      return {
        fontSize: "1.6rem",
        lineHeight: "2.4rem",
        letterSpacing: "-0.8px",
        ...styles,
      };

    case "h4":
      return {
        fontSize: "1.2rem",
        lineHeight: "1.5rem",
        letterSpacing: "-0.25px",
        ...styles,
      };

    case "body1":
      return {
        fontSize: "1.2rem",
        lineHeight: "1.5rem",
        letterSpacing: "-0.25px",
        ...styles,
      };

    case "body2":
      return {
        fontSize: "1.1rem",
        lineHeight: "1.8rem",
        letterSpacing: "-0.23px",
        ...styles,
      };

    default:
      return styles;
  }
});

export default Typography;
