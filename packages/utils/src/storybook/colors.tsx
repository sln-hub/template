import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

const Card: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({
  style = {},
  ...props
}) => (
  <div
    style={{
      boxShadow:
        'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
      borderRadius: 2,
      ...style
    }}
    {...props}
  />
);

const ColorsRoot: FC<PropsWithChildren<{ columns?: number }>> = ({
  columns = 3,
  children
}) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: 8,
      padding: 12
    }}
  >
    {children}
  </div>
);

const ColorsItem: FC<
  { name: string; value: string } & HTMLAttributes<HTMLDivElement>
> = ({ name, value, ...props }) => (
  <Card
    {...props}
    style={{
      display: 'grid',
      alignItems: 'center',
      gap: 8,
      padding: 12,
      ...(props.style ?? {})
    }}
  >
    <div style={{ textAlign: 'center', fontWeight: 'bold' }}>{name}</div>

    <div
      style={{
        display: 'grid',
        placeItems: 'center',
        gap: 4
      }}
    >
      <Card
        style={{
          width: 50,
          height: 50,
          background: value,
          borderRadius: 4
        }}
      />
      <div>{value}</div>
    </div>
  </Card>
);

const Colors = {
  Root: ColorsRoot,
  Item: ColorsItem
};

export { ColorsItem, ColorsRoot, Colors };
