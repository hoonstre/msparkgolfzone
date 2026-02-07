
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Professional Image/Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=1920" 
          className="w-full h-full object-cover" 
          alt="Premium Golf Background" 
        />
      </div>

      <div className="relative z-20 text-center text-white px-4 max-w-5xl">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/20 backdrop-blur-md border border-green-500/50 rounded-full animate-fade-in">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-bold tracking-widest text-green-400">SUCCESS FRANCHISE PARTNER</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.1]">
            <span className="block mb-2">당신이 찾던</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-300">완벽한 수익 모델</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            시니어 시장의 폭발적 수요와 MS 파크골프존의 최첨단 기술력이 만났습니다.<br className="hidden md:block" />
            <span className="text-white font-bold">인건비 걱정 없는 오토 매장 운영,</span> 지금 바로 상담하세요.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-10">
            <a href="#inquiry" className="group bg-green-600 text-white px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 hover:bg-green-500 hover:scale-105 shadow-[0_20px_50px_rgba(22,163,74,0.3)] flex items-center gap-3">
              무료 창업 상담 신청
              <i className="fa-solid fa-paper-plane group-hover:translate-x-1 transition-transform"></i>
            </a>
            <a href="#advantage" className="px-12 py-5 rounded-full text-xl font-bold border border-white/30 text-white hover:bg-white/10 transition-all backdrop-blur-sm">
              사업 경쟁력 확인
            </a>
          </div>
        </div>
      </div>

      {/* Floating Info Cards */}
      <div className="hidden lg:flex absolute bottom-12 left-0 right-0 justify-center gap-8 z-20 px-6">
        {[
          { label: '전국 가맹점', val: '120+' },
          { label: '월 평균 방문객', val: '50,000+' },
          { label: '만족도 조사', val: '98%' },
          { label: '투자 회수 기간', val: '평균 18개월' },
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl w-60 text-center">
            <p className="text-green-400 text-3xl font-black mb-1">{stat.val}</p>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>
      
      {/* Shiba Dog Guide Popup */}
      <div className="fixed bottom-32 right-10 z-40 animate-bounce-slow">
        <div className="bg-white text-gray-900 p-4 rounded-3xl shadow-2xl relative mb-3 max-w-[200px]">
          <p className="text-sm font-bold leading-tight">
            "대표님! <span className="text-green-600">성공 창업</span>의 지름길을 알려드릴게요! 🐶"
          </p>
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45"></div>
        </div>
        <div className="w-16 h-16 bg-green-600 rounded-full border-4 border-white shadow-xl overflow-hidden mx-auto">
          <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Lucky&backgroundColor=b6e3f4" alt="Shiba Mascot" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
