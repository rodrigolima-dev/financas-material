import react, { useContext } from "react";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

import { AuthContext } from "../contexts/auth";
import { ActivityIndicator, View } from "react-native-web";

export default function Routes() {
  const { signed, loading } = useContext(AuthContext)

  if(loading) {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <ActivityIndicator
        size="large"
        color={"#f47f1a"}
        />
      </View>
    );
  }
  //Renderização condicional.:
  return (
    signed ? <AppRoutes/> : <AuthRoutes/>  
  );
}