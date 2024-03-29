// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ddwNfuV1d3sS7wxTc5aLdh
// Component: Gs3MCCEEfJ-V

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

import MenuBarItem from "../../MenuBarItem"; // plasmic-import: BZyQOLb-FXVn/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_global_css from "../global/plasmic_global.module.css"; // plasmic-import: 8hqEu73KETDHFVi1kzitzB/projectcss
import plasmic_semantic_css from "../semantic/plasmic_semantic.module.css"; // plasmic-import: b1udyYxbVnA5YsUcRMaXei/projectcss
import plasmic_components_css from "../components/plasmic_components.module.css"; // plasmic-import: 5ccFCnH7of5M9MPpSs86Uj/projectcss
import projectcss from "./plasmic_patterns.module.css"; // plasmic-import: ddwNfuV1d3sS7wxTc5aLdh/projectcss
import sty from "./PlasmicMenuBar.module.css"; // plasmic-import: Gs3MCCEEfJ-V/css

createPlasmicElementProxy;

export type PlasmicMenuBar__VariantMembers = {
  itemCount: "_3" | "_4" | "_5";
};
export type PlasmicMenuBar__VariantsArgs = {
  itemCount?: SingleChoiceArg<"_3" | "_4" | "_5">;
};
type VariantPropType = keyof PlasmicMenuBar__VariantsArgs;
export const PlasmicMenuBar__VariantProps = new Array<VariantPropType>(
  "itemCount"
);

export type PlasmicMenuBar__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot4?: React.ReactNode;
};
type ArgPropType = keyof PlasmicMenuBar__ArgsType;
export const PlasmicMenuBar__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2",
  "slot3",
  "slot4"
);

export type PlasmicMenuBar__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultMenuBarProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot4?: React.ReactNode;
  itemCount?: SingleChoiceArg<"_3" | "_4" | "_5">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMenuBar__RenderFunc(props: {
  variants: PlasmicMenuBar__VariantsArgs;
  args: PlasmicMenuBar__ArgsType;
  overrides: PlasmicMenuBar__OverridesType;
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
        path: "itemCount",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.itemCount
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

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_global_css.plasmic_tokens,
        plasmic_semantic_css.plasmic_tokens,
        plasmic_components_css.plasmic_tokens,
        sty.root,
        { [sty.rootitemCount__5]: hasVariant($state, "itemCount", "_5") }
      )}
    >
      {renderPlasmicSlot({
        defaultContents: (
          <MenuBarItem
            className={classNames("__wab_instance", sty.menuBarItem__dXx)}
            styled={"onAccent"}
          />
        ),

        value: args.children
      })}
      {renderPlasmicSlot({
        defaultContents: (
          <MenuBarItem
            className={classNames("__wab_instance", sty.menuBarItem__vonk7)}
          />
        ),

        value: args.slot
      })}
      {renderPlasmicSlot({
        defaultContents: (
          <MenuBarItem
            className={classNames("__wab_instance", sty.menuBarItem___6Cqgh)}
          />
        ),

        value: args.slot2
      })}
      {renderPlasmicSlot({
        defaultContents: (
          <MenuBarItem
            className={classNames("__wab_instance", sty.menuBarItem__oSKho)}
          />
        ),

        value: args.slot3
      })}
      {renderPlasmicSlot({
        defaultContents: (
          <MenuBarItem
            className={classNames("__wab_instance", sty.menuBarItem__eekPk)}
          />
        ),

        value: args.slot4
      })}
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMenuBar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMenuBar__VariantsArgs;
    args?: PlasmicMenuBar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMenuBar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMenuBar__ArgsType,
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
          internalArgPropNames: PlasmicMenuBar__ArgProps,
          internalVariantPropNames: PlasmicMenuBar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMenuBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMenuBar";
  } else {
    func.displayName = `PlasmicMenuBar.${nodeName}`;
  }
  return func;
}

export const PlasmicMenuBar = Object.assign(
  // Top-level PlasmicMenuBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicMenuBar
    internalVariantProps: PlasmicMenuBar__VariantProps,
    internalArgProps: PlasmicMenuBar__ArgProps
  }
);

export default PlasmicMenuBar;
/* prettier-ignore-end */
