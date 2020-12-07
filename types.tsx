import { GestureResponderEvent } from "react-native";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type DrawerParamList = {
  Map: undefined;  
  Profile: undefined;  
  Evaluation: undefined;  
};

export type MapParamList = {
  MapScreen: undefined;
};

export type ProfileParamList = {
  ProfileScreen: undefined;
};

export type EvaluationParamList = {
  EvaluationScreen: undefined;
};

export type onPressFunc = (event: GestureResponderEvent) => void;
