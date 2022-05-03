import {createStackNavigator, createAppContainer} from 'react-navigation';
import {StyleSheet, Router, React} from 'react-native';
import Login from './views/public/Login';
import Home from './views/protected/Home';

const MainNavigator = createStackNavigator({
  Login: { screen: Login, navigationOptions: { title: 'Wefrenz Login', headerStyle: {backgroundColor: '#2b90d9'}, headerTintColor: '#fff'}},
  Home: { screen: Home }
});
const App = createAppContainer(MainNavigator);
export default App;