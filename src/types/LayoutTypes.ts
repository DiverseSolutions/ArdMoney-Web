export type LayoutAlignmentType = "left" | "center" | "right";

export type DefaultLayoutProp = {
  fullHeight?: boolean;
  width?: string;
  alignment?: LayoutAlignmentType;
  children?: React.ReactNode;
  handleModalClose?: () => void;
};
