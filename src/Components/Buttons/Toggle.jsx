import { Icon } from "@iconify/react";

const Toggle = ({ onFancyClick, toggleMenu }) => {
  return (
    <>
      <Icon
        icon="healthicons:ui-menu"
        width="30"
        height="30"
        className="text-white cursor-pointer"
        onClick={toggleMenu}
      />
    </>
  );
};

export default Toggle;
