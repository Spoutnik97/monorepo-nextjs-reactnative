import React, { FunctionComponent } from 'react';
import { Button, View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'; // @redux
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { t, Trans } from '@lingui/macro';

import { CheatCodesButton } from '../../atoms/CheatCodesButton';
import { RootStackParamList } from '../../navigation';
import { isLoadingSelector } from '../../redux/LoadingStatus/selectors'; // @redux
import { startLoading, finishLoading } from '../../redux/LoadingStatus'; // @redux
import { setToken } from '../../redux/Authentication'; // @redux
import { tokenSelector } from '../../redux/Authentication/selectors'; // @redux-persist-sensitive
import { useLingui } from '@lingui/react';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
const LOADER_NAME = 'demoLoader';

type Props = {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
};
export const Login: FunctionComponent<Props> = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector(LOADER_NAME));
  const authenticationToken = useSelector(tokenSelector);
  const { i18n } = useLingui();

  const goToHomePage = (): void => {
    navigation.navigate('Home');
  };

  const toggleLoader = () => {
    if (!isLoading) {
      dispatch(startLoading(LOADER_NAME));
    } else {
      dispatch(finishLoading(LOADER_NAME));
    }
  };

  const generateAuthenticationToken = () => {
    const randomToken = `token-${Math.floor(Math.random() * 100 + 1)}`;
    dispatch(setToken(randomToken));
  };

  return (
    <View style={styles.container}>
      <Text>
        <Trans comment="The title of the login page">Login page</Trans>
      </Text>
      <Button
        testID="homepageButton"
        title={i18n._(
          t({
            id: 'Go to Home Page',
            comment: 'The title of button to go to the home page',
          })
        )}
        onPress={goToHomePage}
      />
      <CheatCodesButton navigation={navigation} />
      <Text>
        <Trans comment="The title of button to test redux">Redux test</Trans>
      </Text>
      <Button
        testID="tokenButton"
        title={i18n._(
          t({
            id: 'Generate a random token',
            comment: 'The title of button to generate a random token',
          })
        )}
        onPress={generateAuthenticationToken}
      />
      <Text>{authenticationToken}</Text>
      <Button
        testID="loaderButton"
        title={i18n._(
          t({ id: 'Toggle selector', comment: 'The title of button to toggle loader' })
        )}
        onPress={toggleLoader}
      />
      {isLoading && <ActivityIndicator testID="demoLoader" />}
      <Text>{route.params && route.params.userId}</Text>
    </View>
  );
};
