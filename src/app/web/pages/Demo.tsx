import React from 'react';
import {
  ScrollView,
  YStack,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Text,
  Card,
  Separator,
  Theme,
  XStack,
  View,
  type ThemeName,
  type SizeTokens,
} from 'tamagui';
import { Airplay } from '@tamagui/lucide-icons';
import { Button } from '@/components';
import { Provider } from '@/Provider';

const modes: ThemeName[] = ['light', 'dark'];
const themes: ThemeName[] = ['blue', 'green', 'yellow', 'red'];
const sizes: SizeTokens[] = ['$sm', '$md', '$lg', '$4xl'];

export const Demo: React.FC = () => {
  return (
    <Provider>
      <ScrollView>
        <YStack>
          <YStack padding="$xl" margin="auto">
            <H1>Welcome to Skylight v3</H1>
            <H2>Welcome to Skylight v3</H2>
            <H3>Welcome to Skylight v3</H3>
            <H4>Welcome to Skylight v3</H4>
            <H5>Welcome to Skylight v3</H5>
            <H6>Welcome to Skylight v3</H6>
            <Text>
              A modern React UI component library built on Tamagui with comprehensive design tokens,
              themes, and flexible components.
            </Text>
          </YStack>
          {modes.map(mode => (
            <Theme key={mode} name={mode}>
              <Card>
                <YStack gap="$lg" padding="$xl" margin="auto">
                  <H2>Button Component {mode}</H2>
                  {themes.map(theme => (
                    <View key={theme}>
                      <H3>Button ({theme})</H3>
                      <XStack gap="$md">
                        {sizes.map(size => (
                          <Button size={size} theme={theme} key={size}>
                            <Button.Text>{size} Button</Button.Text>
                          </Button>
                        ))}
                        <Button size="$lg" theme={theme} disabled>
                          <Button.Text>Disabled</Button.Text>
                        </Button>
                        <Button size="$lg" theme={theme} disabled variant="outlined">
                          <Button.Text>Disabled</Button.Text>
                        </Button>
                        <Button theme={theme} variant="outlined">
                          <Button.Text>Outlined</Button.Text>
                        </Button>
                        <Button size="$lg" theme={theme}>
                          <Button.Text>Inverted</Button.Text>
                        </Button>
                        <Button size="$lg" theme={theme}>
                          Just text
                        </Button>
                      </XStack>
                    </View>
                  ))}
                </YStack>
              </Card>
            </Theme>
          ))}
        </YStack>
      </ScrollView>
    </Provider>
  );
};
