import { redirect } from "next/navigation"

export default function AttendancePage() {
  // Redirect to the report page
  redirect("/parent-portal/attendance/report")
}
