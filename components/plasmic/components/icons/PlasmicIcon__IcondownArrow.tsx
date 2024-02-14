// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IcondownArrowIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IcondownArrowIcon(props: IcondownArrowIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.922 22.078c.562.61 1.547.61 2.11 0l7.5-7.5a1.447 1.447 0 000-2.11 1.445 1.445 0 00-2.11 0L11.5 17.392V3c0-.797-.703-1.5-1.5-1.5-.844 0-1.5.703-1.5 1.5v14.39l-4.969-4.92a1.445 1.445 0 00-2.11 0 1.445 1.445 0 000 2.11l7.5 7.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IcondownArrowIcon;
/* prettier-ignore-end */
