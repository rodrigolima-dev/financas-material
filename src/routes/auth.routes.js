import react from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
 return (
    <AuthStack.Navigator>
        <AuthStack.Screen 
        name="SignIn" 
        component={SignIn}
        options={{headerShown: false}}
        />
        <AuthStack.Screen 
        name="SignUp" 
        component={SignUp}
        options={{
          headerShown: true,
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: '#f47f1a'
          },
          headerTintColor: 'black',
          headerBackTitleVisible: false,
          headerTitle: "Voltar"
        }}
        />
    </AuthStack.Navigator>
  );
}

