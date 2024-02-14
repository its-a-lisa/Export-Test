// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SelectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SelectorIcon(props: SelectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
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
          "M3.529 5.529a.667.667 0 01.88-.056l.062.056L8 9.057l3.529-3.528a.667.667 0 01.88-.056l.062.056c.24.24.26.618.056.88l-.056.062-4 4a.667.667 0 01-.88.056l-.062-.056-4-4a.667.667 0 010-.942z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SelectorIcon;
/* prettier-ignore-end */
