import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import s from "./Main.module.scss";
import { ReactElement } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../../models";

interface MainProps {
  children?: React.ReactNode | ReactElement;
}
export const Main = ({ children }: MainProps) => {
  const isOn = useSelector((state: RootState) => state.isOn);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOn && location.pathname !== "/404") {
      navigate("/404");
    }
  }, [navigate, isOn, location]);

  return <div className={s.main}>{children}</div>;
};
