import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      id="prefix__Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 23.3 23.3"
      xmlSpace="preserve"
      {...props}
    >
      <style>
        {
          ".prefix__st0{fill:#fff;stroke:#000;stroke-width:.75;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}"
        }
      </style>
      <path
        className="prefix__st0"
        d="M.4 19.7h22.5M1.6 17.2h3.5v2.5H1.6zM18.3 17.2h3.5v2.5h-3.5zM5.1 12.3h13.1v7.4H5.1zM2.5 15.7h1.4v1.5H2.5zM19.7 15.7h1.4v1.5h-1.4z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth={0.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M2.6 11.3l.8 1h16.5l.9-1.2"
      />
      <path
        className="prefix__st0"
        d="M6.7 9.5l-3.1 2.8h16.3l-3.1-2.8zM7.5 4.8L5 7.2h13.5l-2.6-2.4zM8.1 7.2h7.2v2.3H8.1zM6.7 7.2v2.3M16.8 7.2v2.3M18.5 7.2l1.1-1.1M5 7.2L3.8 6M7.7 3.6v1.2M15.7 3.6v1.2M6.6 12.3v7.4M11.7 12.3v7.4M16.8 12.3v7.4"
      />
    </Svg>
  );
};

export default Icon;
