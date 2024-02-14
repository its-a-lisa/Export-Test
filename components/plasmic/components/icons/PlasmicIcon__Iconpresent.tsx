// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconpresentIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconpresentIcon(props: IconpresentIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 56 56"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.625 0h.219c3.5 0 6.672 1.86 8.422 4.922L28 9.406l2.625-4.484C32.375 1.859 35.547 0 39.047 0h.328C44.625 0 49 4.375 49 9.625c0 1.64-.438 3.063-1.094 4.375H52.5c1.86 0 3.5 1.64 3.5 3.5v7c0 1.969-1.64 3.5-3.5 3.5h-49C1.531 28 0 26.469 0 24.5v-7C0 15.64 1.531 14 3.5 14h4.484C7.328 12.687 7 11.266 7 9.625 7 4.375 11.266 0 16.625 0zm4.156 7.547c-.875-1.422-2.297-2.297-3.937-2.297h-.219c-2.516 0-4.375 1.969-4.375 4.375 0 2.516 1.86 4.375 4.375 4.375h7.984l-3.828-6.453zM39.375 5.25h-.328c-1.64 0-3.063.875-3.938 2.297L31.281 14h8.094c2.406 0 4.375-1.86 4.375-4.375a4.388 4.388 0 00-4.375-4.375zM3.5 31.5h21V56H8.75c-2.953 0-5.25-2.297-5.25-5.25V31.5zm28 24.5V31.5h21v19.25c0 2.953-2.406 5.25-5.25 5.25H31.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconpresentIcon;
/* prettier-ignore-end */
