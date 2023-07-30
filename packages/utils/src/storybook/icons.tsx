import copyToClipboard from 'copy-to-clipboard';

import type {
  ComponentProps,
  FC,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  ReactElement
} from 'react';

import { Children, cloneElement, isValidElement, useState } from 'react';

import { Colors } from './colors';

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

const Gallery: FC<{
  size: number;
  colorsMap: Record<string, string>;
  children: ReactElement<{ color: string; size: number }>[];
}> = ({ children, size = 20, colorsMap = {} }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ColorPicker colorsMap={colorsMap}>
      {({ picker, color }) => (
        <div
          style={{
            display: 'grid',
            width: '100%',
            gridTemplateColumns: '1fr max-content',
            gap: 36
          }}
        >
          <div>
            <input
              style={{ marginBottom: 12, padding: 4 }}
              type='search'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Search...'
            />

            <div
              style={{
                display: 'flex',
                gap: 16,
                flexWrap: 'wrap',
                alignContent: 'flex-start'
              }}
            >
              {Children.map(children, (child) => {
                if (!isValidElement(child)) {
                  return child;
                }

                if (child.type === Item) {
                  const { name } = child.props as ComponentProps<typeof Item>;

                  if (!name.toLowerCase().includes(searchQuery.toLowerCase()))
                    return null;
                }

                return cloneElement(child, { color, size });
              })}
            </div>
          </div>

          <Card
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'flex-start',
              maxHeight: '95vh',
              overflowY: 'auto'
            }}
          >
            {picker}
          </Card>
        </div>
      )}
    </ColorPicker>
  );
};

const Item: FC<{
  name: string;
  color?: string;
  size?: number;
  children: ReactElement<{ color: string; width: number; height: number }>;
}> = ({ name, children, color, size }) => (
  <Card
    style={{
      display: 'grid',
      width: 125,
      height: 125,
      gap: '4px',
      padding: 8,
      overflow: 'hidden',
      cursor: 'pointer'
    }}
    onClick={() => {
      copyToClipboard(`<${name} />`);
      alert('Copied');
    }}
  >
    <Card
      style={{
        display: 'grid',
        placeItems: 'center',
        height: 75,
        width: 75,
        margin: '0 auto',
        color
      }}
    >
      {Children.map(children, (child) => {
        if (!isValidElement(child)) {
          return child;
        }

        return cloneElement(child, { width: size, height: size });
      })}
    </Card>

    <div
      style={{
        textAlign: 'center',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontSize: 12
      }}
      title={name}
    >
      {name}
    </div>
  </Card>
);

const ColorPicker: FC<{
  children: (params: { picker: ReactNode; color: string }) => ReactNode;
  colorsMap: Record<string, string>;
}> = ({ children, colorsMap }) => {
  const [color, setColor] = useState('#000000');
  const [colorName, setColorName] = useState('');

  return (
    <>
      {children({
        picker: (
          <div>
            <label
              style={{
                display: 'grid',
                gap: 4,
                padding: 12,
                position: 'sticky',
                boxShadow:
                  'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',

                top: 0,
                background: 'white'
              }}
            >
              <span>
                Color:{' '}
                <span style={{ fontWeight: 'bold' }}>{colorName || color}</span>
              </span>

              <input
                style={{ width: '100%' }}
                type='color'
                value={color}
                onChange={(e) => {
                  setColor(e.target.value);
                  setColorName('');
                }}
              />
            </label>

            <Colors.Root columns={3}>
              {Object.entries(colorsMap).map(([name, value]) => (
                <Colors.Item
                  key={name}
                  onClick={() => {
                    setColor(value);
                    setColorName(name);
                  }}
                  name={name}
                  value={value}
                />
              ))}
            </Colors.Root>
          </div>
        ),
        color
      })}
    </>
  );
};

export { Gallery, Gallery as Root, Item };
