import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PixelToRem from '.';

describe('PixelToRem Component', () => {
  test('renders correctly', () => {
    render(<PixelToRem />);
    expect(screen.getByLabelText(/Base \(font-size\):/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Pixels \(px\):/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Rems \(rem\):/i)).toBeInTheDocument();
  });

  test('converts px to rem', () => {
    render(<PixelToRem />);
    const baseInput = screen.getByLabelText(
      /Base \(font-size\):/i
    ) as HTMLInputElement;
    const pxInput = screen.getByLabelText(
      /Pixels \(px\):/i
    ) as HTMLInputElement;
    const remInput = screen.getByLabelText(
      /Rems \(rem\):/i
    ) as HTMLInputElement;

    fireEvent.change(baseInput, { target: { value: '16' } });
    fireEvent.change(pxInput, { target: { value: '32' } });

    expect(remInput.value).toBe('2.0000');
  });

  test('converts rem to px', () => {
    render(<PixelToRem />);
    const baseInput = screen.getByLabelText(
      /Base \(font-size\):/i
    ) as HTMLInputElement;
    const pxInput = screen.getByLabelText(
      /Pixels \(px\):/i
    ) as HTMLInputElement;
    const remInput = screen.getByLabelText(
      /Rems \(rem\):/i
    ) as HTMLInputElement;

    fireEvent.change(baseInput, { target: { value: '16' } });
    fireEvent.change(remInput, { target: { value: '2' } });

    expect(pxInput.value).toBe('32.00');
  });

  test('updates base value and recalculates', () => {
    render(<PixelToRem />);
    const baseInput = screen.getByLabelText(
      /Base \(font-size\):/i
    ) as HTMLInputElement;
    const pxInput = screen.getByLabelText(
      /Pixels \(px\):/i
    ) as HTMLInputElement;
    const remInput = screen.getByLabelText(
      /Rems \(rem\):/i
    ) as HTMLInputElement;

    fireEvent.change(pxInput, { target: { value: '32' } });
    fireEvent.change(baseInput, { target: { value: '20' } });

    expect(remInput.value).toBe('1.6000');
  });
});
