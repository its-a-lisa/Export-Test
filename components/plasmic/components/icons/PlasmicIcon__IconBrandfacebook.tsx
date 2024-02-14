// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconBrandfacebookIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconBrandfacebookIcon(props: IconBrandfacebookIconProps) {
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
          "M23.625 12C23.625 5.578 18.422.375 12 .375S.375 5.578.375 12c0 5.813 4.219 10.64 9.797 11.484v-8.109H7.219V12h2.953V9.469c0-2.906 1.734-4.547 4.36-4.547 1.312 0 2.624.234 2.624.234v2.86h-1.453c-1.453 0-1.922.89-1.922 1.828V12h3.235l-.516 3.375h-2.719v8.11c5.578-.844 9.844-5.672 9.844-11.485z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconBrandfacebookIcon;
/* prettier-ignore-end */
