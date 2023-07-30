/* eslint-disable react/function-component-definition */
import type { FC, PropsWithChildren } from 'react';

type StorybookTypographyTableProps<
  Variants extends Record<
    string,
    {
      fontSize: string | number;
      fontWeight: string | number;
      letterSpacing: string | number;
      lineHeight: string | number;
    }
  >,
  TProps extends PropsWithChildren<{ variant: any }>
> = {
  variants: Variants;

  Typography: FC<PropsWithChildren<TProps>>;
};

const StorybookTypographyTable = function <
  Variants extends Record<
    string,
    {
      fontSize: string | number;
      fontWeight: string | number;
      letterSpacing: string | number;
      lineHeight: string | number;
    }
  >,
  TProps extends PropsWithChildren<{ variant: any }>
>({ variants, Typography }: StorybookTypographyTableProps<Variants, TProps>) {
  return (
    <table style={{ flex: 1, padding: 16, paddingTop: 0 }}>
      <thead
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          background: 'white'
        }}
      >
        <tr>
          <th
            style={{
              paddingTop: 16,
              paddingBottom: 16,
              borderBottom: '1px solid',
              fontWeight: 'bold',
              width: '29%'
            }}
          >
            Type
          </th>
          <th
            style={{
              borderBottom: '1px solid',
              paddingTop: 16,
              paddingBottom: 16,
              fontWeight: 'bold',
              width: '20%'
            }}
          >
            Weight
          </th>
          <th
            style={{
              borderBottom: '1px solid',
              paddingTop: 16,
              paddingBottom: 16,
              fontWeight: 'bold',
              width: '20%'
            }}
          >
            Font size
          </th>
          <th
            style={{
              borderBottom: '1px solid',
              paddingTop: 16,
              paddingBottom: 16,
              fontWeight: 'bold',
              width: '20%'
            }}
          >
            Line height
          </th>
          <th
            style={{
              borderBottom: '1px solid',
              paddingTop: 16,
              paddingBottom: 16,
              fontWeight: 'bold',
              width: '20%'
            }}
          >
            Letter spacing
          </th>
        </tr>
      </thead>

      <tbody>
        {Object.entries(variants).map(
          ([name, { fontSize, fontWeight, letterSpacing, lineHeight }]) => (
            <tr key={name}>
              <td style={{ borderBottom: '1px solid #c3c3c3', padding: 8 }}>
                {/* @ts-expect-error Mismatch types */}
                <Typography variant={name}>
                  {toUppercaseFirstLetter(name)}
                </Typography>
              </td>
              <td
                style={{ borderBottom: '1px solid #c3c3c3', padding: 8 }}
                align='center'
              >
                {fontWeight}
              </td>
              <td
                style={{ borderBottom: '1px solid #c3c3c3', padding: 8 }}
                align='center'
              >
                {fontSize}
              </td>
              <td
                style={{ borderBottom: '1px solid #c3c3c3', padding: 8 }}
                align='center'
              >
                {lineHeight}
              </td>
              <td
                style={{ borderBottom: '1px solid #c3c3c3', padding: 8 }}
                align='center'
              >
                {letterSpacing}
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

const toUppercaseFirstLetter = (str: string) =>
  str.substring(0, 1).toUpperCase() + str.substring(1);

export { StorybookTypographyTable };
