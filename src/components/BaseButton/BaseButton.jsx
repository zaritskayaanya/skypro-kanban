import { SBaseButton, Link } from "./BaseButton.styled";

const BaseButton = ({ text
   }) => {
  return (
    <SBaseButton>
      <Link>
        {text}</Link>
    </SBaseButton>
  );
};

export default BaseButton;