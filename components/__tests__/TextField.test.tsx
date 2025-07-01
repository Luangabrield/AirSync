import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TextField from '../TextField';

describe('TextField', () => {
  it('renders label correctly', () => {
    const { getByText } = render(<TextField label="Username" />);
    
    expect(getByText('Username')).toBeTruthy();
  });

  it('renders error message correctly', () => {
    const { getByText } = render(<TextField error="Required field" />);
    
    expect(getByText('Required field')).toBeTruthy();
  });

  it('applies error style when error is present', () => {
    const { getByPlaceholderText } = render(<TextField error="Required field" placeholder="Enter text" />);
    
    const input = getByPlaceholderText('Enter text');
    expect(input.props.style).toContainEqual({ borderColor: 'red' });
  });

  it('renders TextInput correctly', () => {
    const { getByPlaceholderText } = render(<TextField placeholder="Enter text" />);
    
    expect(getByPlaceholderText('Enter text')).toBeTruthy();
  });
});