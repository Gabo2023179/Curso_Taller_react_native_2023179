import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainStackNavigator from "./navigation/MainNavigator";

const Tab = createBottomTabNavigator();

const App = () => {
  return <MainStackNavigator />;
};

export default App;
