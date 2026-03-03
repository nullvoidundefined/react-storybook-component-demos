export const textClassNames = [
  'header1',
  'header2',
  'header3',
  'body1regular',
  'body2regular',
  'body3regular',
  'body1medium',
  'body2medium',
  'body3medium',
  'body1bold',
  'body2bold',
  'body3bold',
  'body1link',
  'body2link',
  'body3link',
  'subheader1',
  'subheader2',
  'subheader3',
] as const;

export type TextClassName = (typeof textClassNames)[number];
