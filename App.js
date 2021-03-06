import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Login from './screens/Login'
import Chat from './screens/Chat'

const AppNavigator = createStackNavigator(
  {
    Login,
    Chat,
  },
  {
    headerMode: 'none'
  }


);

export default createAppContainer(AppNavigator);
