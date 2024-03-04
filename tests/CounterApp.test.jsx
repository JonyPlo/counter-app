import { render, screen, fireEvent } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en CounterApp', () => {
  const initialValue = 10;

  test('Debe de hacer match con el snapshot', () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el valor inicial de 100 <CounterApp value={100} />', () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy();
    // expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100');
  });

  test('Debe de incrementar con el boton +1', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('+1')); // fireEvent es un objeto de @testing-library/react que lo que hace es disparar eventos
    expect(screen.getByText('11')).toBeTruthy();
  });

  test('Debe de decrementar con el boton -1', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('-1'));
    screen.debug();
    expect(screen.getByText('9')).toBeTruthy();
  });

  test('Debe de funcionar el boton de reset', () => {
    render(<CounterApp value={355} />);
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    // fireEvent.click(screen.getByText('Reset'))
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
    expect(screen.getByText(355)).toBeTruthy();
  });
});
