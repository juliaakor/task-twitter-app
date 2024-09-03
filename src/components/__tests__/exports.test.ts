import { ErrorBoundary } from '@components/ErrorBoundary';
import * as index from '@components/index';
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
});
