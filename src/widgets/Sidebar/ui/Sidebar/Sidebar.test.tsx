import { fireEvent, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import renderWithTranslation from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  test('render component', () => {
    const SidebarWithTranslation = withTranslation()(Sidebar);
    renderWithTranslation(<SidebarWithTranslation />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('component toggle', () => {
    renderWithTranslation(<Sidebar />);
    const sidebar = screen.getByTestId('sidebar');
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(sidebar).toBeInTheDocument();

    fireEvent.click(toggleBtn);

    expect(sidebar).toHaveClass('collapsed');
  });
});
