import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";
import New from "../pages/New";
import Profile from "../pages/Profile";
const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
 return (
    <AppDrawer.Navigator
    screenOptions={{
      drawerActiveTintColor: '#fff',
      drawerActiveBackgroundColor: '#f47f1a',
      drawerInactiveBackgroundColor: '#ddd',
      drawerItemStyle: {
        marginVertical: 5
      },
      headerShown: false
    }}
    >
        <AppDrawer.Screen name="Home" component={Home}/>
        <AppDrawer.Screen name="Registrar" component={New}/>
        <AppDrawer.Screen name="Perfil" component={Profile}/>
    </AppDrawer.Navigator>
  );
}

