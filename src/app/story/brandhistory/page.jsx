import React from "react";
import Link from "next/link";
import "@/styles/story/brandstory/brandstory.css";
import StorySection from "@/components/story/storysection/storysection.jsx";

const storyItems = [
  {
    year: "1945",
    icon: "/images/story/brandhistory/img_logo_1945.png",
    icon2: "/images/story/brandhistory/bg_logo_story_year.png",
    // bgImage: "/images/story/brandstory/bg-1945.png",
    title: "어바인 라빈스와 버턴 배스킨의 스토리",
    desc: `어린시절 아버지의 아이스크림 가게에서 일하던 어바인 라빈스는
           1945년 캘리포니아에서 스노우보드(Snowbird)라는 
           자신만의 아이스크림 전문점을 오픈하였습니다.
           한편, 그의 매부인 버턴배스킨은 참전용사을 위한 아이스크림을
           만들다 전쟁이 끝나자 버턴스 아이스크림 매장 
           (Burton's Ice Cream)을 열었습니다.`,
    img: "/images/story/brandhistory/img_item_1.jpg",
    iconPosition: "left",
    offsetClass: "offset-1"
  },
  {
    year: "1960",
    icon: "/images/story/brandhistory/img_logo_1945.png",
    icon2: "/images/story/brandhistory/bg_logo_story_year.png",
    // bgImage: "/images/story/brandhistory/img_item_2.jpg",
    title: "배스킨라빈스 합작회사 설립",
    desc: `배스킨라빈스 브랜드는 마침내 두 사람이 자신들의 이름을 합친
          아이스크림 회사를 설립하며 시작하였습니다.
          브랜드의 이름은 '라빈스 배스킨' 혹은 '배스킨 라빈스' 둘 중에
          하나로 추려졌으며, 최종 이름은 동전을 던져서 결정하였다고 합니다.
          결국 버턴스가 내기에서 이기게 되어 회사 이름은
          배스킨라빈스(Baskin Robbins Ice Cream)가 되었습니다.
          독특한 풍미의 다양한 맛의 아이스크림 전문 매장이 생기자
          이는 곧 선풍적인 인기를 끌었습니다`,
    img: "/images/story/brandhistory/img_item_2.jpg",
    iconPosition: "right",
    offsetClass: "offset-2",
  },
  {
    year: "1986",
    icon: "/images/story/brandhistory/img_logo_1960.png",
    icon2: "/images/story/brandhistory/bg_logo_story_year.png",
    // bgImage: "/images/story/brandstory/bg-1945.png",
    title: "비알코리아 설립",
    desc: `배스킨라빈스는 10년 만에 미국 내 400개 이상의 매장을 둔
            어엿한 기업으로 성장했습니다.
            1958년 LA다저스팀이 생겼을 땐 ‘베이스볼 넛’이라는
            아이스크림을 출시했으며, 아폴로 11호가 달에 착륙했을 땐
            이를 기념해 ‘루나 치즈케이크’를 출시하기도 했습니다.
            70년대 부터 일본, 사우디아라비아, 호주 등을 거쳐
            1985년 드디어 한국에서 배스킨라빈스를 만날 수 있게 되었습니다.`,
    img: "/images/story/brandhistory/img_item_3.jpg",
    iconPosition: "left",
    offsetClass: "offset-3",
  },
  {
    year: "1960",
    icon: "/images/story/brandhistory/img_logo_1960.png",
    icon2: "/images/story/brandhistory/bg_logo_story_year.png",
    // bgImage: "/images/story/brandhistory/img_item_2.jpg",
    title: "직영 1호 명동점, 가맹 1호 구반포점 오픈 ",
    desc: `배스킨라빈스는 1986년 8월 9일 대한민국 서울, 명동에 1호점을 정식으로 오픈했습니다.
           그 후 8월 13일에는 2호점을 오픈하며 프리미엄 아이스크림 시대를 시작하였습니다.
           단순한 기호식품이 아닌 즐거움과 행복을 가져다 주는 이미지를 창출한 '배스킨라빈스'는
           이후 국내 프리미엄 아이스크림 시장의 절반 이상을 점유하며,
           등장 이래 현재까지 시장점유율 1위 자리를 유지 중입니다.`,
    img: "/images/story/brandhistory/img_item_4.jpg",
    iconPosition: "right",
    offsetClass: "offset-4",
  },

  {
    year: "1997",
    icon: "/images/story/brandhistory/img_logo_1997.png",
    icon2: "/images/story/brandhistory/bg_logo_story_year.png",
    // bgImage: "/images/story/brandstory/bg-1945.png",
    title: "인크레더블 케이크 출시",
    desc: `배스킨라빈스 하면 빼놓을 수 없는 것이 바로 '아이스크림 케이크' 입니다.
           배스킨라빈스는 1997년 국내 최초 '인크레더블' 아이스크림 케이크를 출시했습니다.
           케이크 옆면에 초콜릿이 흘러내리는 형상의 제품은 당시 화제가 되었으며,
           아이스크림으로 케이크를 만들 수 있다는 사실을 소비자들은
           신선해하며 많은 사랑을 받았습니다.
           그 결과 아이스크림 케이크 판매량은 매년 폭발적으로 늘어났으며,
           미국 및 중동 국가에 역수출 하게 되었습니다.`,
    img: "/images/story/brandhistory/img_item_5.jpg",
    iconPosition: "left",
    offsetClass: "offset-5",
  },

  {
    year: "2001",
    icon: "/images/story/brandhistory/img_logo_1997.png",
    icon2: "/images/story/brandhistory/bg_logo_story_year.png",
    // bgImage: "/images/story/brandhistory/img_item_2.jpg",
    title: "추억의 아이스크림 소녀 광고 방영,국내 500호점 오픈",
    desc: `2000년에는 국내 500호점을 오픈하며, 한국은 전 세계에서 미국 다음으로
           배스킨라빈스 매장이 두 번째로 많은 나라가 되었습니다.
           배스킨라빈스 로고의 '31'이란 숫자는 창립자인 배스킨과 라빈스가
          '한 달 31일 내내 새로운 맛을 선사하겠다'는 의미로 만들었다고 합니다.
          국내에서는 추억의 아이스크림 소녀 광고를 통해 배스킨라빈스의 인지도가 높아졌으며,
          창립 이후 무려 1,500여개 이상의 맛이 출시 되며
          '배스킨라빈스31'도 대중들의 인식 속에 자리잡았습니다.`,
    img: "/images/story/brandhistory/img_item_6.jpg",
    iconPosition: "right",
    offsetClass: "offset-6",
  },

  {
    year: "2005",
    icon: "/images/story/brandhistory/img_logo_2005.png",
    icon2: "/images/story/brandhistory/bg_logo_story_year.png",
    // bgImage: "/images/story/brandstory/bg-1945.png",
    title: "국내 최초 31요거트 출시",
    desc: `2005년에 출시된 배스킨라빈스의 메인플레이버인 '31요거트'는
           배스킨라빈스 한국에서 독자적으로 개발하여 본사에 역 수출한 제품입니다.
           유산균이 듬뿍 들어가 요거트 본연의 새콤한 맛과
           식감을 느낄 수 있습니다.
           한국에서 개발한 '31요거트'는 미국에서 수출되어
           여러 요거트 제품을 개발하는데 적용되었습니다.`,
    img: "/images/story/brandhistory/img_item_7.jpg",
    iconPosition: "left",
    offsetClass: "offset-7",
  },

  {
    year: "2007",
    icon: "/images/story/brandhistory/img_logo_2005.png",
    icon2: "/images/story/brandhistory/bg_logo_story_year.png",
    // bgImage: "/images/story/brandhistory/img_item_2.jpg",
    title: "이달의 맛 시작",
    desc: `배스킨라빈스는 2007년 1월부터 매 월 신제품을 출시하기 시작해,
           점차 '이달의 맛'이라는 타이틀이 자리잡게 되었습니다. 신제품 뿐 아니라
           베스트 제품도 이달의 맛으로 출시되어 당시의 대중들에게 호평을 받으며
           정식 메뉴로 자리잡았습니다.
           현재도 미니언즈, 스누피와 같이 인기있는 캐릭터 및 식음료 브랜드와도 협업해
           매 월 아이스크림을 출시하고 있습니다.
           남다른 아이스크림 작명 역시 인기를 뒷받침하며, 소비자 참여 콘테스트를 진행하는 등
           색다른 재미를 주며 호기심을 불러일으키고 있습니다.`,
    img: "/images/story/brandhistory/img_item_8.jpg",
    iconPosition: "right",
    offsetClass: "offset-8",
  },

  {
    year: "2011",
    icon: "/images/story/brandhistory/img_logo_2005.png",
    icon2: "/images/story/brandhistory/bg_logo_story_year.png",
    // bgImage: "/images/story/brandstory/bg-1945.png",
    title: "골라먹는 케이크 와츄원 출시, 국내 1000호점 오픈",
    desc: `2011년 배스킨라빈스에서는 새로운 컨셉의 골라먹는
           아이스크림 케이크 ‘와츄원’을 출시했습니다.
           4~8가지의 맛을 하나의 케이크에 골라먹을 수 있도록 디자인 되었으며
           전 세계 배스킨라빈스 중 한국에서 최초로 선보였습니다.
           출시 3주만에 10만개 이상의 판매고를 올렸으며 예약 주문만 2만개가
           몰리는 등 최고의 인기를 끌었습니다.
           이에 2011년 배스킨라빈스는 국내 1,000호점을 돌파했습니다..`,
    img: "/images/story/brandhistory/img_item_9.jpg",
    iconPosition: "left",
    offsetClass: "offset-9",
  },

  {
    year: "2016",
    icon: "/images/story/brandhistory/img_logo_2016.png",
    icon2: "/images/story/brandhistory/bg_logo_story_year.png",
    // bgImage: "/images/story/brandhistory/img_item_2.jpg",
    title: "배달 서비스 시작",
    desc: `2016년 서울 일부 지역에서 아이스크림 배달 서비스를
           최초로 시작했습니다.
           오픈 이벤트로 셋째 주 월요일에 '해피딜리버리데이' 프로모션 등
           다양한 배달 주문 이벤트를 실시했습니다.
           현재는 1,400여개 점포에서 딜리버리를 제공 중이며
           배스킨라빈스의 해피오더 관련 매출은 초기 비해
           4배 이상 늘어났습니다.`,
    img: "/images/story/brandhistory/img_item_10.jpg",
    iconPosition: "right",
    offsetClass: "offset-10",
  },

  {
    year: "2020",
    icon: "/images/story/brandhistory/img_logo_2005.png",
    icon2: "/images/story/brandhistory/bg_logo_story_year.png",
    // bgImage: "/images/story/brandstory/bg-1945.png",
    title: `하이브한남, 삼청마당, 100플레이버 오픈,
            국내 1500호점 오픈`,
    desc: `배스킨라빈스는 기존 형태의 매장에 이어 첫 카페형 매장인 ‘HIVE(하이브) 한남’,
           한옥 콘셉트 매장 ‘삼청마당점’ 오픈 하였으며 전체 매장 수는 국내 1,500호점을 돌파했습니다.
           그밖에도 온라인 전용 아이스크림을 출시 하는 등 다양한 시도를 진행하며,
           2021년에는 100가지 다채로운 아이스크림을 판매하는 플래그십 스토어
           ‘100 플레이버’를 오픈하였습니다.
           '100 플레이버' 매장은 파르나스몰점을 시작으로 최근 오픈한 스퀘어 강남점,
           강남대로점, 부산서면점 총 4곳에서 만나볼 수 있습니다.`,
    img: "/images/story/brandhistory/img_item_11.jpg",
    iconPosition: "left",
    offsetClass: "offset-11",
  },
];

export default function BrandHistoryPage() {
  return (
    /** 브레드크럼 & 타이틀 */
    <main className="bebetter-wrapper1">
      <div className="breadcrumb">
        <span href="/story/history" className="breadcrumbbar active1">
          브랜드 스토리
        </span>
        <Link href="/story/history" className="breadcrumbbar">
          이달의 맛 히스토리
        </Link>
        <span className="breadcrumbbar">Be Better</span>
      </div>
      <h1 className="bebetter-title">Brand Story</h1>
      <h3 className="bebetter-undertitle">우리와 함께한 배라의 이야기</h3>+{" "}
      {/* StorySection 컴포넌트 삽입 */}
      <StorySection items={storyItems} />
    </main>
  );
}
