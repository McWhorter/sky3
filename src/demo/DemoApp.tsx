import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Card, Input } from '../lib';

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
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>React Native Web UI Library Demo</Text>
        
        <Card elevation={3} padding={20} margin={10}>
          <Text style={styles.sectionTitle}>Button Components</Text>
          <View style={styles.buttonContainer}>
            <Button title="Primary Button" onPress={handleButtonPress} variant="primary" />
            <Button title="Secondary Button" onPress={handleButtonPress} variant="secondary" />
            <Button title="Outline Button" onPress={handleButtonPress} variant="outline" />
          </View>
          
          <View style={styles.buttonContainer}>
            <Button title="Small" onPress={handleButtonPress} size="small" />
            <Button title="Medium" onPress={handleButtonPress} size="medium" />
            <Button title="Large" onPress={handleButtonPress} size="large" />
          </View>
          
          <Button title="Disabled Button" onPress={handleButtonPress} disabled />
        </Card>

        <Card elevation={3} padding={20} margin={10}>
          <Text style={styles.sectionTitle}>Input Components</Text>
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

        <Card elevation={1} padding={15} margin={10} backgroundColor="#F8F9FA">
          <Text style={styles.sectionTitle}>Card Variants</Text>
          <Text>This is a card with light background and low elevation.</Text>
        </Card>

        <Card elevation={5} padding={25} margin={10} backgroundColor="#E3F2FD" borderRadius={16}>
          <Text style={styles.sectionTitle}>Custom Card</Text>
          <Text>This card has custom styling with higher elevation and rounded corners.</Text>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333333',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333333',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 15,
    flexWrap: 'wrap',
  },
});
