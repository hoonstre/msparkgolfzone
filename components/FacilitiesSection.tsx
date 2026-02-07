
import React from 'react';
import { FACILITIES } from '../constants';

const FacilitiesSection: React.FC = () => {
  return (
    <section id="facilities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">프리미엄 시설 안내</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            MS 파크골프존만의 차별화된 인프라를 경험해보세요. 최첨단 기술과 편안함이 공존하는 공간입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FACILITIES.map((facility) => (
            <div 
              key={facility.id} 
              className="group bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={facility.imageUrl} 
                  alt={facility.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
