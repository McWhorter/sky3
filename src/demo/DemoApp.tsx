import React from 'react';
import { ScrollView, XStack, YStack, H1, H2 } from 'tamagui';
import { Button, Card, TamaguiProvider } from '../lib';

export const DemoApp: React.FC = () => {
  const handleButtonPress = () => {
    alert('Button pressed!');
  };

  return (
    <TamaguiProvider>
      <ScrollView backgroundColor="$gray1" flex={1}>
        <YStack padding="$5" gap="$4">
          <H1 textAlign="center" color="$color" marginBottom="$4">
            React Native Web UI Library Demo
          </H1>
          
          <Card elevation={3} padding="$5" margin="$2">
            <H2 color="$color" marginBottom="$4">Button Components</H2>
            <XStack gap="$2" marginBottom="$4" flexWrap="wrap">
              <Button title="Primary Button" onPress={handleButtonPress} variant="primary" />
              <Button title="Secondary Button" onPress={handleButtonPress} variant="secondary" />
              <Button title="Outline Button" onPress={handleButtonPress} variant="outline" />
            </XStack>
            
            <XStack gap="$2" marginBottom="$4" flexWrap="wrap">
              <Button title="Small" onPress={handleButtonPress} size="small" />
              <Button title="Medium" onPress={handleButtonPress} size="medium" />
              <Button title="Large" onPress={handleButtonPress} size="large" />
            </XStack>
            
            <Button title="Disabled Button" onPress={handleButtonPress} disabled />
          </Card>
        </YStack>
      </ScrollView>
    </TamaguiProvider>
  );
};
