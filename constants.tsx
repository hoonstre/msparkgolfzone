
import { NavItem, Facility } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '홈', href: '#' },
  { label: '창업 경쟁력', href: '#advantage' },
  { label: '수익성 분석', href: '#profit' },
  { label: '개설 안내', href: '#process' },
  { label: '가맹 신청', href: '#inquiry' },
];

export const BUSINESS_ADVANTAGES = [
  {
    id: 1,
    title: '압도적 시장 점유율',
    description: '대한민국 파크골프 인구 15만 명 시대, 전국 최대 네트워크와 인지도를 자랑하는 No.1 브랜드입니다.',
    icon: 'fa-trophy'
  },
  {
    id: 2,
    title: '최첨단 듀얼 센서',
    description: '실제 필드의 경사와 구름을 99% 재현하는 초고속 듀얼 센서와 엔진으로 압도적인 몰입감을 제공합니다.',
    icon: 'fa-microchip'
  },
  {
    id: 3,
    title: '무인 오토 시스템',
    description: '키오스크 기반의 예약/결제 시스템으로 인건비 걱정 없는 효율적인 1인 매장 운영이 가능합니다.',
    icon: 'fa-robot'
  },
  {
    id: 4,
    title: '본사 직접 지원',
    description: 'A/S 전담팀 운영과 전국 단위 통합 마케팅 지원으로 오픈부터 사후관리까지 본사가 책임집니다.',
    icon: 'fa-handshake-angle'
  }
];

export const STEPS = [
  { step: '01', title: '가맹 상담 접수', desc: '사업성 검토 및 브랜드 비전 공유' },
  { step: '02', title: '입지 및 상권분석', desc: '최적의 성공 입지 선별 및 타당성 분석' },
  { step: '03', title: '가맹 계약 체결', desc: '계약 체결 및 가맹점 관리 규약 안내' },
  { step: '04', title: '인테리어/시공', desc: '본사 표준 매뉴얼에 따른 전문가 시공' },
  { step: '05', title: '운영/시스템 교육', desc: '매장 관리 및 마케팅 전략 현장 교육' },
  { step: '06', title: '그랜드 오픈', desc: '본사 홍보 지원 및 오픈 프로모션 진행' }
];

export const FACILITIES: Facility[] = [
  {
    id: 1,
    title: '프리미엄 룸 (V-시리즈)',
    description: '실감나는 그래픽과 정교한 물리 엔진이 탑재된 MS 파크골프존의 핵심 시스템입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: '스마트 키오스크',
    description: '고객이 직접 예약하고 결제하는 시스템으로 운영 효율을 극대화합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: '시니어 휴게 라운지',
    description: '시니어 층의 취향을 고려한 아늑하고 품격 있는 대기 및 커뮤니티 공간입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: '본사 공식 클럽/볼',
    description: 'MS만의 기술력으로 제작된 고성능 파크골프 장비를 전용 공급합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=800'
  }
];
