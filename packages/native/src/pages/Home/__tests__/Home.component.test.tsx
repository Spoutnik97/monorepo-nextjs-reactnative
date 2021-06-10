import { fireEvent } from 'react-native-testing-library';
import { wrapWithProvidersAndRender } from '../../../../jest/wrapWithProvidersAndRender';
import { Home } from '../Home.component';

describe('Home component', () => {
  const navigation = {
    navigate: jest.fn(),
  } as any; // eslint-disable-line @typescript-eslint/no-explicit-any

  it('should render correctly', () => {
    const { component: home } = wrapWithProvidersAndRender({
      Component: Home,
      props: { navigation },
    });
    expect(home).toMatchSnapshot();
  });

  it('should have a button to go to the Login', () => {
    const { component: home } = wrapWithProvidersAndRender({
      Component: Home,
      props: { navigation },
    });
    const LoginButton = home.getByTestId('loginButton');
    fireEvent.press(LoginButton);
    expect(navigation.navigate).toHaveBeenCalledWith('Login');
  });
});
