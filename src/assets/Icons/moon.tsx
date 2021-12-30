import React from "react";
import styled from "styled-components";

interface Props {
  onThemeSwitchHandler: () => void;
}

const MoonIco = ({ onThemeSwitchHandler }: Props) => (
  <SVG
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    type="button"
    onClick={() => onThemeSwitchHandler()}
  >
    <path d="M19.502 11.342a.703.703 0 0 0-.588.128 7.499 7.499 0 0 1-2.275 1.33 7.123 7.123 0 0 1-2.581.46 7.516 7.516 0 0 1-5.318-2.2 7.516 7.516 0 0 1-2.198-5.316c0-.87.153-1.713.41-2.48.28-.817.69-1.559 1.226-2.197a.652.652 0 0 0-.102-.92.703.703 0 0 0-.588-.128C5.316.607 3.425 1.91 2.07 3.649A10.082 10.082 0 0 0 0 9.783C0 12.57 1.125 15.1 2.965 16.94a10.04 10.04 0 0 0 7.156 2.965c2.352 0 4.524-.818 6.262-2.173a10.078 10.078 0 0 0 3.579-5.597.62.62 0 0 0-.46-.793z" />
  </SVG>
);

const SVG = styled.svg`
  fill: #858bb2;
  &:hover {
    cursor: pointer;
  }
`;

export default MoonIco;
