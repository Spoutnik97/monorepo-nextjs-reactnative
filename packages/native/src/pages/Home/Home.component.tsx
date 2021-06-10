import React, { FunctionComponent, useCallback } from 'react';
import { Button, StyleSheet, View, Text, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { t, Trans } from '@lingui/macro';

import { RootStackParamList } from '../../navigation';
import { useLingui } from '@lingui/react';
import { SharedButton } from 'shared/components/SharedButton';
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export const Home: FunctionComponent<Props> = ({ navigation }) => {
  const goToLoginPage = useCallback((): void => {
    navigation.navigate('Login');
  }, []);
  const goToLoginPageWithParams = useCallback((): void => {
    navigation.navigate('Login', { userId: 'I have been Set by params' });
  }, []);

  const { i18n } = useLingui();

  return (
    <View style={styles.container}>
      <Text>
        <Trans comment="Welcome message on Home page">Welcome to BAM!</Trans>
      </Text>
      <Button
        testID="loginButton"
        title={i18n._(t({ id: 'Go to Login Page', comment: 'Title of the go to login button' }))}
        onPress={goToLoginPage}
      />
      <SharedButton onPress={() => Alert.alert('Coucou')} title="Press my shared button" />
      <Button
        title={i18n._(
          t({
            id: 'Go to Login Page with Params',
            comment: 'Title of the go to login with params button',
          })
        )}
        onPress={goToLoginPageWithParams}
      />
    </View>
  );
};
