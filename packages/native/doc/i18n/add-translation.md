## How to add a new French translation key

- in your component:

  - if you have direct access to the `Text` component that contains the translation, use the `Trans` component from `@lingui/macro`:

    ```tsx
    import { Trans } from '@lingui/macro';
    import { i18n } from '@lingui/core';
    export const MyComponent = () => (
      <View>
        <Text>
          <Trans comment="Here goes the description for the translator">
            The English translation
          </Trans>
        </Text>
      </View>
    );
    ```

  - else use `i18n` that you retrieved from `useLingui` hook in order to bind the translation with the provider:

    ```tsx
    import { useLingui } from '@lingui/react';
    import { t } from '@lingui/macro';

    const CheatCodes = () => {
      const { i18n } = useLingui();
      return (
        <Button
          title={i18n._(
            t({
              id: `Go to storybook`,
              comment: 'Title of the button to go to storybook',
            })
          )}
        />
      );
    };
    ```

- run `yarn translation:extract`
- add the French translation in the `src/locales/fr/messages.po` file
- run `yarn translations:compile`
