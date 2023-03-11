import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Screens/Home/Home';
import ProductDetail from '../Screens/ProductDetail/ProductDetail';
import Profile from '../Screens/Profile/Profile';
import Settings from '../Screens/Settings/Settings';
import NavigationService from './NavigationService';


const Stack = createNativeStackNavigator();

export function Route() {
    return (
        <NavigationContainer ref={(ref) => NavigationService.setTopLevelNavigator(ref)}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="ProductDetail" component={ProductDetail} />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}