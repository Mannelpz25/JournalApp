import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckingAuth } from "../ui"
import { useCheckAuth } from "../hooks"


export const AppRouter = () => {
  const{status} = useCheckAuth();
  

  if ( status === 'checking'){
    return <CheckingAuth/>
  }

  return (
    <Routes>
        {
          (status === 'authenticated')
          ?<Route path="/JournalApp/*" element={<JournalRoutes/>} />
          :<Route path="/JournalApp/auth/*" element={<AuthRoutes/>} />
        }
        <Route path="/JournalApp/*" element={<Navigate to="/JournalApp/auth/login"/>} />
        <Route path="/*" element={<Navigate to="/JournalApp/"/>} />
    </Routes>
  )
}
