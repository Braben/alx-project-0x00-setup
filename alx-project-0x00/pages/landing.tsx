import Button from "@/components/Button";
import Card from "@/components/Card";
import { ButtonProps } from "@/interfaces";

const Landing: React.FC<ButtonProps> = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Small" sizes="small" shapes="rounded-sm" />
      <Button title="medium" sizes="medium" shapes="rounded-md" />
      <Button title="large" sizes="large" shapes="rounded-full" />
      {/* <Button title=" a button" /> */}
    </div>
  );
};

export default Landing;
