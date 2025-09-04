import React from 'react';
import { styled, Stack, Text } from 'tamagui';
import { TextInput } from 'react-native';
import type { GetProps } from 'tamagui';

const InputContainer = styled(Stack, {
  name: 'InputContainer',
  marginVertical: '$2',
})

const InputLabel = styled(Text, {
  name: 'InputLabel',
  fontSize: '$3',
  fontWeight: '600',
  color: '$color',
  marginBottom: '$1',
})

const StyledInput = styled(TextInput, {
  name: 'Input',
  borderWidth: 1,
  borderColor: '$borderColor',
  borderRadius: '$4',
  paddingHorizontal: '$3',
  paddingVertical: '$2.5',
  fontSize: '$4',
  backgroundColor: '$background',
  minHeight: 40,
  
  variants: {
    hasError: {
      true: {
        borderColor: '$red10',
      },
    },
    
    disabled: {
      true: {
        backgroundColor: '$gray2',
        color: '$gray8',
        cursor: 'not-allowed',
      },
    },
    
    multiline: {
      true: {
        minHeight: 80,
        textAlignVertical: 'top',
      },
    },
  } as const,
})

const ErrorText = styled(Text, {
  name: 'ErrorText',
  fontSize: '$2',
  color: '$red10',
  marginTop: '$1',
})

export interface InputProps extends GetProps<typeof StyledInput> {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  secureTextEntry?: boolean;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  label,
  error,
  disabled = false,
  multiline = false,
  numberOfLines = 1,
  secureTextEntry = false,
  ...props
}) => {
  return (
    <InputContainer>
      {label && <InputLabel>{label}</InputLabel>}
      <StyledInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        editable={!disabled}
        multiline={multiline}
        numberOfLines={numberOfLines}
        secureTextEntry={secureTextEntry}
        hasError={!!error}
        disabled={disabled}
        {...props}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  );
};
