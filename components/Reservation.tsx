
import React, { useState } from 'react';

const Reservation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    budget: '',
    message: '',
    area: '', // 매장 평수 추가
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`[가맹 문의 접수 완료]\n성함: ${formData.name}\n지역: ${formData.location}\n담당자가 영업일 기준 24시간 내에 연락드리겠습니다.`);
  };

  return (
    <section id="inquiry" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gray-950 rounded-[60px] shadow-[0_50px_100px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col lg:flex-row border border-white/5">
          {/* Visual/Info Column */}
          <div className="lg:w-2/5 bg-green-700 p-16 text-white relative">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="space-y-6">
                <span className="inline-block px-4 py-1.5 bg-black/20 rounded-full text-xs font-black uppercase tracking-widest">Consulting</span>
                <h2 className="text-5xl font-black mb-8 leading-tight italic">성공 창업의<br />첫 걸음</h2>
                <p className="text-green-100/70 text-lg font-light leading-relaxed">
                  전문 컨설턴트가 점주님의<br />
                  예산과 지역에 맞는 최적의<br />
                  창업 로드맵을 설계해 드립니다.
                </p>
              </div>
              
              <div className="pt-12 border-t border-white/20 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <p className="text-sm font-medium">상담 가능 시간: 평일 09:00 - 18:00</p>
                </div>
                <div className="flex items-center gap-4 text-green-400 font-bold text-xl">
                  <i className="fa-solid fa-shield-check"></i>
                  <span>개인정보 100% 암호화 보호</span>
                </div>
              </div>
            </div>
            {/* Background Accent */}
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <i className="fa-solid fa-file-signature text-[200px]"></i>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:w-3/5 p-16 bg-white">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-black text-gray-900 ml-1">성함 / 상호명</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:outline-none transition-all placeholder:text-gray-300 font-medium"
                    placeholder="성함을 입력하세요"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black text-gray-900 ml-1">연락처</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:outline-none transition-all placeholder:text-gray-300 font-medium"
                    placeholder="010-0000-0000"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black text-gray-900 ml-1">희망 창업 지역</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:outline-none transition-all placeholder:text-gray-300 font-medium"
                    placeholder="예: 서울 강남구 / 경기 하남시"
                    value={formData.location}
                    onChange={e => setFormData({...formData, location: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black text-gray-900 ml-1">희망 매장 평수</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:outline-none transition-all placeholder:text-gray-300 font-medium"
                    placeholder="예: 40평 / 미정"
                    value={formData.area}
                    onChange={e => setFormData({...formData, area: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-black text-gray-900 ml-1">예상 창업 자금</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['1억 미만', '1~2억', '2~3억', '3억 이상'].map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setFormData({...formData, budget: b})}
                      className={`py-3 rounded-xl border text-sm font-bold transition-all ${
                        formData.budget === b 
                          ? 'bg-green-700 border-green-700 text-white shadow-lg' 
                          : 'bg-white border-gray-200 text-gray-500 hover:border-green-300'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-black text-gray-900 ml-1">추가 상담 내용</label>
                <textarea 
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:outline-none transition-all h-32 resize-none font-medium placeholder:text-gray-300"
                  placeholder="사업에 대해 궁금하신 점을 상세히 적어주시면 더 정확한 상담이 가능합니다."
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gray-900 hover:bg-green-700 text-white font-black py-6 rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 text-xl flex items-center justify-center gap-3"
              >
                무료 사업 설명서 & 상담 신청
                <i className="fa-solid fa-chevron-right text-sm"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
