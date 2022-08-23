import { Route, Routes, Navigate } from "react-router-dom"
import { LoginPage, RegisterPage } from "../pages"

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage/>} />
      <Route path="register" element={<RegisterPage/>} />
      <Route path="/JournalApp/*" element={<Navigate to="/JournalApp/auth/login"/>} />
    </Routes>
  )
}
