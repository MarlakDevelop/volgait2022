import { render, screen } from '@testing-library/react';
import React from "react";
import SelectionCardComponent from "components/SelectionCard/SelectionCard.component";

test('renders selection card', () => {
  const content = 'Привет'
  render(<SelectionCardComponent active={false}>{content}</SelectionCardComponent>)
  const selectionCard = screen.getByTestId('selectionCard')

  expect(selectionCard).toBeInTheDocument()
})

test('renders active selection card', () => {
  const content = 'Привет'
  render(<SelectionCardComponent active={true}>{content}</SelectionCardComponent>)
  const selectionCard = screen.getByTestId('selectionCard')

  expect(selectionCard).toBeInTheDocument()
  expect(selectionCard).toHaveClass('active')
})
