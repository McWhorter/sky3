import React, { useState } from 'react';
import { ScrollView, YStack, H1, H2, H3, Text, XStack, Card, Separator } from 'tamagui';
import { Button } from '@/components';
import { Provider } from '@/index';

export const DemoApp: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Provider>
      <ScrollView padding="$6" backgroundColor="$background" minHeight="100vh">
        <YStack space="$6" maxWidth={800} marginHorizontal="auto">
          {/* Header */}
          <YStack space="$4" alignItems="center">
            <H1 fontFamily="$heading" fontSize="$10" fontWeight="$6" textAlign="center">
              Welcome to Skylight v3
            </H1>
            <Text fontSize="$4" color="$color" textAlign="center" maxWidth={600}>
              A modern React UI component library built on Tamagui with comprehensive design tokens,
              themes, and flexible components.
            </Text>
          </YStack>

          <Separator />

          {/* Button Variants */}
          <Card padding="$4" backgroundColor="$backgroundStrong" borderRadius="$4">
            <YStack space="$4">
              <H2 fontFamily="$heading" fontSize="$6" fontWeight="$5">
                Button Variants
              </H2>

              <YStack space="$3">
                <H3 fontSize="$4" fontWeight="$4">
                  Primary Buttons
                </H3>
                <XStack space="$3" flexWrap="wrap" gap="$2">
                  <Button size="xs" variant="primary">
                    Extra Small
                  </Button>
                  <Button size="sm" variant="primary">
                    Small
                  </Button>
                  <Button size="md" variant="primary">
                    Medium
                  </Button>
                  <Button size="lg" variant="primary">
                    Large
                  </Button>
                  <Button size="xl" variant="primary">
                    Extra Large
                  </Button>
                </XStack>
              </YStack>

              <YStack space="$3">
                <H3 fontSize="$4" fontWeight="$4">
                  Secondary Buttons
                </H3>
                <XStack space="$3" flexWrap="wrap" gap="$2">
                  <Button size="sm" variant="secondary">
                    Secondary
                  </Button>
                  <Button size="sm" variant="outline">
                    Outline
                  </Button>
                  <Button size="sm" variant="ghost">
                    Ghost
                  </Button>
                  <Button size="sm" variant="link">
                    Link
                  </Button>
                </XStack>
              </YStack>

              <YStack space="$3">
                <H3 fontSize="$4" fontWeight="$4">
                  Color Schemes
                </H3>
                <XStack space="$3" flexWrap="wrap" gap="$2">
                  <Button size="sm" colorScheme="success">
                    Success
                  </Button>
                  <Button size="sm" colorScheme="warning">
                    Warning
                  </Button>
                  <Button size="sm" colorScheme="error">
                    Error
                  </Button>
                  <Button size="sm" colorScheme="info">
                    Info
                  </Button>
                </XStack>
              </YStack>

              <YStack space="$3">
                <H3 fontSize="$4" fontWeight="$4">
                  States
                </H3>
                <XStack space="$3" flexWrap="wrap" gap="$2">
                  <Button size="sm" loading={loading} onClick={handleLoadingDemo}>
                    {loading ? 'Loading...' : 'Click to Load'}
                  </Button>
                  <Button size="sm" disabled>
                    Disabled
                  </Button>
                  <Button size="sm" fullWidth>
                    Full Width
                  </Button>
                </XStack>
              </YStack>
            </YStack>
          </Card>

          {/* Typography */}
          <Card padding="$4" backgroundColor="$backgroundStrong" borderRadius="$4">
            <YStack space="$4">
              <H2 fontFamily="$heading" fontSize="$6" fontWeight="$5">
                Typography
              </H2>

              <YStack space="$3">
                <H1 fontFamily="$heading" fontSize="$8" fontWeight="$6">
                  Heading 1 - Main Title
                </H1>
                <H2 fontFamily="$heading" fontSize="$6" fontWeight="$5">
                  Heading 2 - Section Title
                </H2>
                <H3 fontFamily="$heading" fontSize="$4" fontWeight="$4">
                  Heading 3 - Subsection Title
                </H3>
                <Text fontSize="$3" fontFamily="$body" lineHeight="$4">
                  Body text - This is the default body text using our custom font family. It should
                  be readable and comfortable for extended reading.
                </Text>
                <Text fontSize="$2" fontFamily="$body" color="$colorHover">
                  Small text - Used for captions, labels, and secondary information.
                </Text>
              </YStack>
            </YStack>
          </Card>

          {/* Design Tokens */}
          <Card padding="$4" backgroundColor="$backgroundStrong" borderRadius="$4">
            <YStack space="$4">
              <H2 fontFamily="$heading" fontSize="$6" fontWeight="$5">
                Design Tokens
              </H2>

              <YStack space="$3">
                <H3 fontSize="$4" fontWeight="$4">
                  Spacing
                </H3>
                <YStack space="$2">
                  {[1, 2, 3, 4, 5, 6].map(size => (
                    <XStack key={size} alignItems="center" space="$3">
                      <Text fontSize="$2" minWidth={40}>
                        ${size}
                      </Text>
                      <div
                        style={{
                          height: 8,
                          width: size * 8,
                          backgroundColor: '#0d6efd',
                          borderRadius: 4,
                        }}
                      />
                      <Text fontSize="$2" color="$colorHover">
                        {size * 4}px
                      </Text>
                    </XStack>
                  ))}
                </YStack>
              </YStack>

              <YStack space="$3">
                <H3 fontSize="$4" fontWeight="$4">
                  Colors
                </H3>
                <XStack space="$3" flexWrap="wrap" gap="$2">
                  <YStack alignItems="center" space="$1">
                    <div
                      style={{ width: 40, height: 40, backgroundColor: '#0d6efd', borderRadius: 8 }}
                    />
                    <Text fontSize="$1">Primary</Text>
                  </YStack>
                  <YStack alignItems="center" space="$1">
                    <div
                      style={{ width: 40, height: 40, backgroundColor: '#198754', borderRadius: 8 }}
                    />
                    <Text fontSize="$1">Success</Text>
                  </YStack>
                  <YStack alignItems="center" space="$1">
                    <div
                      style={{ width: 40, height: 40, backgroundColor: '#ffc107', borderRadius: 8 }}
                    />
                    <Text fontSize="$1">Warning</Text>
                  </YStack>
                  <YStack alignItems="center" space="$1">
                    <div
                      style={{ width: 40, height: 40, backgroundColor: '#dc3545', borderRadius: 8 }}
                    />
                    <Text fontSize="$1">Error</Text>
                  </YStack>
                  <YStack alignItems="center" space="$1">
                    <div
                      style={{ width: 40, height: 40, backgroundColor: '#0dcaf0', borderRadius: 8 }}
                    />
                    <Text fontSize="$1">Info</Text>
                  </YStack>
                </XStack>
              </YStack>
            </YStack>
          </Card>

          {/* Footer */}
          <Card padding="$4" backgroundColor="$backgroundStrong" borderRadius="$4">
            <YStack space="$3" alignItems="center">
              <Text fontSize="$3" fontFamily="$body" textAlign="center">
                Built with ❤️ using Tamagui
              </Text>
              <Text fontSize="$2" color="$colorHover" textAlign="center">
                Version 3.0.0 - A comprehensive design system for modern React applications
              </Text>
            </YStack>
          </Card>
        </YStack>
      </ScrollView>
    </Provider>
  );
};
