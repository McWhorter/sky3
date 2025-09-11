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
  Theme,
  XStack,
  type ThemeName,
} from 'tamagui';
import type { ButtonSizeVariants } from '@/components';
import { Button } from '@/components';
import { Provider } from '@/Provider';
import { Airplay } from '@tamagui/lucide-icons';

const modes: ThemeName[] = ['light', 'dark'];
const themes: ThemeName[] = ['blue', 'black', 'gray', 'red', 'green'];
const sizes: ButtonSizeVariants[] = ['sm', 'md', 'lg'];

export const Demo: React.FC = () => {
  return (
    <Provider>
      <ScrollView>
        <YStack>
          <YStack padding="$6" margin="auto">
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
                <YStack gap="$4" padding="$4" margin="auto">
                  <H2>Button Component {mode}</H2>
                  {themes.map(theme => (
                    <YStack gap="$4" key={theme}>
                      <H3>Button Sizes</H3>
                      <XStack gap="$4">
                        {sizes.map(size => (
                          <Button size={size} theme={theme} key={size}>
                            <Button.Text>{size} Button</Button.Text>
                            <Button.Icon>
                              <Airplay />
                            </Button.Icon>
                          </Button>
                        ))}
                      </XStack>

                      <H3>Button States</H3>

                      <XStack gap="$4">
                        <Button theme={theme} loading>
                          <Button.Text>Loading</Button.Text>
                        </Button>
                        <Button theme={theme} disabled>
                          <Button.Text>Disabled</Button.Text>
                        </Button>
                      </XStack>

                      <H3>Button Variants</H3>

                      <XStack gap="$4">
                        <Button theme={theme}>
                          <Button.Text>Filled</Button.Text>
                        </Button>
                        <Button theme={theme} variant="outlined">
                          <Button.Text>Outlined</Button.Text>
                        </Button>
                      </XStack>
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
