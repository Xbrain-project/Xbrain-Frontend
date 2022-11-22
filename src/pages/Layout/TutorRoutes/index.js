import React from 'react'
import { Outlet } from "react-router-dom";
import TutorRoute from "../../../components/routes/TutorRoute"
function TutorRoutes () {
  return (
    <div>
          <TutorRoute>
        <Outlet />
        </TutorRoute>
    </div>
  )
}

export default TutorRoutes