use kv_store // Membuat dan memilih database

db.kv_data.insertMany([
  { key: "user1", value: "Andi" },
  { key: "user2", value: "Budi" },
  { key: "user3", value: "Citra" },
  { key: "user4", value: "Dedi" },
  { key: "user5", value: "Eka" }
])
use wide_column_db // Membuat dan memilih database

db.students.insertMany([
  {
    student_id: "S001",
    name: "Andi",
    grades: { math: 85, english: 90, science: 78 }
  },
  {
    student_id: "S002",
    name: "Budi",
    grades: { math: 75, english: 88 }
  },
  {
    student_id: "S003",
    name: "Citra",
    grades: { english: 95, science: 82, arts: 89 }
  },
  {
    student_id: "S004",
    name: "Dedi",
    grades: { math: 70, science: 90 }
  },
  {
    student_id: "S005",
    name: "Eka",
    grades: { math: 92, english: 91, science: 88, arts: 85 }
  }
])
