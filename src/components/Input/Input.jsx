import { StyledInput, StyledTextarea } from "./Input.styled";

const Input = ({
  tag = "input",
  id,
  name,
  placeholder = "",
  type = "text",
  error = false,
}) => {
  // Выбираем компонент в зависимости от тега
  const Component = tag === "textarea" ? StyledTextarea : StyledInput;

  return (
    <Component
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      $error={error}
    />
  );
};

export default Input;
