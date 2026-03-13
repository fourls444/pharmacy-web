"use client";

import MemberNavbar from "@/components/MemberNavbar";

export default function MemberDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 ThaiFont">
      {/* Note: In a real app, this layout might be handled in app/member/layout.tsx */}
      <MemberNavbar />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl font-extrabold text-[#034638] mb-6">ยินดีต้อนรับสู่ระบบบริการสมาชิก</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quick Stats/Info Cards */}
            <div className="bg-[#f8faf7] p-6 rounded-2xl border border-[#e2e8e0]">
              <p className="text-sm text-gray-500 mb-1">สถานะใบอนุญาต</p>
              <h3 className="text-xl font-bold text-green-600">ปกติ (Active)</h3>
              <p className="text-xs text-gray-400 mt-2">หมดอายุ: 31 ธ.ค. 2570</p>
            </div>
            
            <div className="bg-[#f8faf7] p-6 rounded-2xl border border-[#e2e8e0]">
              <p className="text-sm text-gray-500 mb-1">คะแนน CPE สะสม</p>
              <h3 className="text-xl font-bold text-[#9da342]">85.5 คะแนน</h3>
              <p className="text-xs text-gray-400 mt-2">ต้องการเพิ่ม: 14.5 คะแนน (ภายใน 2 ปี)</p>
            </div>
            
            <div className="bg-[#f8faf7] p-6 rounded-2xl border border-[#e2e8e0]">
              <p className="text-sm text-gray-500 mb-1">ข้อความใหม่</p>
              <h3 className="text-xl font-bold text-blue-600">3 รายการ</h3>
              <p className="text-xs text-gray-400 mt-2">ล่าสุด: แจ้งเตือนการชำระค่าบำรุงวิชาชีพ</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* E-Services Section */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4">บริการธุรกรรมอิเล็กทรอนิกส์</h3>
            <ul className="space-y-3">
              {[
                "ต่ออายุใบอนุญาตประกอบวิชาชีพ",
                "เพิ่ม/แก้ไข ข้อมูลสถานที่ทำงาน",
                "ขอหนังสือรับรองความประพฤติ (Good Standing)",
                "สมัครหลักสูตรฝึกอบรม CPE",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                  <span className="text-gray-700 font-medium">{item}</span>
                  <svg className="w-5 h-5 text-[#9da342]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
              ))}
            </ul>
          </div>

          {/* CPE Progress/Calendar */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4">กิจกรรมทางวิชาการ (CPE)</h3>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-[#9da342] bg-[#fdfdf7] rounded-r-xl">
                <p className="text-xs text-[#9da342] font-bold">20 มีนาคม 2569</p>
                <h4 className="font-bold text-gray-800">ก้าวทันวิชาชีพกับกัญชาทางการแพทย์ รุ่นที่ 5</h4>
                <p className="text-sm text-gray-500">2.5 หน่วยกิต | รูปแบบ ออนไลน์</p>
              </div>
              <div className="p-4 border-l-4 border-blue-400 bg-blue-50 rounded-r-xl">
                <p className="text-xs text-blue-500 font-bold">5 เมษายน 2569</p>
                <h4 className="font-bold text-gray-800">สัมมนาใหญ่ประจำปี: เภสัชกรรม 4.0</h4>
                <p className="text-sm text-gray-500">10 หน่วยกิต | ศูนย์ประชุม BITEC</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
