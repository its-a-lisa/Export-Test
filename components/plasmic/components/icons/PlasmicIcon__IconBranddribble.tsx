// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconBranddribbleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconBranddribbleIcon(props: IconBranddribbleIconProps) {
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
          "M12 .375C5.578.375.375 5.625.375 12c0 6.422 5.203 11.625 11.625 11.625 6.375 0 11.625-5.203 11.625-11.625C23.625 5.625 18.375.375 12 .375zm7.64 5.39a9.635 9.635 0 012.25 6.188c-.328-.094-3.609-.75-6.89-.328-.281-.656-.516-1.219-.89-1.969 3.703-1.5 5.343-3.61 5.53-3.89zm-1.078-1.171c-.187.281-1.687 2.297-5.203 3.61-1.64-3-3.421-5.438-3.703-5.813 3.14-.75 6.469.046 8.906 2.203zM7.735 3.047a56.462 56.462 0 013.704 5.765c-4.641 1.22-8.72 1.22-9.188 1.172a10.06 10.06 0 015.484-6.937zm-5.671 9v-.328c.421.047 5.25.094 10.171-1.406.329.562.563 1.124.844 1.687-3.61 1.031-6.89 3.938-8.484 6.656-1.594-1.734-2.532-4.078-2.532-6.61zm3.796 7.828c1.079-2.11 3.891-4.875 7.875-6.234 1.407 3.609 1.97 6.656 2.11 7.546a9.93 9.93 0 01-9.985-1.312zm11.672.375c-.093-.563-.656-3.469-1.922-7.078 3.094-.469 5.813.328 6.188.422a10.122 10.122 0 01-4.266 6.656z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconBranddribbleIcon;
/* prettier-ignore-end */
