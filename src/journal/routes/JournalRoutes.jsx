import { Route, Routes, Navigate } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage"

export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path="/JounalApp/" element={<JournalPage/>} />
        <Route path="/JournalApp/*" element={<Navigate to="/JounalApp/"/>} />
    </Routes>
  )
}
