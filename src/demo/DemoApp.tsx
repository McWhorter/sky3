import React from 'react';
import { ScrollView, YStack, H1, H2, H3, Text, Card, Separator } from 'tamagui';
import { Button } from '@/components/Button';
// import { Button } from 'tamagui';
import { Provider } from '@/Provider';

import { Airplay } from '@tamagui/lucide-icons';

export const DemoApp: React.FC = () => {
  return (
    <Provider>
      <ScrollView maxWidth={500} margin="auto">
        <YStack>
          <YStack gap="$4">
            <H1>Welcome to Skylight v3</H1>
            <Text>
              A modern React UI component library built on Tamagui with comprehensive design tokens,
              themes, and flexible components.
            </Text>
          </YStack>

          <Separator />

          <Card background="transparent">
            <YStack gap="$4">
              <H2>Button Variants</H2>
              <YStack gap="$4">
                <H3>Button Components</H3>
                <YStack gap="$4">
                  <H3>Filled Buttons</H3>

                  <YStack gap="$2">
                    <Button size="$sm">
                      <Button.Text>$1 Filled</Button.Text>
                    </Button>
                    <Button size="$md">
                      <Button.Text>$2 Filled</Button.Text>
                    </Button>
                    <Button size="$lg">
                      <Button.Text>$3 Filled</Button.Text>
                    </Button>
                  </YStack>

                  <H3>Outlined Buttons</H3>

                  <YStack gap="$2">
                    <Button size="$sm" variant="outlined">
                      <Button.Text>$1 Outlined</Button.Text>
                      <Button.Icon>
                        <Airplay />
                      </Button.Icon>
                    </Button>
                    <Button size="$md" variant="outlined">
                      <Button.Text>$2 Outlined</Button.Text>
                      <Button.Icon>
                        <Airplay />
                      </Button.Icon>
                    </Button>
                    <Button size="$lg" variant="outlined">
                      <Button.Text>$3 Outlined</Button.Text>
                      <Button.Icon>
                        <Airplay />
                      </Button.Icon>
                    </Button>
                  </YStack>
                </YStack>
              </YStack>
            </YStack>
          </Card>
        </YStack>
      </ScrollView>
    </Provider>
  );
};
