// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconupArrowIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconupArrowIcon(props: IconupArrowIconProps) {
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
          "M18.531 11.578A1.454 1.454 0 0117.5 12c-.422 0-.797-.14-1.078-.422L11.5 6.656V21c0 .844-.703 1.5-1.5 1.5-.75 0-1.5-.656-1.5-1.5V6.656l-4.969 4.922c-.562.61-1.547.61-2.11 0a1.445 1.445 0 010-2.11l7.5-7.5a1.445 1.445 0 012.11 0l7.5 7.5c.61.563.61 1.548 0 2.11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconupArrowIcon;
/* prettier-ignore-end */
