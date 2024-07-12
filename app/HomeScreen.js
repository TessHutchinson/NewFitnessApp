import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to FitnessApp</Text>
      <Button
        title="Go to Workout"
        onPress={() => navigation.navigate('Workout')}
      />
    </View>
  );
};

export default HomeScreen;
