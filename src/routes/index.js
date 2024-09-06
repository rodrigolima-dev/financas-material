import react, { useContext } from "react";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

import { AuthContext } from "../contexts/auth";

export default function Routes() {
  const { signed } = useContext(AuthContext)

  //Renderização condicional.:
  return (
    signed ? <AppRoutes/> : <AuthRoutes/>  
  );
}