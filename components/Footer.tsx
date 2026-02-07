
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">MS</div>
              <span className="text-xl font-bold tracking-tight">MS 파크골프존</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              도심 속의 푸른 쉼터, MS 파크골프존에서 당신의 건강한 라이프스타일을 시작해보세요. 최고의 시설과 서비스를 약속합니다.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors">
                <i className="fa-solid fa-blog"></i>
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">브랜드 스토리</a></li>
              <li><a href="#" className="hover:text-white transition-colors">이용 안내</a></li>
              <li><a href="#" className="hover:text-white transition-colors">예약 문의</a></li>
              <li><a href="#" className="hover:text-white transition-colors">오시는 길</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6">Support</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">공지사항</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
              <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">MS 파크골프존의 소식과 혜택을 받아보세요.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="이메일 주소" 
                className="bg-gray-800 border-none rounded-l-lg px-4 py-2 text-sm focus:ring-1 focus:ring-green-500 w-full"
              />
              <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-lg transition-colors">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
          <p>© 2024 MS Park Golf Zone. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
