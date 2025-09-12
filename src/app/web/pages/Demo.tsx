import React from 'react';
import {
  ScrollView,
  YStack,
  H1,
  H3,
  H2,
  H4,
  Text,
  Card,
  Theme,
  XStack,
  type ThemeName,
  Separator,
} from 'tamagui';
import type { ButtonSizeVariants, ButtonVariant } from '@/components';
import { Button } from '@/components';
import { Provider } from '@/Provider';
import { Smile } from '@tamagui/lucide-icons';

const modes: ThemeName[] = ['light', 'dark'];
const themes: ThemeName[] = ['blue', 'cyan', 'black', 'gray', 'red', 'green'];
const sizes: ButtonSizeVariants[] = ['sm', 'md', 'lg'];
const variants: ButtonVariant[] = ['filled', 'outlined', 'bare'];

export const Demo: React.FC = () => {
  return (
    <Provider>
      <ScrollView margin="auto">
        <YStack>
          <YStack gap="$xl" padding="$xl">
            <H1>Welcome to Skylight v3</H1>
            <Text>
              A modern React UI component library built on Tamagui with comprehensive design tokens,
              themes, and flexible components.
            </Text>
          </YStack>
          {modes.map(mode => (
            <Theme key={mode} name={mode}>
              <Card borderRadius="$0" paddingVertical="$xl">
                <YStack gap="$xl" padding="$xl">
                  <H2>Button Component {mode}</H2>
                  {themes.map(theme => (
                    <YStack gap="$xl" key={theme}>
                      <Separator marginVertical="$xl" />

                      <H3>Theme: {theme}</H3>

                      <YStack gap="$xl" key={theme}>
                        <H4>Button Sizes</H4>
                        <XStack gap="$md">
                          {sizes.map(size => (
                            <Button size={size} theme={theme} key={size}>
                              <Button.Icon>
                                <Smile />
                              </Button.Icon>
                              <Button.Text>{size} Button</Button.Text>
                            </Button>
                          ))}
                        </XStack>

                        <H4>Button Variants</H4>

                        <XStack gap="$md">
                          <Button theme={theme} variant="filled">
                            <Button.Text>Filled</Button.Text>
                          </Button>
                          <Button theme={theme} variant="outlined">
                            <Button.Text>Outlined</Button.Text>
                          </Button>
                          <Button theme={theme} variant="bare">
                            <Button.Text>Bare</Button.Text>
                          </Button>
                        </XStack>

                        <H4>Button States</H4>

                        <XStack gap="$md">
                          {variants.map(variant => (
                            <Button theme={theme} variant={variant} key={variant} loading>
                              <Button.Text>Loading</Button.Text>
                            </Button>
                          ))}
                        </XStack>

                        <XStack gap="$md">
                          {variants.map(variant => (
                            <Button theme={theme} variant={variant} key={variant} disabled>
                              <Button.Text>Disabled</Button.Text>
                            </Button>
                          ))}
                        </XStack>
                      </YStack>
                    </YStack>
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
