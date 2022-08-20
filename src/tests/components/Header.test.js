import { render, screen } from '@testing-library/react';
import HeaderComponent from 'components/Header/Header.component';
import React from "react";

test('renders header on preview', () => {
  render(<HeaderComponent screen={0} screensCount={10}/>)
  const logo = screen.getByTestId('logo')
  const nextButton = screen.getByTestId('nextButton')

  expect(logo).toBeInTheDocument()
  expect(nextButton).toBeInTheDocument()
})

test('renders header on screens', () => {
  render(<HeaderComponent screen={5} screensCount={10}/>)
  const backButton = screen.getByTestId('backButton')
  const closeButton = screen.getByTestId('closeButton')

  expect(backButton).toBeInTheDocument()
  expect(closeButton).toBeInTheDocument()

  const progress = screen.getByTestId('progress')
  expect(progress).toBeInTheDocument()
})

test('renders header on final page', () => {
  render(<HeaderComponent screen={11} screensCount={10}/>)
  const logo = screen.getByTestId('logo')
  const closeButton = screen.getByTestId('closeButton')

  expect(logo).toBeInTheDocument()
  expect(closeButton).toBeInTheDocument()

  const progress = screen.getByTestId('progress')
  expect(progress).toBeInTheDocument()
})
