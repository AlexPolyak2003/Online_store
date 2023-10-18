import { useState } from "react";

function useReg() {
  const [isOpen_1, setisOpen] = useState(false);

  const toggle_1 = () => {
    setisOpen(!isOpen_1);
  };

  return {
    isOpen_1,
    toggle_1,
  };
}

export default useReg;
