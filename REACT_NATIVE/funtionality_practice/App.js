import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import IconsBox from './Components/IconsBox';
import {dummyIcon} from './Data/icons';
import Icon from './Components/Icon';
import AnimationScreen from './Components/AnimationScreen';
import CompleteAnimationGuide from './Components/CompleteAnimationGuide';
import Jello from './Components/AnimationPractice/Jello';
import Wobble from './Components/AnimationPractice/Wobble';
import RotateOut from './Components/AnimationPractice/RotateOut';
import Skew from './Components/AnimationPractice/Skew';
import ScreenLoad from './Components/AnimationPractice/ScreenLoad';
import FlipScreen from './Components/AnimationPractice/FlipScreen';
import ListScreen from './Components/shared-Comp/ListScreen';
import DetailScreen from './Components/shared-Comp/DetailScreen';
import ListAnimation from './Components/AnimationPractice/ListAnimation';
import Test from './Components/AnimationPractice/Test';
import AllShapes from './Components/ui/allShapes';
import Waves from './Components/AnimationPractice/Waves';
import ThreeD from './Components/ui/ThreeD';
import FlatCorousel from './Components/ui/FlatCorousel';
import PanResponderPage from './Components/AnimationPractice/PanResponder';
import CylinderAnim from './Components/AnimationPractice/CylinderAnim';

const App = () => {
  return <CylinderAnim />;
};

const styles = StyleSheet.create({});

export default App;
