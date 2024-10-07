declare module "react-diamond" {
  import { FC } from "react";

  export interface DiamondItem {
    image: string;
    title: string;
    onClick: () => void;
  }

  export interface DiamondProps {
    items: DiamondItem[];
  }

  const Diamond: FC<DiamondProps>;
  export default Diamond;
}
