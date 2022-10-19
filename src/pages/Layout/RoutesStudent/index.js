import React from 'react'
import { Outlet } from "react-router-dom";
import StudentRoute from "../../../components/routes/RouteStudent"
function RoutesStudent() {
  return (
    <div>
      <StudentRoute>
        <Outlet />
        </StudentRoute>
    </div>
  )
}

export default RoutesStudent