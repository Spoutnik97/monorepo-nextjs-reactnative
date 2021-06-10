import { i18n } from '@lingui/core';
import { findBestAvailableLanguage } from 'react-native-localize';
import { en, fr } from 'make-plural/plurals';
import englishCatalog from '../locales/en/messages';
import frenchCatalog from '../locales/fr/messages';

const fallbackLanguageTag = 'en';

const availableLanguagesTags = [fallbackLanguageTag, 'fr'] as const;
type availableLanguagesTagsType = typeof availableLanguagesTags;
export type availableLanguageTagType = availableLanguagesTagsType[number];

const translationCatalogs = {
  en: englishCatalog.messages,
  fr: frenchCatalog.messages,
};

export const getBestAvailableLanguageTag = (): availableLanguageTagType => {
  const bestAvailableLanguageConfig = findBestAvailableLanguage(availableLanguagesTags);
  return bestAvailableLanguageConfig
    ? bestAvailableLanguageConfig.languageTag
    : fallbackLanguageTag;
};

const bestAvailableLanguageTag = getBestAvailableLanguageTag();

i18n.loadLocaleData('en', { plurals: en });
i18n.loadLocaleData('fr', { plurals: fr });
i18n.load(translationCatalogs);
i18n.activate(bestAvailableLanguageTag || fallbackLanguageTag);
