import React from "react";
import styled from "styled-components";
import { buttontypes } from "../common/types";

interface Props {
  variant: buttontypes;
  label: string;
  long?: boolean;
  InputAdornment?: React.ReactElement;
}
interface ButtonProps {
  btnType: buttontypes;
  long: boolean | undefined;
  inputAdornment: boolean | undefined;
}

const Button = ({
  variant,
  label,
  long,
  InputAdornment = undefined,
}: Props) => {
  return (
    <Btn inputAdornment={InputAdornment && true} long={long} btnType={variant}>
      {InputAdornment && <Ico> {InputAdornment}</Ico>}
      <span>{label}</span>
    </Btn>
  );
};

const Btn = styled.button<ButtonProps>((props) => {
  const baseStyles = `
    border-radius: 2.4rem;
    padding: ${props.inputAdornment ? "0.8rem" : "1.6rem"} ${
    props.inputAdornment ? "0.8rem" : "2.4rem"
  };
    padding-right: 2.4rem;
    display: flex;
    align-items: center;
    justify-content:${props.inputAdornment ? "space-between" : "center"};
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: -0.25px;
    line-height: 1.5rem;
    font-family: inherit;
    width: ${props.long ? "35rem" : "unset"};
    
  `;
  switch (props.btnType) {
    case "primary":
      return `
            ${baseStyles}
            background-color:${props.theme.primaryColor};
            width:${props.inputAdornment ? "16rem" : "unset"};
            &:hover{
                background-color:${props.theme.primaryLight};
                cursor:pointer;
            }
        `;

    case "secondary":
      return `
            ${baseStyles}
            background-color:${props.theme.secondaryColor};
            color:${props.theme.lightTextColor};
            &:hover{
                background-color:${props.theme.secondaryLight};
                cursor:pointer;
            }
        `;

    case "danger":
      return `
            ${baseStyles}
            background-color:${props.theme.accentColor};
            &:hover{
                background-color:${props.theme.lightAccentColor};
                cursor:pointer;
            }
        `;

    default:
      return baseStyles;
  }
});

const Ico = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  background-color: #fff;
  border-radius: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Button;
