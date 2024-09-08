import { Dropdown } from '@components/Dropdown';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { Footer } from '@components/Footer';
import * as index from '@components/index';
import { Loader } from '@components/Loader';
import { OutsideClickProvider } from '@components/OutsideClickProvider';
import { PortalProvider, usePortal } from '@components/PortalProvider';
import { ThemeContext } from '@components/ThemeContext';

describe('components folder index file exports', () => {
  it('should export ErrorBoundary from index', () => {
    expect(index.ErrorBoundary).toBe(ErrorBoundary);
  });

  it('should export OutsideClickProvider from index', () => {
    expect(index.OutsideClickProvider).toBe(OutsideClickProvider);
  });

  it('should export PortalProvider from index', () => {
    expect(index.PortalProvider).toBe(PortalProvider);
  });

  it('should export usePortal from index', () => {
    expect(index.usePortal).toBe(usePortal);
  });

  it('should export ThemeContext from index', () => {
    expect(index.ThemeContext).toBe(ThemeContext);
  });

  it('should export Footer from index', () => {
    expect(index.Footer).toBe(Footer);
  });

  it('should export Loader from index', () => {
    expect(index.Loader).toBe(Loader);
  });

  it('should export Dropdown from index', () => {
    expect(index.Dropdown).toBe(Dropdown);
  });
});
