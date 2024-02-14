// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconBrandlinkedinIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconBrandlinkedinIcon(props: IconBrandlinkedinIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M19.5 1.5H1.453C.656 1.5 0 2.203 0 3.047V21c0 .844.656 1.5 1.453 1.5H19.5c.797 0 1.5-.656 1.5-1.5V3.047c0-.844-.703-1.547-1.5-1.547zm-13.172 18H3.234V9.516h3.094V19.5zM4.781 8.11c-1.031 0-1.828-.797-1.828-1.782A1.83 1.83 0 014.781 4.5c.985 0 1.782.844 1.782 1.828A1.78 1.78 0 014.78 8.11zM18 19.5h-3.14v-4.875c0-1.125 0-2.625-1.594-2.625-1.641 0-1.875 1.266-1.875 2.578V19.5H8.297V9.516h2.953v1.359h.047c.422-.797 1.453-1.64 2.953-1.64 3.14 0 3.75 2.109 3.75 4.78V19.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconBrandlinkedinIcon;
/* prettier-ignore-end */
