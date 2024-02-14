// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconmessagingAppIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconmessagingAppIcon(props: IconmessagingAppIconProps) {
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
          "M17.07 5.277c1.887 1.887 3.055 4.358 3.055 7.053 0 5.48-4.582 9.973-10.107 9.973-1.663 0-3.28-.45-4.762-1.213L0 22.438l1.393-5.166a9.985 9.985 0 01-1.348-4.987c0-5.48 4.492-9.973 9.973-9.973a9.813 9.813 0 017.052 2.965zm-7.052 15.319c4.582 0 8.4-3.729 8.4-8.266 0-2.246-.943-4.312-2.516-5.885a8.19 8.19 0 00-5.84-2.425c-4.582 0-8.31 3.728-8.31 8.265 0 1.572.45 3.1 1.258 4.447l.224.315-.853 3.055 3.144-.854.27.18a8.308 8.308 0 004.223 1.168zm4.582-6.2c.224.135.404.18.449.315.09.09.09.584-.135 1.168-.224.584-1.213 1.123-1.662 1.168-.809.135-1.438.09-3.01-.629-2.515-1.078-4.133-3.594-4.267-3.728-.135-.18-.989-1.348-.989-2.606 0-1.213.63-1.797.854-2.066a.843.843 0 01.674-.315h.449c.18 0 .36-.045.584.45.18.493.719 1.706.764 1.841.044.135.09.27 0 .45-.45.943-.989.898-.72 1.347.99 1.662 1.932 2.246 3.415 2.965.224.135.36.09.539-.045.135-.18.629-.764.764-.988.18-.27.359-.225.584-.135.224.09 1.437.674 1.707.809z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconmessagingAppIcon;
/* prettier-ignore-end */
