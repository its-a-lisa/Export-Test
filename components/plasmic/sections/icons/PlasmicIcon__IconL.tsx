// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconLIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconLIcon(props: IconLIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M10 3.333a6.667 6.667 0 100 13.334 6.667 6.667 0 000-13.334zM1.667 10a8.333 8.333 0 1116.666 0 8.333 8.333 0 01-16.666 0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M11.423 6.91a.833.833 0 010 1.18L9.512 10l1.91 1.91a.834.834 0 01-1.178 1.18l-2.5-2.5a.833.833 0 010-1.18l2.5-2.5a.833.833 0 011.179 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconLIcon;
/* prettier-ignore-end */
