import { render, screen } from '@testing-library/react';

import Button, { ButtonTheme } from './Button';

describe('Button', () => {
  test('render component', () => {
    render(<Button>Test</Button>);

    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('render component with theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
