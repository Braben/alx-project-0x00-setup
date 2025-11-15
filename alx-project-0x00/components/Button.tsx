import { ButtonProps } from "@/interfaces";

const sizeClasses = {
  small: "px-2 py-1 text-sm",
  medium: "px-3 py-2 text-base",
  large: "px-5 py-3 text-lg",
  styles: "border bg-blue-500 text-white mt-3",
};

const shapeClasses = {
  "rounded-sm": "rounded-sm",
  "rounded-md": "rounded-md",
  "rounded-lg": "rounded-lg",
  "rounded-full": "rounded-full",
};

const Button: React.FC<ButtonProps> = ({
  title,
  sizes = "medium",
  shapes = "rounded-md",
  styles = "border bg-blue-500 text-white mt-3",
}) => {
  const sizeClass = sizeClasses[sizes];
  const shapeClass = shapeClasses[shapes];
  return (
    <button className={`${styles} ${sizeClass} ${shapeClass}`}>{title}</button>
  );
};

export default Button;
