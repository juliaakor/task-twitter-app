import { css, Interpolation, CSSObject, DefaultTheme } from 'styled-components';

export const breakpoints: Record<string, string> = {
  320: '320px',
  375: '375px',
  425: '425px',
  768: '768px',
  1024: '1024px',
  1440: '1440px',
  2560: '2560px',
};

type Breakpoints = keyof typeof breakpoints;

type Interpolations = Interpolation<DefaultTheme>[];
type Styles = CSSObject | TemplateStringsArray;
type MediaRecord = Record<Breakpoints, (styles: Styles, ...interpolations: Interpolations) => ReturnType<typeof css>>;

export const media: MediaRecord = Object.keys(breakpoints).reduce((acc, label) => {
  const breakpoint = label as Breakpoints;

  acc[breakpoint] = (styles: Styles, ...interpolations: Interpolations) => css`
    @media (max-width: ${breakpoints[breakpoint]}) {
      ${css(styles, ...interpolations)};
    }
  `;

  return acc;
}, {} as MediaRecord);
