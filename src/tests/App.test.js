import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import {act} from 'react-dom/test-utils';
import App from '../App';
import mockData from './Mock/mock.js';


beforeEach(() => {
  global.fetch = jest.fn(async () => ({
    json: async () => mockData,
  }));
})
describe('', () => {
  it('' ,()=> {
    render(<App />);
    const name = screen.getByTestId('name-filter');
    expect(name).toBeInTheDocument();
    const value = screen.getByTestId('value-filter');
    expect(value).toBeInTheDocument();
    const column = screen.getByTestId('column-filter');
    expect(column).toBeInTheDocument();
    const comparison = screen.getByTestId('comparison-filter');
    expect(comparison).toBeInTheDocument();
    const button = screen.getByTestId('button-filter');
    expect(button).toBeInTheDocument();
  })

  it('', async () => {
    const coluna = 'column-filter';
    const comparison = 'comparison-filter';
    const filtro = 'value-filter';
    const botaum = 'button-filter';
    const row = 'row';
    await act(async () => {render(<App />)});
    fireEvent.change(await screen.findByTestId(coluna), { target: { value: 'diameter' }});
    fireEvent.change(await screen.findByTestId(comparison), { target: { value: 'maior que' }});
    fireEvent.change(await screen.findByTestId(filtro), { target: { value: '8900' }});
    fireEvent.click(await screen.findByTestId(botaum));
    expect(await screen.findAllByRole(row)).toHaveLength(8);
  });
});
