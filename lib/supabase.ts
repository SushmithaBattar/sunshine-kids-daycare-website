import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Student {
  id: string
  first_name: string
  last_name: string
  date_of_birth: string
  program: string
  attendance_type: "full-time" | "half-day" | "hourly"
  parent_name: string
  parent_email: string
  parent_phone: string
  emergency_contact: string
  emergency_phone: string
  allergies?: string
  medical_notes?: string
  created_at: string
  updated_at: string
}

export interface PhotoAlbum {
  id: string
  name: string
  description?: string
  thumbnail_url?: string
  created_at: string
  updated_at: string
}

export interface Photo {
  id: string
  album_id: string
  file_url: string
  caption?: string
  created_at: string
}

export interface AttendanceRecord {
  id: string
  student_id: string
  date: string
  check_in: string
  check_out?: string
  type: "full-time" | "half-day" | "hourly"
  notes?: string
  created_at: string
}
