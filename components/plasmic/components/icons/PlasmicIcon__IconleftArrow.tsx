// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconleftArrowIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconleftArrowIcon(props: IconleftArrowIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.422 10.969a1.445 1.445 0 000 2.11l7.5 7.5a1.448 1.448 0 002.11 0 1.447 1.447 0 000-2.11L6.108 13.5H20.5c.797 0 1.5-.656 1.5-1.5 0-.797-.703-1.5-1.5-1.5H6.11l4.921-4.922c.61-.562.61-1.547 0-2.11a1.445 1.445 0 00-2.11 0l-7.5 7.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconleftArrowIcon;
/* prettier-ignore-end */
