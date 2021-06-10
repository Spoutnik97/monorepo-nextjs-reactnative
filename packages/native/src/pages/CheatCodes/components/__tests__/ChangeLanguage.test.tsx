import { act, fireEvent } from 'react-native-testing-library';
import { ChangeLanguage } from '../ChangeLanguage';
import { wrapWithProvidersAndRender } from '../../../../../jest/wrapWithProvidersAndRender';
import { i18n } from '@lingui/core';

describe('ChangeLanguage component', () => {
  it('changes language to french when FR in selected', async () => {
    const { component: changeLanguage } = wrapWithProvidersAndRender({
      Component: ChangeLanguage,
    });
    const Button = changeLanguage.getByTestId('frLanguageButton');

    act(() => {
      fireEvent.press(Button);
    });

    expect(i18n.locale).toBe('fr');
  });
});
