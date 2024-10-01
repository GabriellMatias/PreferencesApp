import React, { useState } from 'react';
import { View, Text, Button, Switch } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';


const PreferenceScreen: React.FC = () => {
  const [theme, setTheme] = useState<string>('Claro');
  const [fontSize, setFontSize] = useState<number>(16);
  const [isNightMode, setIsNightMode] = useState<boolean>(false);

  const resetPreferences = () => {
    setTheme('Claro');
    setFontSize(16);
    setIsNightMode(false);
  };

  return (
    <View className="flex-1 items-center justify-center p-4">
      <Text className="text-2xl font-bold mb-4">Configurações de Preferências</Text>

      {/* Picker para Tema */}
      <Text className="text-lg">Tema Preferido</Text>
      <Picker
        selectedValue={theme}
        onValueChange={(itemValue) => setTheme(itemValue)}
        style={{ width: 200, height: 50 }}
      >
        <Picker.Item label="Claro" value="Claro" />
        <Picker.Item label="Escuro" value="Escuro" />
        <Picker.Item label="Automático" value="Automático" />
      </Picker>

      {/* Slider para Tamanho da Fonte */}
      <Text className="text-lg mt-4">Tamanho da Fonte</Text>
      <Slider
        style={{ width: 300, height: 40 }}
        minimumValue={12}
        maximumValue={30}
        step={1}
        value={fontSize}
        onValueChange={(value:any) => setFontSize(value)}
        minimumTrackTintColor="#1f2937"
        maximumTrackTintColor="#e5e7eb"
      />
      <Text className="text-base mt-2">Tamanho: {fontSize}</Text>

      {/* Switch para Modo Noturno */}
      <View className="flex-row items-center justify-between mt-4">
        <Text className="text-lg">Modo Noturno</Text>
        <Switch
          value={isNightMode}
          onValueChange={(value) => setIsNightMode(value)}
        />
      </View>
      <Text className="mt-2">{isNightMode ? 'Ativado' : 'Desativado'}</Text>

      {/* Botão para Resetar Preferências */}
      <Button title="Resetar Preferências" onPress={resetPreferences} />
    </View>
  );
};

export default PreferenceScreen;
