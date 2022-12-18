import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { Post } from './components/Post';

export default function App() {
  return (
    <View>
      <Post title="Work" createdAt="2016-05-02" imageUrl="https://image.shutterstock.com/image-vector/uri-upper-respiratory-infection-acronym-260nw-1909354021.jpg"/>
      <StatusBar style="auto" />
    </View>
  );
}
