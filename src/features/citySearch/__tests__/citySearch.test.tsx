import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { CitySearch } from '../citySearch.component';

describe('CitySearch Component', () => {
    const mockCityData = {
        name: 'London',
        country: 'UK',
        temperature: 20,
    };

    const mockOnSearch = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders correctly with initial empty state', () => {
        const { getByTestId, queryByTestId } = render(
            <CitySearch onSearch={mockOnSearch} />
        );

        expect(getByTestId('city-input')).toBeTruthy();
        expect(queryByTestId('loading-indicator')).toBeNull();
        expect(queryByTestId('error-message')).toBeNull();
        expect(queryByTestId('city-data')).toBeNull();
    });

    it('shows error when searching with empty input', async () => {
        const { getByTestId, findByTestId } = render(
            <CitySearch onSearch={mockOnSearch} />
        );

        const input = getByTestId('city-input');
        fireEvent(input, 'submitEditing');

        const errorMessage = await findByTestId('error-message');
        expect(errorMessage.props.children).toBe('Please enter a city name');
        expect(mockOnSearch).not.toHaveBeenCalled();
    });

    it('displays loading indicator while searching', async () => {
        mockOnSearch.mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)));
        
        const { getByTestId } = render(
            <CitySearch onSearch={mockOnSearch} />
        );

        const input = getByTestId('city-input');
        fireEvent.changeText(input, 'London');
        fireEvent(input, 'submitEditing');

        expect(getByTestId('loading-indicator')).toBeTruthy();
    });

    it('displays city data when search is successful', async () => {
        mockOnSearch.mockResolvedValue(mockCityData);

        const { getByTestId, findByTestId } = render(
            <CitySearch onSearch={mockOnSearch} />
        );

        const input = getByTestId('city-input');
        fireEvent.changeText(input, 'London');
        fireEvent(input, 'submitEditing');

        const cityData = await findByTestId('city-data');
        expect(cityData).toBeTruthy();
        expect(mockOnSearch).toHaveBeenCalledWith('London');
    });

    it('displays error message when city is not found', async () => {
        mockOnSearch.mockResolvedValue(null);

        const { getByTestId, findByTestId } = render(
            <CitySearch onSearch={mockOnSearch} />
        );

        const input = getByTestId('city-input');
        fireEvent.changeText(input, 'NonExistentCity');
        fireEvent(input, 'submitEditing');

        const errorMessage = await findByTestId('error-message');
        expect(errorMessage.props.children).toBe('City not found');
    });

    it('displays error message when search fails', async () => {
        mockOnSearch.mockRejectedValue(new Error('Search failed'));

        const { getByTestId, findByTestId } = render(
            <CitySearch onSearch={mockOnSearch} />
        );

        const input = getByTestId('city-input');
        fireEvent.changeText(input, 'London');
        fireEvent(input, 'submitEditing');

        const errorMessage = await findByTestId('error-message');
        expect(errorMessage.props.children).toBe('Error searching for city');
    });

    it('clears previous error when starting new search', async () => {
        mockOnSearch.mockResolvedValue(mockCityData);

        const { getByTestId, queryByTestId } = render(
            <CitySearch onSearch={mockOnSearch} />
        );

        // First, trigger an error
        const input = getByTestId('city-input');
        fireEvent(input, 'submitEditing');
        
        expect(queryByTestId('error-message')).toBeTruthy();

        // Now do a valid search
        fireEvent.changeText(input, 'London');
        fireEvent(input, 'submitEditing');

        await waitFor(() => {
            expect(queryByTestId('error-message')).toBeNull();
        });
    });
});
