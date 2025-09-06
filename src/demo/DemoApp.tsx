import React from 'react';
import { ScrollView, YStack, H1, H2, Spacer } from 'tamagui';
import { Button } from '@/components';
import { Provider } from '@/index';

export const DemoApp: React.FC = () => {
  return (
    <Provider>
      <ScrollView padding="$lg" backgroundColor="$background">
        <YStack space="$lg" alignItems="center">
          <H1>Welcome to Skylight version 3!</H1>

          <H2>Button Variants</H2>

          {/* Primary Buttons */}
          <YStack space="$md" alignItems="center">
            <Button variant="primary" size="sm">
              <Button.Text>Primary Small</Button.Text>
            </Button>
            <Button variant="primary" size="md">
              <Button.Text>Primary Medium</Button.Text>
            </Button>
            <Button variant="primary" size="lg">
              <Button.Text>Primary Large</Button.Text>
            </Button>
          </YStack>

          <Spacer />

          {/* Secondary Buttons */}
          <YStack space="$md" alignItems="center">
            <Button variant="secondary" size="sm">
              <Button.Text>Secondary Small</Button.Text>
            </Button>
            <Button variant="secondary" size="md">
              <Button.Text>Secondary Medium</Button.Text>
            </Button>
            <Button variant="secondary" size="lg">
              <Button.Text>Secondary Large</Button.Text>
            </Button>
          </YStack>

          <Spacer />

          {/* Outline Buttons */}
          <YStack space="$md" alignItems="center">
            <Button variant="outline" size="sm">
              <Button.Text>Outline Small</Button.Text>
            </Button>
            <Button variant="outline" size="md">
              <Button.Text>Outline Medium</Button.Text>
            </Button>
            <Button variant="outline" size="lg">
              <Button.Text>Outline Large</Button.Text>
            </Button>
          </YStack>
        </YStack>
      </ScrollView>
    </Provider>
  );
};
