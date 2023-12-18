import React, { useState, useRef, useEffect } from "react";
import { Point, ResponsiveLine } from "@nivo/line";
import { useSpring, animated } from "react-spring";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/bundle";
import "swiper/swiper.min.css";

import "@styles/LastYearReport2023.scoped.scss";
import styles from "@styles/LastYearReport2023.module.scss";
import { fontFamily } from "html2canvas/dist/types/css/property-descriptors/font-family";

declare const window: any;
export default function YearEndReport2023() {
  const [num, setNum] = useState(0);
  const count = (e: any) => {
    const scrollTop = e.target.scrollTop;
    if (scrollTop >= 400) {
      setNum(123456789);
    }
  };

  const props = useSpring({ val: num, from: { val: 0 } });

  const lineData = [
    {
      id: "spending",
      color: "#12d801",
      data: [
        {
          x: "1월",
          y: 297,
        },
        {
          x: "2월",
          y: 200,
        },
        {
          x: "3월",
          y: 150,
        },
        {
          x: "4월",
          y: 280,
        },
        {
          x: "5월",
          y: 198,
        },
        {
          x: "6월",
          y: 228,
        },
        {
          x: "7월",
          y: 213,
        },
        {
          x: "8월",
          y: 62,
        },
        {
          x: "9월",
          y: 77,
        },
        {
          x: "10월",
          y: 149,
        },
        {
          x: "11월",
          y: 106,
        },
        {
          x: "12월",
          y: 192,
        },
      ],
    },
  ];

  const BubbleData = [
    {
      index: 1,
      name: "강남역",
      desc: "테스트",
      color: "#01D8CB",
      value: 55,
    },
    {
      index: 2,
      name: "홍대",
      color: "#FFA67F",
      value: 45,
    },
    {
      index: 3,
      name: "고속터미널",
      color: "#7581F7",
      value: 35,
    },
    {
      index: 4,
      name: "여의도",
      color: "#7581F7",
      value: 25,
    },
    {
      index: 5,
      name: "용산",
      color: "FFA67F",
      value: 15,
    },
  ];

  // 라인그래프 높은금액 픽커
  const peakPoint = ({ ...props }) => {
    const { points } = props;
    const targetPoint: Point = points[0];

    return (
      <g>
        {/* 금액 */}
        {/* 왼쪽 정렬 */}
        <text x={targetPoint.x - 55} y={targetPoint.y - 33} transform="translate(40, 0)" className="amount_font">
          132,765,127원
        </text>

        {/* 오른쪽 정렬 */}
        {/* <text x={targetPoint.x-25} y={targetPoint.y-33}
        text-anchor="end" alignment-baseline="end" transform="translate(40, 0)" className='amount_font'>132,765,127원</text> */}

        {/* 가운데정렬 */}
        {/* <text x={targetPoint.x-40} y={targetPoint.y-33} text-anchor="middle" alignment-baseline="middle" transform="translate(40, 0)" className='amount_font'>
          132,765,127원
        </text> */}

        {/* 큰원 */}
        <circle cx={targetPoint.x} cy={targetPoint.y} fill="#12d80120" r={18} />
        {/* 중간원 */}
        <circle cx={targetPoint.x} cy={targetPoint.y} fill="#12d80140" r={11} />
        {/* 작은원 */}
        <circle cx={targetPoint.x} cy={targetPoint.y} fill="#12d801" r={5} />
      </g>
    );
  };

  // sticky붙는 이벤트
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = (e: any) => {
    e.target.addEventListener("scroll", setScrollY(e.target.scrollTop));
    return () => {
      e.target.removeEventListener("scroll");
    };
  };

  return (
    <div className={"block detail full-width yearend_wrapper"} onScroll={handleScroll}>
      <header className={"header hbox center"}>
        <button className={"back"}></button>
        <h2 className={"page-title is-regular"}>연말리포트</h2>
        <button className="right share_link">공유</button>
      </header>

      {/* 플로팅버튼 */}
      <div className="fix-upbtnBox right">
        <div className="btn-floating white">
          <button className="to-Top">맨위로 가기</button>
        </div>
      </div>

      <div className="content-area" onScroll={count}>
        <div className="report_cover">
          <div className="big_title_area">
            <div className="title_cover_img">
              <p className="cover_sub_title">
                하루조각과 함께한 2023년,
                <br />
                특별한 기록들 돌아보고{" "}
                <em>
                  <strong>선물의 행운</strong>까지!
                </em>
              </p>
              <span className="deco_binggle">
                <span className="icon rotate-scale-down"></span>
              </span>
              <span className="deco_sparkles flicker-1"></span>
              <span className="deco_arrow">
                <span className="icon flip-diagonal-1-tr slide-in-br"></span>
              </span>
              <span className="obj_calendar">
                <span className="icon heartbeat"></span>
              </span>
            </div>

            <div className="allow_down">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <ul className="link_box">
          <li className="skyLantern_event"></li>
          {/* <li className="skyLantern_event1"></li> */}
          <li className="soloEscape_challenge"></li>
        </ul>
        <div className="cover_description">
          <span className="img_obj_graph"></span>
          <span className="img_cover_description"></span>
        </div>

        {/* <div className="capsule">
          <div className="capsule_new">
            <div className="wrapper">
              <div className="horizonScroll__item">이벤트</div> 
              <div className="horizonScroll__item on">어디에 얼마 썼지?</div> 
              <div className="horizonScroll__item">올해 최고 핫플</div>
              <div className="horizonScroll__item">얼마나 걸었지</div>
              <div className="horizonScroll__item">누가 재밌었지?</div>
              <div className="horizonScroll__item">특별했던 어느 날</div>
            </div>
          </div>
        </div> */}

        {/* 풍등 이벤트 끌어올려~ */}
        <section className="lastyear_event">
          <div className="deco1"></div>
          <div className="gayeon_deco2"></div>
          <div className="event_box left">
            <div>
              <div className="deco"></div>
              <p>새해 목표 풍등이벤트</p>
              <span>새해 목표를 담아 풍등을 띄우면 <em>맥북과 선물</em>이!</span>
              <div className="present">
                <div className="reward macbookAir"></div>
                <div className="reward ipadAir"></div>
                <div className="reward airpodsMax"></div>
              </div>
            </div>
            <button className="button orange">
              이벤트 보러가기
            </button>
          </div>
          <div className="event_box right">
            <div className="gayeon_deco"></div>
            <div className="gayeon_deco1"></div>
            
            <div>
              <caption>하루조각 X 가연</caption>
              <p>망설이지 마세요 당신의 솔로탈출</p>
              <span>
                인연은 가연에게,<br/>혜택은 하루조각으로부터
                당신은 호감만 확인하세요.
              </span>
            </div>
            <button className="button violet">
              이벤트 보러가기
            </button>
          </div>
        </section>

        {/* TAB : 어디에 얼마썼지? */}
        <section className="spending">
          <div className="Tab_title">어디에 얼마 썼지?</div>
          <div className="issue_box">
            <article>
              <span className="sub_text">올해 내 또래가 소비한 금액</span>

              <p className="medium_text">
                평균{" "}
                <em>
                  <animated.span>{props.val.interpolate((val) => Math.floor(val))}</animated.span>
                </em>
                원{/* 평균 <em>12,456,789</em>원 */}
              </p>
              <span className="small_text graph">30대 여성 기준</span>
              <span className="obj_coin"></span>
            </article>
            <article>
              <span className="sub_text">나는 23년 한 해 동안</span>
              <p className="medium_text">
                총{" "}
                <em>
                  <animated.span>{props.val.interpolate((val) => Math.floor(val))}</animated.span>
                </em>
                원을
                <br />
                소비했어요.
              </p>
              <span className="small_text decrease">또래 평균보다 1,234,567원 더 썼어요</span>
              <span className="small_text increase">또래 평균보다 1,234,567원 더 썼어요</span>
              <div className="line_chart">
                {/* <div className='pic_high'>
                  <p className='amount'>2,765,127원</p>
                  <span className='target'></span>
                </div> */}
                <ResponsiveLine
                  data={lineData}
                  colors={"#12d801"}
                  lineWidth={2}
                  margin={{ top: 60, right: 20, bottom: 20, left: 20 }}
                  yScale={{
                    type: "linear",
                    min: "auto",
                    max: "auto",
                    reverse: false,
                  }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={null}
                  axisLeft={null}
                  enableGridX={false}
                  enableGridY={false}
                  enablePoints={false}
                  layers={[peakPoint, "lines"]}
                />
                {/* 소비차트 월 axis */}
                {/* <div className="spendig_month">
                  <div className="pic_high">1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>10</div>
                  <div>11</div>
                  <div>12</div>
                </div> */}
                <div className="spendig_month">
                  <div>1월</div>
                  <div>2월</div>
                  <div>3월</div>
                  <div>4월</div>
                  <div>5월</div>
                  <div>6월</div>
                  <div>7월</div>
                  <div>8월</div>
                  <div className="pic_high">9월</div>
                  <div>10월</div>
                  <div>11월</div>
                  <div>12월</div>
                </div>
              </div>
            </article>
          </div>
          {/* <div className="issue_box">
            <article>
            <span className="sub_text"> 내 또래가 주목하는</span>
              <p className="medium_text">
                2023 <em>최애 브랜드</em>
              </p>
              <span className="small_text graph">30대 남성 기준</span>
              <ul className="ranking_list">
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">무신사 스토어</p>
                    <span className="small_text">1,230명 총 1,234,000원 결제</span>
                  </div>
                </li>
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">우아한 형제들</p>
                    <span className="small_text">1,230명 총 1,234,000원 결제</span>
                  </div>
                </li>
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">네이버페이</p>
                    <span className="small_text">1,230명 총 1,234,000원 결제</span>
                  </div>
                </li>
              </ul>
            </article>
            <article>
              <p className="medium_text">내가 사랑한 브랜드는</p>
              <ul className="ranking_list">
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">네이버페이</p>
                    <span className="small_text">1,230명 총 1,234,000원 결제</span>
                  </div>
                </li>
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">행복마루</p>
                    <span className="small_text">1,230명 총 1,234,000원 결제</span>
                  </div>
                </li>
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">티머니</p>
                    <span className="small_text">1,230명 총 1,234,000원 결제</span>
                  </div>
                </li>
              </ul>
            </article>
          </div> */}
          {/* 1129 - 개선 */}
          <div className="issue_box">
            <article>
              <span className="sub_text"> 내 또래가 주목하는</span>
              <p className="medium_text">
                2023 <em>최애 브랜드</em>
              </p>
              <span className="small_text graph">30대 남성 기준</span>

              <ul className="ranking_list_vol1">
                <li>
                  <div className="ranking_title">
                    <p className="sub_text ranking">GS25</p>
                  </div>
                </li>
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">우아한 형제들</p>
                  </div>
                </li>
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">네이버페이</p>
                  </div>
                </li>
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">네이버페이</p>
                  </div>
                </li>
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">네이버페이</p>
                  </div>
                </li>
              </ul>
            </article>
            <article>
              <p className="medium_text">내가 사랑한 브랜드는</p>
              <ul className="ranking_list_vol1">
                <li>
                  <div className="ranking_title">
                    <p className="sub_text ranking">GS25</p>
                    <span className="small_text">1,230명 총 1,234,000원 결제</span>
                  </div>
                </li>
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">우아한 형제들</p>
                    <span className="small_text">1,230명 총 1,234,000원 결제</span>
                  </div>
                </li>
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">네이버페이</p>
                    <span className="small_text">1,230명 총 1,234,000원 결제</span>
                  </div>
                </li>
              </ul>
            </article>
          </div>
          {/* 어디에 얼마썼지? : 미연동 케이스 */}
          <div className="issue_box">
            <article>
              <span className="sub_text">올해 내 또래가 소비한 금액</span>
              <p className="medium_text">
                평균 <em>12,456,789</em>원
              </p>
              <span className="small_text graph">30대 여성 기준</span>
              <span className="obj_coin"></span>
            </article>
          </div>
          <div className="issue_box">
            <article>
              <span className="sub_text"> 내 또래가 주목하는</span>
              <p className="medium_text">
                2023 <em>최애 브랜드</em>
              </p>
              <span className="small_text graph">30대 남성 기준</span>
              {/* <ul className="ranking_list">
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">무신사 스토어</p>
                    <span className="small_text">1,230명 총 1,234,000원 결제</span>
                  </div>
                </li>
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">우아한 형제들</p>
                    <span className="small_text">1,230명 총 1,234,000원 결제</span>
                  </div>
                </li>
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">네이버페이</p>
                    <span className="small_text">1,230명 총 1,234,000원 결제</span>
                  </div>
                </li>
              </ul> */}
              <ul className="ranking_list_vol1">
                <li>
                  <div className="ranking_title">
                    <p className="sub_text ranking">GS25</p>
                  </div>
                </li>
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">우아한 형제들</p>
                  </div>
                </li>
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">네이버페이</p>
                  </div>
                </li>
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">네이버페이</p>
                  </div>
                </li>
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">네이버페이</p>
                  </div>
                </li>
              </ul>
            </article>
          </div>
          <div className="issue_box">
            <article>
              <p className="medium_text Loading">
                올해의 소비기록
                <br />
                불러오는 중...
              </p>
              <span className="small_text">💸 내일 다시 와서 얼마 썼는지 확인해 보세요!</span>
              <div className="data_capture"></div>
            </article>
            {/* <button className="button green">
              잊지 않도록 알림 설정하기
            </button> */}
          </div>
        </section>
        {/* 하루챗 배너 */}
        <section>
          <div className="haruChat_banner">
            <caption>하루챗</caption>
            <p>
              기억나지 않는 23년의 소비 기록
              <br />
              이제 하루챗에 물어보세요!
            </p>
            <span>질문만 하면 쉽고 빠르게 알려드려요</span>
            <span className="obj_calendar_chat"></span>
          </div>
        </section>

        {/* TAB : 올해 최고 핫플 */}
        <section className="hot_place">
          <div className="Tab_title">올해 최고 핫플</div>
          <div className="issue_box">
            <article>
              <span className="sub_text">올해 주말을 뜨겁게 달군</span>
              <p className="medium_text">
                내 또래 인기 <em>핫플레이스</em>
              </p>
              <span className="small_text graph">서울지역 30대 여성 기준</span>
              <div className={`bubble_chart`}>
                <div className="bubble_wrap">
                  <div className="no1 bounce_in_fwd">
                    <div className="text_box">
                      <span>1위</span>
                      <p>강남역</p>
                      <desc>76명 방문</desc>
                    </div>
                  </div>
                  <div className="no2 bounce_in_fwd">
                    <div className="text_box">
                      <span>2위</span>
                      <p>홍대</p>
                      <desc>76명 방문</desc>
                    </div>
                  </div>
                  <div className="no3 bounce_in_fwd">
                    <div className="text_box">
                      <span>3위</span>
                      <p>고속터미널 2줄케이스샘플</p>
                      <desc>76명 방문</desc>
                    </div>
                  </div>
                  <div className="no4 bounce_in_fwd">
                    <div className="text_box">
                      <span>4위</span>
                      <p>여의도</p>
                      <desc>76명 방문</desc>
                    </div>
                  </div>
                  <div className="no5 bounce_in_fwd">
                    <div className="text_box">
                      <span>5위</span>
                      <p>용산전자상가</p>
                      <desc>76명 방문</desc>
                    </div>
                  </div>
                </div>
              </div>
              <p className="medium_text ">
                올해 내 <em>소비의 중심지</em>는
              </p>
              <ul className="ranking_card">
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">강남역</p>
                    <span className="small_text">3번 방문</span>
                  </div>
                </li>
                <li>
                  <div className="ranking_title no1">
                    <p className="sub_text">홍대</p>
                    <span className="small_text">3번 방문</span>
                  </div>
                </li>
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">
                      노량진
                      <br />
                      수산시장
                    </p>
                    <span className="small_text">5번 방문</span>
                  </div>
                </li>
              </ul>
            </article>
          </div>
          {/* 올해 최고 핫플 : 미연동 케이스 */}
          <div className="issue_box">
            <article>
              <span className="sub_text">올해 주말을 뜨겁게 달군</span>
              <p className="medium_text">
                내 또래 인기 <em>핫플레이스</em>
              </p>
              <span className="small_text graph">서울지역 30대 여성 기준</span>
              <div className={`bubble_chart`}>
                <div className="bubble_wrap">
                  <div className="no1">
                    <div className="text_box">
                      <span>1위</span>
                      <p>강남역</p>
                      <desc>76명 방문</desc>
                    </div>
                  </div>
                  <div className="no2">
                    <div className="text_box">
                      <span>2위</span>
                      <p>홍대</p>
                      <desc>76명 방문</desc>
                    </div>
                  </div>
                  <div className="no3">
                    <div className="text_box">
                      <span>3위</span>
                      <p>고속터미널2줄케이스샘플</p>
                      <desc>76명 방문</desc>
                    </div>
                  </div>
                  <div className="no4">
                    <div className="text_box">
                      <span>4위</span>
                      <p>여의도</p>
                      <desc>76명 방문</desc>
                    </div>
                  </div>
                  <div className="no5">
                    <div className="text_box">
                      <span>5위</span>
                      <p>용산 전자상가</p>
                      <desc>76명 방문</desc>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="issue_box">
            <article>
              <p className="medium_text">
                나는 올해
                <br />
                어디에서 얼마 썼을까?
              </p>
              <span className="small_text graph">평균 대비 얼마나 썼는지 비교해 보세요</span>
              <div className="ani_graph">
                <ul>
                  <li className="dis">
                    <span>1,234,345월</span>
                    <div className="bar"></div>
                    <span>30대 여성 평균</span>
                  </li>
                  <li>
                    <span>???</span>
                    <div className="bar"></div>
                    <span>닉네임님</span>
                  </li>
                </ul>
              </div>
            </article>
            <button className="button green">소비 연결해서 확인하기</button>
          </div>
          <div className="issue_box">
            <article>
              <p className="medium_text Loading">
                나만의 핫플 기록
                <br />
                불러오는 중...
              </p>
              <span className="small_text">💸 내일 다시 와서 기록을 확인해 보세요!</span>
              <div className="data_capture"></div>
            </article>
            <button className="button green">잊지 않도록 알림 설정하기</button>
          </div>
        </section>
        {/* TAB : 얼마나 걸었지? */}
        <section className="step_stats">
          <div className="Tab_title">얼마나 걸었지?</div>
          <div className="issue_box">
            <article>
              <span className="sub_text">내 또래는 하루 평균 이만큼 걸었어요</span>
              <p className="medium_text">
                <em>123,456,789</em>걸음
              </p>
              <span className="small_text graph">30대 여성 기준</span>
            </article>
            <article>
              <span className="sub_text">하루조각님은 올해 하루 평균</span>
              <p className="medium_text">
                <em>123,456,789</em>걸음
                <br />
                걸었어요.
              </p>
              <span className="small_text shoes">주말에 더 많이 걷는 주말피크닉러</span>
              {/* <span className='small_text shoes'>
                평일에 더 많이 걷는 평일걷기왕
              </span> */}
              <ul className="step_round">
                <li>
                  <div className="stepRound day small_data">23,456걸음</div>
                  <span>평일</span>
                </li>
                <li>
                  <div className="stepRound weeken big_data">23,456걸음</div>
                  <span>주말</span>
                </li>
              </ul>
            </article>
          </div>
          {/* 얼마나 걸었지? : 미연동 케이스 */}
          <div className="issue_box">
            <article>
              <span className="sub_text">내 또래는 하루 평균 이만큼 걸었어요</span>
              <p className="medium_text">
                <em>123,456,789</em>걸음
              </p>
              <span className="small_text graph">30대 여성 기준</span>
            </article>
          </div>
          <div className="issue_box">
            <article>
              {/* <span className="sub_text">하루조각님은 올해 하루 평균</span> */}
              <p className="medium_text">
                나는 평일과 주말 중<br />
                언제 더 많이 걸을까요?
              </p>
              <span className="small_text shoes">평일vs주말 걸음 수 대결!</span>
              {/* <span className='small_text shoes'>
                평일에 더 많이 걷는 평일걷기왕
              </span> */}
              <ul className="step_round no_connect">
                <li>
                  <div className="stepRound day small_data">평일걷기왕</div>
                </li>
                <li>
                  <div className="stepRound weeken big_data">주말피크닉러</div>
                </li>
              </ul>
            </article>
            <button className="button green">걸음 연결해서 확인하기</button>
          </div>
          {/* 데이터 수집 케이스 */}
          <div className="issue_box">
            <article>
              <p className="medium_text Loading">
                내 걸음 기록
                <br />
                불러오는 중...
              </p>
              <span className="small_text shoes">내일 다시 와서 기록을 확인해 보세요!</span>
              <ul className="step_round">
                <li className="data_capture"></li>
              </ul>
            </article>
            <button className="button green ">잊지 않도록 알림 설정하기</button>
          </div>
        </section>
        {/* TAB : 누가 재밌었지? */}
        <section className="best_youtube">
          <div className="Tab_title">누가 재밌었지?</div>
          <div className="issue_box">
            <article>
              <span className="sub_text">올해 많은 사랑을 받았던</span>
              <p className="medium_text">
                <em>내 또래 최애 유튜버</em>는
              </p>
              <span className="small_text graph">30대 여성 기준</span>
              <ul className="youtube_ranking">
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">1분 드라마모음.zip</p>
                    <span className="small_text">530명 시청</span>
                  </div>
                </li>
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">썰플리</p>
                    <span className="small_text">230명 시청</span>
                  </div>
                </li>
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">핵꿀잼</p>
                    <span className="small_text">230명 시청</span>
                  </div>
                </li>
              </ul>
            </article>
            <article>
              <p className="medium_text">나를 가장 몰입하게 한</p>
              <ul className="youtube_ranking">
                <li>
                  <div className="ranking_title">
                    <p className="sub_text ellipsisTwo">제목이 길어지는 경우 두줄 처리 말줄임으로 구현합니다.</p>
                    <span className="small_text">22회 시청</span>
                  </div>
                </li>
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">JTBC Drama</p>
                    <span className="small_text">12회 시청</span>
                  </div>
                </li>
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">이고바바</p>
                    <span className="small_text">11회 시청</span>
                  </div>
                </li>
              </ul>
            </article>
          </div>
          {/* 누가 재밌었지? : 미연동 케이스 */}
          <div className="issue_box">
            <article>
              <span className="sub_text">올해 많은 사랑을 받았던</span>
              <p className="medium_text">
                <em>내 또래 최애 유튜버</em>는
              </p>
              <span className="small_text graph">30대 여성 기준</span>
              <ul className="youtube_ranking">
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">1분 드라마모음.zip</p>
                    <span className="small_text">530명 시청</span>
                  </div>
                </li>
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">썰플리</p>
                    <span className="small_text">230명 시청</span>
                  </div>
                </li>
                <li>
                  <div className="ranking_title">
                    <p className="sub_text">핵꿀잼</p>
                    <span className="small_text">230명 시청</span>
                  </div>
                </li>
              </ul>
            </article>
          </div>
          <div className="issue_box">
            <article>
              <p className="medium_text">
                나를 가장
                <br />
                몰입하게 한 유튜버는?
              </p>
              <span className="small_text">📺 내 최애 유튜버는 누구인지 확인해 보세요</span>
              <div className="youtube_capsule_img"></div>
              {/* <ul className="youtube_capsule">
                <li><span>슈카월드</span></li>
                <li><span>침착맨</span></li>
                <li><span>아이콘</span></li>
                <li><span>소비</span></li>
                <li><span>empty</span></li>
              </ul>
              <ul className="youtube_capsule2">
                <li><span>부동산</span></li>
                <li><span>아이콘</span></li>
                <li><span>썰플리</span></li>
                <li><span>패션</span></li>
              </ul>
              <ul className="youtube_capsule3">
                <li><span>교육</span></li>
                <li><span>자기계발</span></li>
                <li><span>투자</span></li>
                <li><span>아이콘</span></li>
              </ul> */}
            </article>
            <button className="button green">관심사 연결해서 확인하기</button>
          </div>
          {/* 데이터 수집 케이스 */}
          <div className="issue_box">
            <article>
              <p className="medium_text Loading">
                내 유튜브 기록
                <br />
                불러오는 중...
              </p>
              <span className="small_text">📺 내일 다시 와서 기록을 확인해 보세요!</span>
              <ul className="youtube_ranking">
                <li className="data_capture"></li>
              </ul>
            </article>
            <button className="button green">잊지 않도록 알림 설정하기</button>
          </div>
        </section>
        {/* TAB : 특별했던 어느 날 */}
        <section className="year_issue_slideArea">
          <div className="slide_title">
            <span className="icon_slide_calendar"></span>
            <p>
              하루기록에 남겨진
              <br />
              닉네임님의 2023년, <br />
              <em>특별했던 날을 떠올려 보세요!</em>
            </p>

            <p>
              바빠서 놓친 특별했던 날,
              <br />
              <em>하루기록을 챙겨줄게요</em>
            </p>
          </div>
          <Swiper
            // pagination={{
            //   type: "fraction",
            // }}
            pagination={true}
            spaceBetween={10}
            slidesPerView={1.25}
            slidesOffsetBefore={20}
            slidesOffsetAfter={20}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            className={`issueSwiper ${styles.issueSwiper}`}
            observer={true}
            observeParents={true}>
            <SwiperSlide>
              <div className="issue_box">
                <article className="special_day">
                  <p>
                    <em>가장 많은 조각</em>을 남긴 날
                  </p>
                  <div className="flip_calendar">
                    <p className="month">3월</p>
                    <div className="day_bg">
                      <span className="day">
                        <span className="font_matrix">2</span>
                        <span className="font_matrix">8</span>
                      </span>
                    </div>
                  </div>
                  <div className="day_data">
                    <p>조각 내역</p>
                    <ul className="day_data_list">
                      <li>
                        <p>조각 내역을 찾고 있어요 ⏳</p>
                        {/* <span>123,456원</span> */}
                      </li>
                      {/* <li>
                        <p>네이버페이</p>
                        <span>123,456원</span>
                      </li>
                      <li>외 3개</li> */}
                    </ul>
                  </div>
                </article>
                <button className="button small_green">자동기록 남기기</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="issue_box">
                <article className="special_day">
                  <p>
                    <em>가장 많은 조각</em>을 남긴 날
                  </p>
                  <div className="zogak_data">
                    <p>2023년 3월 23일 월요일</p>
                    <span className="ellipsis">
                      화창한 날씨에 기분 좋은 하루였다! 아침에는 용산구에 있는 카페에서 아이스 아메리카노를 마시켜
                      조용한 시간을 보냈다. 오후에는 동네 공원에서 산책을 하며 햇빛을 쬐었고, 저녁에는 친구와 맛있는
                      음식을 먹으며 즐거운 대화를 나눴다. 앞으로도 이렇게 행복한 날들이 많았으면 좋겠다! #행복한하루
                      화창한 날씨에 기분 좋은 하루였다! 아침에는 용산구에 있는 카페에서 아이스 아메리카노를 마시켜
                      조용한 시간을 보냈다. 오후에는 동네 공원에서 산책을 하며 햇빛을 쬐었고, 저녁에는 친구와 맛있는
                      음식을 먹으며 즐거운 대화를 나눴다. 앞으로도 이렇게 행복한 날들이 많았으면 좋겠다! #행복한하루
                      #카페 #산책 #맛집 #즐거운시간 😀🌞🍽💬
                    </span>
                  </div>
                  <div className="day_data">
                    <p>조각 내역</p>
                    <ul className="day_data_list">
                      <li>
                        <p>네이버페이</p>
                        <span>123,456원</span>
                      </li>
                      <li>
                        <p>네이버페이</p>
                        <span>123,456원</span>
                      </li>
                      <li>외 3개</li>
                    </ul>
                  </div>
                </article>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="issue_box">
                <article className="special_day">
                  <p>
                    <em>최다 걸음 기록</em> 가장 건강했던날
                  </p>
                  <div className="flip_calendar">
                    <p className="month">3월</p>
                    <div className="day_bg">
                      <span className="day">
                        <span className="font_matrix">0</span>
                        <span className="font_matrix">1</span>
                      </span>
                    </div>
                  </div>
                  <div className="day_data">
                    <p>
                      <ul>
                        <li>걸음 수</li>
                        <li>123,456걸음</li>
                      </ul>
                    </p>
                    <ul className="day_data_list">
                      <li>
                        <p>스타벅스 마곡나루점</p>
                        <span></span>
                      </li>
                      <li>
                        <p>LG사이언스파크</p>
                        <span></span>
                      </li>
                    </ul>
                  </div>
                </article>
                <button className="button small_green">자동기록 남기기</button>
              </div>
            </SwiperSlide>
          </Swiper> 
          {/* 이슈 없을때 */}
          <div className="issueSwiper noissue">
            <div className="issue_box">
              <article className="special_day">
                <p>
                  <em>가장 많은 조각</em>을 남긴 날
                </p>
                <div className="flip_calendar">
                  <p className="month">3월</p>
                  <div className="day_bg">
                    <span className="day">
                      <span className="font_matrix">2</span>
                      <span className="font_matrix">8</span>
                    </span>
                  </div>
                </div>
                <div className="day_data">
                  <p>조각 내역</p>
                  <ul className="day_data_list">
                    <li>
                      <p>조각 내역을 찾고 있어요 ⏳</p>
                      {/* <span>123,456원</span> */}
                    </li>
                    {/* <li>
                      <p>네이버페이</p>
                      <span>123,456원</span>
                    </li>
                    <li>외 3개</li> */}
                  </ul>
                </div>
              </article>
              <button className="button small_green">자동기록 남기기</button>
            </div>
          </div>
        </section>

          
        <section className="sky_lantern">

          {/* 이벤트 종료 후 */}
          <div className='sky_lantern_bg'>
            <div className='lantern_bg2'>
              <div className='cover'>
                {/* <span>event</span> */}
                <p className='cover_name1'></p>
                <span className='text_title'></span>
                <div className='cover_mainImg'></div>
                <div className='sky_lantern_goal'>
                  <p className='cover_sub'>
                    하루조각에서 나의 한 해를 돌아보고<br/>
                    <strong>2024년 새해 목표를 담아 풍등을 띄워주세요</strong>
                  </p>
                </div>
              </div>
              <button className="button orange">이벤트 보러가기</button>
            </div>
          </div>

          {/* <div className="lantern_bg">
            <div className="lantern_bgBox">
              <article>
                <span className="img_skylantern"></span>
                <p className="event_title">새해목표 풍등이벤트</p>
                <span>
                  나의 한 해를 돌아보고
                  <strong>
                    2023년 새해 목표를 담아
                    <br />
                    풍등을 띄우면 <em>선물의 행운</em>이
                  </strong>
                  !
                </span>

                <div className="present">
                  <div className="reward macbookAir">
                    <span>1명</span>
                    <p>맥북 에어</p>
                  </div>
                  <div className="reward ipadAir">
                    <span>1명</span>
                    <p>아이패드 에어</p>
                  </div>
                  <div className="reward airpodsMax">
                    <span>1명</span>
                    <p>에어팟 맥스</p>
                  </div>
                </div>
              </article>
              <button className="button orange">이벤트 보러가기</button>
            </div>
          </div> */}
        </section>

        <section className="ga_yeon">
          <div className="gayeon_bg">
            <div className="gayeon_bgbox">
              <span className="gayeon_bg_deco1"></span>
              <span className="gayeon_bg_deco2"></span>
              <article>
                <caption>하루조각 X 가연</caption>
                <p className="gayeon_event_title">망설이지 마세요. 당신의 솔로탈출</p>
                <span>
                  인연은 가연에게, 혜택은 하루조각으로부터,
                  <br />
                  <em>당신은 오로지호감만 확인하세요.</em>
                </span>
                <div className="img_ring"></div>
              </article>
              <button className="button violet">이벤트 보러가기</button>
            </div>
          </div>
        </section>

        <section className="lastYear_share">
          <span className="thumbs_up"></span>
          <p className="thumbs_up_text">친구에게도 알려주고 싶다면</p>
          <div className="btnBox">
            <button className="button green share">연말리포트 공유하기</button>
          </div>
        </section>

        <section className="haruZogak_people">
          <span>2023 데이터로 요약하는</span>
          <p>하루조각 피플</p>

          <div className="rollingbanner">
            <div className="m-scroll">
              <ul className="oneline">
                <li>
                  하루조각을 가장 많이 쓰는 👩🏻‍💻 <em>20대</em> 하루조각에 수집된 조각 🧩 <em>6천3백만개</em>
                </li>
                <li>
                  하루조각을 가장 많이 쓰는 👩🏻‍💻 <em>20대</em> 하루조각에 수집된 조각 🧩 <em>6천3백만개</em>
                </li>
                <li>
                  하루조각을 가장 많이 쓰는 👩🏻‍💻 <em>20대</em> 하루조각에 수집된 조각 🧩 <em>6천3백만개</em>
                </li>
                <li>
                  하루조각을 가장 많이 쓰는 👩🏻‍💻 <em>20대</em> 하루조각에 수집된 조각 🧩 <em>6천3백만개</em>
                </li>
              </ul>
            </div>
            <div className="m-scroll2">
              <ul className="oneline">
                <li>
                  <em>기록 황금시간대</em> 🕚 pm10시&nbsp;
                  <em>수면시간</em> 😴 평균 6.6시간&nbsp;
                  <em>최애 휴가지</em> 🏝 여수
                </li>
                <li>
                  <em>기록 황금시간대</em> 🕚 pm10시&nbsp;
                  <em>수면시간</em> 😴 평균 6.6시간&nbsp;
                  <em>최애 휴가지</em> 🏝 여수
                </li>
                <li>
                  <em>기록 황금시간대</em> 🕚 pm10시&nbsp;
                  <em>수면시간</em> 😴 평균 6.6시간&nbsp;
                  <em>최애 휴가지</em> 🏝 여수
                </li>
                <li>
                  <em>기록 황금시간대</em>🕚 pm10시&nbsp;
                  <em>수면시간</em>😴 평균 6.6시간&nbsp;
                  <em>최애 휴가지</em> 🏝 여수
                </li>
              </ul>
            </div>
            <div className="m-scroll3">
              <ul className="oneline">
                <li>
                  <em>걸음 수</em> 👟 평균 12,345걸음&nbsp;
                  <em>소비성향</em> 온라인쇼핑 20.8%&nbsp;
                  <em>기록 수</em> 1,234만개
                </li>
                <li>
                  <em>걸음 수</em> 👟 평균 12,345걸음&nbsp;
                  <em>소비성향</em> 온라인쇼핑 20.8%&nbsp;
                  <em>기록 수</em> 1,234만개
                </li>
                <li>
                  <em>걸음 수</em> 👟 평균 12,345걸음&nbsp;
                  <em>소비성향</em> 온라인쇼핑 20.8%&nbsp;
                  <em>기록 수</em> 1,234만개
                </li>
                <li>
                  <em>걸음 수</em> 👟 평균 12,345걸음&nbsp;
                  <em>소비성향</em> 온라인쇼핑 20.8%&nbsp;
                  <em>기록 수</em> 1,234만개
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="year_issue_tailArea">
          <p>내년에도 하루조각과 함께!</p>
          <span>
            조각으로 되돌아본 23년, 어떠셨나요?
            <br />
            소중한 기록으로 만들어 나가는 하루조각,
            <br />
            앞으로도 기대해 주세요!
          </span>
        </div>

        {/* 배경변환 인스타배경저장 내보내기 관련
        <div className='instar_link_event'>
          <div id='capture' className={count}>
            <div>그래프영역</div>
          </div>
          <div className='btn_bg_change'>
            <button onClick={backBgFirst}>case01</button>
            <button onClick={backBgSecound}>case02</button>
            <button onClick={backBgSecound}>case03</button>
            <button onClick={backBgSecound}>case04</button>
            <button onClick={backBgSecound}>case05</button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
