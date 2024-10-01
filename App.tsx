import React from 'react';
import { SafeAreaView } from 'react-native';
import PreferenceScreen from './src/components/PreferenceScreen';
import { styled } from 'nativewind';

const StyledSafeAreaView = styled(SafeAreaView);

export default function App() {
  return (
    <StyledSafeAreaView className="flex-1 bg-gray-100 justify-center">
      <PreferenceScreen />
    </StyledSafeAreaView>
  );
}
