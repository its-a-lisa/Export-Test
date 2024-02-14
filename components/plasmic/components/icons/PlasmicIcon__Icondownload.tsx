// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IcondownloadIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IcondownloadIcon(props: IcondownloadIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.5 16.5c.797 0 1.5.703 1.5 1.5v4.5c0 .844-.703 1.5-1.5 1.5h-21A1.48 1.48 0 010 22.5V18c0-.797.656-1.5 1.5-1.5h6.234l2.11 2.156c.562.563 1.312.844 2.156.844.797 0 1.547-.281 2.11-.844l2.109-2.156H22.5zm-2.25 4.875a1.11 1.11 0 001.125-1.125 1.14 1.14 0 00-1.125-1.125 1.11 1.11 0 00-1.125 1.125c0 .656.469 1.125 1.125 1.125zm-9.328-3.797l-6-6a1.445 1.445 0 010-2.11 1.445 1.445 0 012.11 0l3.468 3.423V1.5c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5v11.39l3.422-3.421a1.445 1.445 0 012.11 0 1.447 1.447 0 010 2.11l-6 6A1.454 1.454 0 0112 18c-.422 0-.797-.14-1.078-.422z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IcondownloadIcon;
/* prettier-ignore-end */
