import React, { useState } from 'react';
import { Text, ScrollView, XStack, YStack, H1, H2 } from 'tamagui';
import { Button, Card, Input, TamaguiProvider } from '../lib';

export const DemoApp: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');

  const handleButtonPress = () => {
    alert('Button pressed!');
  };

  const handleInputChange = (text: string) => {
    setInputValue(text);
    if (text.length < 3) {
      setInputError('Must be at least 3 characters');
    } else {
      setInputError('');
    }
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

          <Card elevation={3} padding="$5" margin="$2">
            <H2 color="$color" marginBottom="$4">Input Components</H2>
            <Input
              label="Name"
              placeholder="Enter your name"
              value={inputValue}
              onChangeText={handleInputChange}
              error={inputError}
            />
            <Input
              label="Email"
              placeholder="Enter your email"
              value=""
              onChangeText={() => {}}
            />
            <Input
              label="Password"
              placeholder="Enter password"
              value=""
              onChangeText={() => {}}
              secureTextEntry
            />
            <Input
              label="Description"
              placeholder="Enter description"
              value=""
              onChangeText={() => {}}
              multiline
              numberOfLines={4}
            />
            <Input
              label="Disabled Input"
              placeholder="This is disabled"
              value="Disabled value"
              onChangeText={() => {}}
              disabled
            />
          </Card>

          <Card elevation={1} padding="$4" margin="$2" backgroundColor="$gray3">
            <H2 color="$color" marginBottom="$3">Card Variants</H2>
            <Text color="$color">This is a card with light background and low elevation.</Text>
          </Card>

          <Card elevation={4} padding="$6" margin="$2" backgroundColor="$blue2" borderRadius="$6">
            <H2 color="$color" marginBottom="$3">Custom Card</H2>
            <Text color="$color">This card has custom styling with higher elevation and rounded corners.</Text>
          </Card>
        </YStack>
      </ScrollView>
    </TamaguiProvider>
  );
};
