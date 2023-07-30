import type { CSSProperties, FC, PropsWithChildren } from 'react';

type LayoutProps = PropsWithChildren<
  Partial<{
    className: string;
    style: CSSProperties;

    p: string | number;
    px: string | number;
    py: string | number;
    pr: string | number;
    pl: string | number;
    pt: string | number;
    pb: string | number;

    m: string | number;
    mx: string | number;
    my: string | number;
    mr: string | number;
    ml: string | number;
    mt: string | number;
    mb: string | number;
  }>
>;

const Box: FC<LayoutProps> = ({
  pb,
  pl,
  pr,
  pt,
  m,
  mb,
  ml,
  mr,
  mt,
  mx,
  my,
  p,
  py,
  px,
  style = {},
  ...props
}) => (
  <div
    style={{
      paddingTop: pt ?? py ?? p,
      paddingBottom: pb ?? py ?? p,
      paddingLeft: pl ?? px ?? p,
      paddingRight: pr ?? px ?? p,
      marginTop: mt ?? my ?? m,
      marginBottom: mb ?? my ?? m,
      marginLeft: ml ?? mx ?? m,
      marginRight: mr ?? mx ?? m,
      ...style
    }}
    {...props}
  />
);

const Flex: FC<
  LayoutProps & { center?: boolean; flex?: boolean; gap?: number }
> = ({
  pb,
  pl,
  pr,
  pt,
  m,
  mb,
  ml,
  mr,
  mt,
  mx,
  my,
  p,
  py,
  px,
  center,
  flex,
  gap,
  style = {},
  ...props
}) => (
  <div
    style={{
      display: 'flex',
      alignItems: center ? 'center' : undefined,
      justifyContent: center ? 'center' : undefined,

      flex: flex ? 1 : undefined,

      paddingTop: pt ?? py ?? p,
      paddingBottom: pb ?? py ?? p,
      paddingLeft: pl ?? px ?? p,
      paddingRight: pr ?? px ?? p,
      marginTop: mt ?? my ?? m,
      marginBottom: mb ?? my ?? m,
      marginLeft: ml ?? mx ?? m,
      marginRight: mr ?? mx ?? m,

      gap,
      ...style
    }}
    {...props}
  />
);

const Grid: FC<LayoutProps & { gap?: number }> = ({
  pb,
  pl,
  pr,
  pt,
  m,
  mb,
  ml,
  mr,
  mt,
  mx,
  my,
  p,
  py,
  px,
  gap,
  style = {},
  ...props
}) => (
  <div
    style={{
      display: 'grid',
      paddingTop: pt ?? py ?? p,
      paddingBottom: pb ?? py ?? p,
      paddingLeft: pl ?? px ?? p,
      paddingRight: pr ?? px ?? p,
      marginTop: mt ?? my ?? m,
      marginBottom: mb ?? my ?? m,
      marginLeft: ml ?? mx ?? m,
      marginRight: mr ?? mx ?? m,
      gap,
      ...style
    }}
    {...props}
  />
);

export { Box, Flex, Grid };
