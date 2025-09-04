import React from 'react';
import { View, StyleSheet } from 'react-native';

export interface CardProps {
  children: React.ReactNode;
  elevation?: number;
  padding?: number;
  margin?: number;
  backgroundColor?: string;
  borderRadius?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  elevation = 2,
  padding = 16,
  margin = 0,
  backgroundColor = '#FFFFFF',
  borderRadius = 8,
}) => {
  const cardStyle = [
    styles.base,
    {
      padding,
      margin,
      backgroundColor,
      borderRadius,
      shadowOpacity: elevation * 0.1,
      shadowRadius: elevation * 2,
      shadowOffset: { width: 0, height: elevation },
      elevation, // Android shadow
    },
  ];

  return <View style={cardStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  base: {
    shadowColor: '#000000',
    borderWidth: 0,
  },
});
