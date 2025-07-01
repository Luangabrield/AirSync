import React from 'react';
import { render } from '@testing-library/react-native';
import PassengerSectionList, { Passenger } from '../PassengerSectionList';
import groupPassengersByCountry from '../../services/helpers/groupPassengers';

jest.mock('../../services/helpers/groupPassengers');

const mockPassengers: Passenger[] = [
  {
    id: 1,
    passenger_name: 'John Doe',
    passenger_avatar: 'https://example.com/avatar1.png',
    origin: 'USA',
    destination: 'Canada',
  },
  {
    id: 2,
    passenger_name: 'Jane Smith',
    passenger_avatar: 'https://example.com/avatar2.png',
    origin: 'USA',
    destination: 'Mexico',
  },
];

describe('PassengerSectionList', () => {
  beforeEach(() => {
    (groupPassengersByCountry as jest.Mock).mockReturnValue([
      {
        title: 'USA',
        data: mockPassengers,
      },
    ]);
  });

  it('renders correctly', () => {
    const { getByText } = render(<PassengerSectionList passengers={mockPassengers} />);

    expect(getByText('AirSync')).toBeTruthy();

    expect(getByText('USA')).toBeTruthy();

    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('Jane Smith')).toBeTruthy();
  });

  it('renders passenger destinations correctly', () => {
    const { getByText } = render(<PassengerSectionList passengers={mockPassengers} />);

    expect(getByText('Canada')).toBeTruthy();
    expect(getByText('Mexico')).toBeTruthy();
  });
});