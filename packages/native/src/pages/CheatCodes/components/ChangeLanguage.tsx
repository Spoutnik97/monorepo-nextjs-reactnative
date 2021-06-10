import { useLingui } from '@lingui/react';
import React from 'react';
import { Button, View } from 'react-native';
import { availableLanguageTagType } from '../../../lib/i18n';

export const ChangeLanguage = () => {
  const { i18n } = useLingui();
  const changeLanguage = (value: availableLanguageTagType) => () => {
    i18n.activate(value);
  };

  return (
    <View>
      <Button
        title="FR"
        testID="frLanguageButton"
        onPress={changeLanguage('fr')}
        disabled={i18n.locale === 'fr'}
      />
      <Button
        title="EN"
        testID="enLanguageButton"
        onPress={changeLanguage('en')}
        disabled={i18n.locale === 'en'}
      />
    </View>
  );
};
