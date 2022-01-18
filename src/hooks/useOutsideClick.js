import { useEffect } from "react";

const useOutsideClick = (ref, action) => {
  function handleClickOutside(event) {
    if (ref.current && !event.path.includes(ref.current)) {
      action();
    }
  }

  useEffect(() => {
    document.addEventListener("click", (e) => handleClickOutside(e));
    return () => {
      document.removeEventListener("click", (e) => handleClickOutside(e));
    };
  }, [ref]);
};

export default useOutsideClick;
