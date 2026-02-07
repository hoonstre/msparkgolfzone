
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FacilitiesSection from './components/FacilitiesSection';
import Reservation from './components/Reservation';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';
import { BUSINESS_ADVANTAGES, STEPS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-green-200 selection:text-green-900">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Business Advantage Section */}
        <section id="advantage" className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
              <div className="space-y-4">
                <span className="text-green-600 font-bold tracking-[0.2em] uppercase text-sm">Main Advantages</span>
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                  왜 <span className="text-green-600 italic">MS 파크골프존</span>인가?
                </h2>
              </div>
              <p className="text-gray-500 max-w-md text-lg leading-relaxed border-l-4 border-green-600 pl-6">
                참고 사이트에서 검증된 MS만의 차별화된 4대 핵심 역량으로<br />
                당신의 창업 성공을 확실하게 보장합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {BUSINESS_ADVANTAGES.map((adv) => (
                <div key={adv.id} className="group p-12 bg-gray-50 rounded-[40px] hover:bg-green-700 hover:-translate-y-3 transition-all duration-500 shadow-sm hover:shadow-2xl">
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-green-700 text-4xl shadow-md mb-10 group-hover:rotate-6 transition-transform">
                    <i className={`fa-solid ${adv.icon}`}></i>
                  </div>
                  <h3 className="text-2xl font-black mb-6 group-hover:text-white transition-colors">{adv.title}</h3>
                  <p className="text-gray-500 group-hover:text-green-100 transition-colors leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none">
            <i className="fa-solid fa-golf-ball-tee text-[400px]"></i>
          </div>
        </section>

        {/* Profitability Highlighting Section (Msgolf Inspired) */}
        <section id="profit" className="py-32 bg-gray-900 text-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                <div className="space-y-4">
                  <h3 className="text-green-400 font-bold tracking-widest text-sm">PROFITABILITY</h3>
                  <h2 className="text-4xl md:text-5xl font-black leading-tight">
                    낮은 인건비, 높은 수익률<br />
                    <span className="text-green-400">데이터가 증명합니다.</span>
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all">
                    <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center text-2xl font-black text-white italic">01</div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">인건비 70% 이상 절감</h4>
                      <p className="text-gray-400 text-sm">스마트 무인 예약 시스템으로 관리 효율 극대화</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all">
                    <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center text-2xl font-black text-white italic">02</div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">높은 재방문율 85%</h4>
                      <p className="text-gray-400 text-sm">시니어 맞춤형 커뮤니티 공간 구성으로 고정 고객 확보</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 p-12 rounded-[50px] border border-white/10 backdrop-blur-md">
                 <div className="text-center space-y-8">
                    <p className="text-gray-400 text-lg">가맹점 평균 월 매출 (30평 기준)</p>
                    <div className="text-6xl md:text-7xl font-black text-green-400 italic">₩ 35,000,000+</div>
                    <div className="h-[1px] bg-white/10 w-full"></div>
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">예상 수익률</p>
                        <p className="text-3xl font-black">42%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">투자 회수 기간</p>
                        <p className="text-3xl font-black">15~18개월</p>
                      </div>
                    </div>
                    <p className="text-[10px] text-gray-600">*위 데이터는 실제 가맹점 평균 수익을 기반으로 산출되었습니다.</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        <FacilitiesSection />

        {/* Process Section */}
        <section id="process" className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">성공을 위한 6단계 프로세스</h2>
              <p className="text-gray-500 text-lg">체계적인 시스템으로 점주님의 시작을 본사가 함께합니다.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12 relative">
              {/* Connector Line for Desktop */}
              <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-gray-200 z-0"></div>
              
              {STEPS.map((step, idx) => (
                <div key={idx} className="relative z-10 group text-center lg:text-left">
                  <div className="w-20 h-20 bg-white border-2 border-green-600 rounded-full flex items-center justify-center text-3xl font-black text-green-700 mb-8 mx-auto lg:mx-0 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shadow-xl">
                    {step.step}
                  </div>
                  <h4 className="text-2xl font-black text-gray-900 mb-4">{step.title}</h4>
                  <p className="text-gray-500 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Reservation />
      </main>

      <Footer />
      <ChatBot />
      
      {/* Floating Quick Action */}
      <div className="fixed bottom-10 left-10 z-40">
        <a href="tel:1577-0000" className="flex items-center gap-4 bg-gray-900 text-white pl-4 pr-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform group">
          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-xl group-hover:animate-shake">
            <i className="fa-solid fa-phone"></i>
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Call Center</p>
            <p className="text-lg font-black tracking-tight">1577-0000</p>
          </div>
        </a>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: rotate(0); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }
        .group:hover .group-hover\\:animate-shake {
          animation: shake 0.3s infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
