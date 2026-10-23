import type { ImageProps as NextImageProps } from "next/image";
import NextImage from "next/image";
import type { ReactNode } from "react";

type ImageProps = Omit<NextImageProps, "src" | "alt" | "width" | "height"> & {
  src?: NextImageProps["src"];
  alt?: string;
  width?: number;
  height?: number;
  variant?: string;
  contentKey?: string;
  children?: ReactNode;
};

export function Image({
  className,
  children: _children,
  variant: _variant,
  contentKey: _contentKey,
  src = "",
  alt = "",
  width = 100,
  height = 100,
  ...props
}: ImageProps) {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...props}
    />
  );
}
