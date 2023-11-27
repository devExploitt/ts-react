import React from "react";
import s from "../Container/Container.module.scss";
import cn from "classnames";

interface ContainerProps {
  className?: string;
  children: React.ReactNode | React.ReactElement;
}
const Container = ({ className, children }: ContainerProps) => {
  return <div className={cn(s.container, className)}>{children}</div>;
};

export default Container;
