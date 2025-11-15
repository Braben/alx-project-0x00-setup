import { ButtonProps } from "@/interfaces";

const sizeClasses = {
  small: "px-2 py-1 text-sm",
  medium: "px-3 py-2 text-base",
  large: "px-5 py-3 text-lg",
};

const shapeClasses = {
  "rounded-sm": "rounded-sm",
  "rounded-md": "rounded-md",
  "rounded-lg": "rounded-lg",
};

const Button: React.FC<ButtonProps> = ({
  title,
  sizes = "medium",
  shapes = "rounded-md",
}) => {
  const sizeClass = sizeClasses[sizes];
  const shapeClass = shapeClasses[shapes];
  return (
    <button
      className={`border bg-blue-500 text-white mt-3 ${sizeClass} ${shapeClass}`}
    >
      {title}
    </button>
  );
};

export default Button;
