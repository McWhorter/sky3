import React from 'react';
import { ScrollView, YStack, H1, H2, H3, Text, Card as TamaguiCard, Separator } from 'tamagui';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
// import { Button } from 'tamagui';
import { Provider } from '@/Provider';

import { Airplay } from '@tamagui/lucide-icons';

// Note: TypeScript errors for 'size', 'variant', and 'interactive' props are expected
// as custom component variant types aren't fully inferred, but the component works at runtime

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

          <TamaguiCard background="transparent">
            <YStack gap="$4">
              <H2>Custom Card Component</H2>
              <Text>
                A custom card component built using the documentation's recommended approach:
                semantic variant names (sm, md, lg) that map to standard Tamagui tokens, avoiding
                the need for custom font configurations.
              </Text>

              <YStack gap="$4">
                <H3>Size Variants</H3>

                <H3>Variant Types</H3>
                <YStack gap="$3">
                  <Card variant="default" size="md">
                    <Card.Header>
                      <Card.Title>Default Card</Card.Title>
                    </Card.Header>
                    <Card.Content>
                      <Card.Description>
                        Standard card with theme-aware background and border colors.
                      </Card.Description>
                    </Card.Content>
                  </Card>

                  <Card variant="elevated" size="md">
                    <Card.Header>
                      <Card.Title>Elevated Card</Card.Title>
                    </Card.Header>
                    <Card.Content>
                      <Card.Description>
                        Card with shadow and elevation for a floating appearance.
                      </Card.Description>
                    </Card.Content>
                  </Card>

                  <Card variant="outlined" size="md">
                    <Card.Header>
                      <Card.Title>Outlined Card</Card.Title>
                    </Card.Header>
                    <Card.Content>
                      <Card.Description>
                        Transparent background with prominent border.
                      </Card.Description>
                    </Card.Content>
                  </Card>

                  <Card variant="filled" size="md">
                    <Card.Header>
                      <Card.Title>Filled Card</Card.Title>
                    </Card.Header>
                    <Card.Content>
                      <Card.Description>
                        Card with blue background and border using theme colors.
                      </Card.Description>
                    </Card.Content>
                  </Card>

                  <Card variant="success" size="md">
                    <Card.Header>
                      <Card.Title>Success Card</Card.Title>
                    </Card.Header>
                    <Card.Content>
                      <Card.Description>
                        Card with green background indicating success state.
                      </Card.Description>
                    </Card.Content>
                  </Card>

                  <Card variant="warning" size="md">
                    <Card.Header>
                      <Card.Title>Warning Card</Card.Title>
                    </Card.Header>
                    <Card.Content>
                      <Card.Description>
                        Card with yellow background indicating warning state.
                      </Card.Description>
                    </Card.Content>
                  </Card>

                  <Card variant="error" size="md">
                    <Card.Header>
                      <Card.Title>Error Card</Card.Title>
                    </Card.Header>
                    <Card.Content>
                      <Card.Description>
                        Card with red background indicating error state.
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </YStack>

                <H3>Interactive Cards</H3>
                <YStack gap="$3">
                  <Card variant="elevated" size="md" interactive>
                    <Card.Header>
                      <Card.Title>Interactive Card</Card.Title>
                    </Card.Header>
                    <Card.Content>
                      <Card.Description>
                        This card has hover and press effects. Try hovering or clicking!
                      </Card.Description>
                    </Card.Content>
                    <Card.Footer>
                      <Button size="$sm" variant="outlined">
                        <Button.Text>Action</Button.Text>
                      </Button>
                    </Card.Footer>
                  </Card>

                  <Card variant="filled" size="md" interactive>
                    <Card.Header>
                      <Card.Title>Card with Footer</Card.Title>
                    </Card.Header>
                    <Card.Content>
                      <Card.Description>
                        This card includes a footer with action buttons.
                      </Card.Description>
                    </Card.Content>
                    <Card.Footer>
                      <Button size="$sm" variant="outlined">
                        <Button.Text>Cancel</Button.Text>
                      </Button>
                      <Button size="$sm">
                        <Button.Text>Confirm</Button.Text>
                      </Button>
                    </Card.Footer>
                  </Card>
                </YStack>
              </YStack>
            </YStack>
          </TamaguiCard>
        </YStack>
      </ScrollView>
    </Provider>
  );
};
