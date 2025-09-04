import React from 'react';
import { TamaguiProvider, ScrollView, YStack, H1 } from 'tamagui';

export const DemoApp: React.FC = () => {
  return (
    <TamaguiProvider>
      <ScrollView>
        <YStack>
          <H1>
            Welcome to Skylight version 3!
          </H1>
        </YStack>
      </ScrollView>
    </TamaguiProvider>
  );
};
