import { createClient } from "@supabase/supabase-js"

// Provide fallback values for build time
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co"
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key"

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
  emergency_contact_name: string
  emergency_contact_phone: string
  allergies?: string
  medical_notes?: string
  enrollment_date: string
  status: "active" | "inactive" | "graduated"
  created_at: string
  updated_at: string
}

export interface PhotoAlbum {
  id: string
  name: string
  description?: string
  thumbnail_url?: string
  is_public: boolean
  photo_count: number
  created_at: string
  updated_at: string
}

export interface Photo {
  id: string
  album_id: string
  filename: string
  file_url: string
  file_path: string
  caption?: string
  file_size?: number
  mime_type?: string
  is_featured: boolean
  created_at: string
}

export interface AttendanceRecord {
  id: string
  student_id: string
  date: string
  check_in_time: string
  check_out_time?: string
  attendance_type: "full-time" | "half-day" | "hourly"
  hours_attended?: number
  notes?: string
  status: "present" | "absent" | "late" | "early-pickup"
  created_at: string
  updated_at: string
}

export interface BillingRecord {
  id: string
  student_id: string
  invoice_number: string
  billing_period_start: string
  billing_period_end: string
  amount: number
  status: "pending" | "paid" | "overdue" | "cancelled"
  due_date: string
  paid_date?: string
  payment_method?: string
  notes?: string
  created_at: string
  updated_at: string
}

export interface Payment {
  id: string
  student_id: string
  billing_record_id?: string
  amount: number
  payment_date: string
  payment_method: "cash" | "check" | "credit-card" | "bank-transfer" | "paypal"
  transaction_id?: string
  status: "pending" | "completed" | "failed" | "refunded"
  notes?: string
  created_at: string
}

export interface Announcement {
  id: string
  title: string
  content: string
  type: "general" | "urgent" | "event" | "closure" | "enrollment"
  is_published: boolean
  publish_date: string
  expiry_date?: string
  created_by?: string
  created_at: string
  updated_at: string
}
