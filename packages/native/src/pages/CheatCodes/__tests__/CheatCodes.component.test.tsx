import { act, fireEvent } from 'react-native-testing-library';
import { CheatCodes } from '../CheatCodes.component';
import { env } from '../../../environment';
import { wrapWithProvidersAndRender } from '../../../../jest/wrapWithProvidersAndRender';
import { i18n } from '@lingui/core';
import { tick } from '../../../__tests__/utils.test';

jest.mock('../../../environment', () => ({
  env: {
    FEATURE_FLAG_CODE_PUSH: true,
  },
}));

describe('CheatCodes component', () => {
  const navigation = {
    dispatch: jest.fn(),
  } as any; // eslint-disable-line @typescript-eslint/no-explicit-any

  it('should render correctly', async () => {
    const { component: cheatCodes } = wrapWithProvidersAndRender({
      Component: CheatCodes,
      props: { navigation },
    });
    await tick();
    expect(cheatCodes).toMatchSnapshot();
  });

  it('change local to fr when frLanguageButton is pressed', async () => {
    const { component: cheatCodes } = wrapWithProvidersAndRender({
      Component: CheatCodes,
      props: { navigation },
    });
    await tick();
    act(() => {
      i18n.activate('en');
    });
    expect(() => cheatCodes.getByText('Aller au storybook')).toThrowError();
    cheatCodes.getByText('Go to storybook');
    const Button = cheatCodes.getByTestId('frLanguageButton');
    act(() => {
      fireEvent.press(Button);
    });
    expect(() => cheatCodes.getByText('Go to storybook')).toThrowError();
    cheatCodes.getByText('Aller au storybook');
  });

  it('should not display a CodePush button when the associated feature flag is disabled', async () => {
    env.FEATURE_FLAG_CODE_PUSH = false;
    const { component: cheatCodes } = wrapWithProvidersAndRender({
      Component: CheatCodes,
      props: { navigation },
    });
    await tick();
    expect(() => cheatCodes.getByText('Check update')).toThrowError();
  });
});
