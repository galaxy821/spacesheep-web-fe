import * as React from "react";

type BlockProps = {
  size: number;
};

const Block = ({ size }: BlockProps) => {
  return <div style={{ marginTop: `${size}px` }}></div>;
};

export default Block;
