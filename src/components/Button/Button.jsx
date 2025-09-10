import { SButton, Link } from "./Button.style";

const Button = ({ text }) => {
  return (
    <SButton>
      <Link href="#popNewCard">{text}</Link>
    </SButton>
  );
};

export default Button;
