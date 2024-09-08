import * as index from '@components/common';
import { Button } from '@components/common/Button';
import { Form } from '@components/common/Form';
import { Input } from '@components/common/Input';
import { Select } from '@components/common/Select';
import { Switch } from '@components/common/Switch';

describe('components common folder index file exports', () => {
  it('should export Button from index', () => {
    expect(index.Button).toBe(Button);
  });

  it('should export Form from index', () => {
    expect(index.Form).toBe(Form);
  });

  it('should export Input from index', () => {
    expect(index.Input).toBe(Input);
  });

  it('should export Select from index', () => {
    expect(index.Select).toBe(Select);
  });

  it('should export Switch from index', () => {
    expect(index.Switch).toBe(Switch);
  });
});
