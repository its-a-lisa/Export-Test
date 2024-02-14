// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ControlIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ControlIcon(props: ControlIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M8.889 17.778A8.889 8.889 0 108.889 0a8.889 8.889 0 000 17.778z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ControlIcon;
/* prettier-ignore-end */
