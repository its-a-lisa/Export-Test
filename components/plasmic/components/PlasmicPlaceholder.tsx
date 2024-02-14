// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5ccFCnH7of5M9MPpSs86Uj
// Component: rSHAt6reuZrC

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { ModeValue, useMode } from "../global/PlasmicGlobalVariant__Mode"; // plasmic-import: 4o07efrW3bsm/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_semantic_css from "../semantic/plasmic_semantic.module.css"; // plasmic-import: b1udyYxbVnA5YsUcRMaXei/projectcss
import plasmic_global_css from "../global/plasmic_global.module.css"; // plasmic-import: 8hqEu73KETDHFVi1kzitzB/projectcss
import projectcss from "./plasmic_components.module.css"; // plasmic-import: 5ccFCnH7of5M9MPpSs86Uj/projectcss
import sty from "./PlasmicPlaceholder.module.css"; // plasmic-import: rSHAt6reuZrC/css

import IconimageIcon from "./icons/PlasmicIcon__Iconimage"; // plasmic-import: iF4E_xops87t/icon

createPlasmicElementProxy;

export type PlasmicPlaceholder__VariantMembers = {
  styled: "largeIcon" | "cornerIcon" | "cornerIconSmall";
};
export type PlasmicPlaceholder__VariantsArgs = {
  styled?: SingleChoiceArg<"largeIcon" | "cornerIcon" | "cornerIconSmall">;
};
type VariantPropType = keyof PlasmicPlaceholder__VariantsArgs;
export const PlasmicPlaceholder__VariantProps = new Array<VariantPropType>(
  "styled"
);

export type PlasmicPlaceholder__ArgsType = {};
type ArgPropType = keyof PlasmicPlaceholder__ArgsType;
export const PlasmicPlaceholder__ArgProps = new Array<ArgPropType>();

export type PlasmicPlaceholder__OverridesType = {
  root?: Flex__<"div">;
  svg?: Flex__<"svg">;
};

export interface DefaultPlaceholderProps {
  styled?: SingleChoiceArg<"largeIcon" | "cornerIcon" | "cornerIconSmall">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPlaceholder__RenderFunc(props: {
  variants: PlasmicPlaceholder__VariantsArgs;
  args: PlasmicPlaceholder__ArgsType;
  overrides: PlasmicPlaceholder__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "styled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.styled
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    mode: useMode()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_semantic_css.plasmic_tokens,
        plasmic_global_css.plasmic_tokens,
        sty.root,
        {
          [plasmic_global_css.global_mode_dark]: hasVariant(
            globalVariants,
            "mode",
            "dark"
          ),
          [sty.rootstyled_cornerIconSmall]: hasVariant(
            $state,
            "styled",
            "cornerIconSmall"
          ),
          [sty.rootstyled_cornerIcon]: hasVariant(
            $state,
            "styled",
            "cornerIcon"
          ),
          [sty.rootstyled_largeIcon]: hasVariant($state, "styled", "largeIcon")
        }
      )}
    >
      <IconimageIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(projectcss.all, sty.svg, {
          [sty.svgstyled_cornerIconSmall]: hasVariant(
            $state,
            "styled",
            "cornerIconSmall"
          ),
          [sty.svgstyled_cornerIcon]: hasVariant(
            $state,
            "styled",
            "cornerIcon"
          ),
          [sty.svgstyled_largeIcon]: hasVariant($state, "styled", "largeIcon")
        })}
        role={"img"}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPlaceholder__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPlaceholder__VariantsArgs;
    args?: PlasmicPlaceholder__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPlaceholder__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPlaceholder__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPlaceholder__ArgProps,
          internalVariantPropNames: PlasmicPlaceholder__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPlaceholder__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPlaceholder";
  } else {
    func.displayName = `PlasmicPlaceholder.${nodeName}`;
  }
  return func;
}

export const PlasmicPlaceholder = Object.assign(
  // Top-level PlasmicPlaceholder renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicPlaceholder
    internalVariantProps: PlasmicPlaceholder__VariantProps,
    internalArgProps: PlasmicPlaceholder__ArgProps
  }
);

export default PlasmicPlaceholder;
/* prettier-ignore-end */
