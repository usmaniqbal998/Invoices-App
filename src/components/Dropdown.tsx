import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useOutsideClick from "../hooks/useOutsideClick";

interface Props {
  open: boolean;
  children: React.ReactNode;
  anchorElement: JSX.Element;
  openCallback: (open: boolean) => void;
}

const Dropdowns = ({ open, children, anchorElement, openCallback }: Props) => {
  const [openDropdown, setOpen] = useState(open);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClick(dropdownRef, onOutsideClicked);

  function onOutsideClicked() {
    openCallback(false);
  }

  useEffect(() => {
    setOpen(open);
  }, [open]);

  return (
    <DropdownContainer ref={dropdownRef}>
      {anchorElement}
      <Menu open={openDropdown}>{children}</Menu>
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  background-color: red;
  width: 20rem;
`;

const Menu = styled.div<{ open: boolean }>`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
  border-radius: 0.8rem;
  padding: 2.4rem;
  opacity: ${(props) => (props.open ? 1 : 0)};
  pointer-events: ${(props) => (props.open ? "auto" : "none")};
  transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
  transform: ${(props) =>
    props.open ? "translateY(0)" : "translateY(-1.6rem)"};
`;

export default Dropdowns;
