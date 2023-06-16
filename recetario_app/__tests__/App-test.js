import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';

jest.mock('react-native-fontawesome', () => ({
    FontAwesomeIcon: ''
}))

describe('Home Screen', () => {
    it('Should redirect to recipe details screen', () => {
        const navigation = { navigate: () => { } };
        spyOn(navigation, 'navigate');

        const screen = render(<index />);

        const recipeContainer = screen.getByTestId('recipeContainer');

        fireEvent.press(recipeContainer);

        expect(navigation.navigate).toHaveBeenCalledWith('DetailScreen');
    });
});
