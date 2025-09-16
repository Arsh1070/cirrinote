import React from "react";

import type { CSSProperties } from "react";

interface LogoProps {
  src: string;
  alt: string;
  height?: number | undefined;
  width?: number | undefined;
  className?: string;
  style?: CSSProperties;
}

export const Logo: React.FC<LogoProps> = React.memo(
  ({ src, alt, height, width, className, style }) => {
    return (
      <div className={className ?? ""}>
        <img alt={alt} src={src} height={height} width={width} style={style} />
      </div>
    );
  }
);

Logo.displayName = "Logo";
