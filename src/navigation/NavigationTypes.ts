import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MainNavigatorParamList = {
  Main: undefined;
  ProductDetails: {
    title: string;
    image: string;
    price: number;
  };
};

export type BottomTabsParamList = {
  Home: undefined;
  Settings: undefined;
  Cart: undefined;
  Profile: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  MainNavigatorParamList,
  'Main'
>;

export type ProductDetailsScreenNavigationProp = NativeStackNavigationProp<
  MainNavigatorParamList,
  'ProductDetails'
>;
export type PostDetailsScreenRouteProp = RouteProp<
  MainNavigatorParamList,
  'ProductDetails'
>;

export type CartScreenNavigationProps = NativeStackNavigationProp<
  BottomTabsParamList,
  'Cart'
>;
