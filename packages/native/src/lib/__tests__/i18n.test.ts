import { findBestAvailableLanguage } from 'react-native-localize';
import { i18n } from '@lingui/core';

describe('i18n', () => {
  describe('_', () => {
    it('translates to english', () => {
      expect(findBestAvailableLanguage).toHaveBeenCalled();
      expect(i18n._(`Welcome to BAM!`)).toEqual('Welcome to BAM!');
    });
    it('translates to french when language is set to french', () => {
      i18n.activate('fr');
      expect(findBestAvailableLanguage).toHaveBeenCalled();
      expect(i18n._(`Welcome to BAM!`)).toEqual('Bienvenue chez BAM');
    });
  });
});
