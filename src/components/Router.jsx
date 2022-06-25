import { Routes, Route } from "react-router-dom";
import { Activities } from "../pages/Activities";
import { Home } from '../pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/activities/:slug" element={<Activities />} />
    </Routes>
  )
}