import { fireEvent, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { componentRender } from 'shared/config/tests';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  test('render component', () => {
    const SidebarWithTranslation = withTranslation()(Sidebar);
    componentRender(<SidebarWithTranslation />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('component toggle', () => {
    componentRender(<Sidebar />);
    const sidebar = screen.getByTestId('sidebar');
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(sidebar).toBeInTheDocument();

    fireEvent.click(toggleBtn);

    expect(sidebar).toHaveClass('collapsed');
  });
});
