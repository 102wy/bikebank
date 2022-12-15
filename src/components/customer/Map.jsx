import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Map = () => {
    const { kakao } = window;

    const option = [
        {
            id: 1,
            state: 'seoul',
            lat: 37.566725127769274,
            lng: 126.97884471080586,
            city: ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'],
        },
        {
            id: 2,
            state: 'busan',
            lat: 35.18038868186471,
            lng: 129.07440387481293,
            city: ['강서구', '금정구', '남구', '동구', '동래구', '부산진구', '북구', '사상구', '사하구', '서구', '수영구', '연제구', '영도구', '중구', '해운대구', '기장군']
        },
        {
            id: 3,
            state: 'incheon',
            lat: 35.18038868186471,
            lng: 129.07440387481293,
            city: ['계양구', '남구', '남동구', '동구', '부평구', '서구', '연수구', '중구', '강화군', '옹진군']
        },
        {
            id: 4,
            state: 'daegu',
            lat: 35.89268685843759,
            lng: 128.60058676858034,
            city: ['남구', '달서구', '동구', '북구', '서구', '수성구', '중구', '달성군']
        },
        {
            id: 5,
            state: 'gwangju',
            lat: 35.89268685843759,
            lng: 128.60058676858034,
            city: ['광산구', '남구', '동구', '북구', '서구']
        },
        {
            id: 6,
            state: 'deajeon',
            lat: 35.89268685843759,
            lng: 128.60058676858034,
            city: ['대덕구', '동구', '서구', '유성구', '중구']
        },
        {
            id: 7,
            state: 'ulsan',
            lat: 35.89268685843759,
            lng: 128.60058676858034,
            city: ['남구', '동구', '북구', '중구', '울주군']
        },
        {
            id: 8,
            state: 'sejong',
            lat: 35.89268685843759,
            lng: 128.60058676858034,
            city: []
        },
        {
            id: 9,
            state: 'gyeonggi',
            lat: 35.89268685843759,
            lng: 128.60058676858034,
            city: ['고양시', '과천시', '광명시', '구리시', '군포시', '남양주시', '동두천시', '부천시', '성남시', '수원시', '시흥시', '안산시', '안양시', '오산시', '의왕시', '의정부시', '평택시', '하남시', '가평군', '광주시', '김포시', '안성시', '양주군', '양평군', '여주군', '연천군', '용인시', '이천군', '파주시', '포천시', '화성시']
        },
        {
            id: 10,
            state: 'gangwon',
            lat: 35.89268685843759,
            lng: 128.60058676858034,
            city: ['강릉시', '동해시', '삼척시', '속초시', '원주시', '춘천시', '태백시', '고성군', '양구군', '양양군', '영월군', '인제군', '정선군', '철원군', '평창군', '홍천군', '화천군', '황성군']
        },
        {
            id: 11,
            state: 'chungbuk',
            lat: 35.89268685843759,
            lng: 128.60058676858034,
            city: ['제천시', '청주시', '충주시', '괴산군', '단양군', '보은군', '영동군', '옥천군', '음성군', '진천군', '청원군']
        },
        {
            id: 12,
            state: 'chungnam',
            lat: 35.89268685843759,
            lng: 128.60058676858034,
            city: ['공주시', '보령시', '서산시', '아산시', '천안시', '금산군', '논산군', '당진군', '부여군', '서천군', '연기군', '예산군', '청양군', '태안군', '홍성군']
        },
        {
            id: 13,
            state: 'gyeongbuk',
            lat: 35.89268685843759,
            lng: 128.60058676858034,
            city: ['경산시', '경주시', '구미시', '김천시', '문겅시', '상주시', '안동시', '영주시', '영천시', '포항시', '고령군', '군위군', '봉화군', '성주군', '영덕군', '영양군', '예천군', '울릉군', '울진군', '의성군', '청도군', '청송군', '칠곡군']
        },
        {
            id: 14,
            state: 'gyeongnam',
            lat: 35.89268685843759,
            lng: 128.60058676858034,
            city: ['거제시', '김해시', '마산시', '밀양시', '사천시', '울산시', '진주시', '진해시', '창원시', '통영시', '거창군', '고성군', '남해군', '산청군', '양산시', '의령군', '창녕군', '하동군', '함안군', '함양군', '합천군']
        },
        {
            id: 15,
            state: 'jeonbuk',
            lat: 35.8202404754861,
            lng: 127.10903210167227,
            city: ['군산시', '김제시', '남원시', '익산시', '전주시', '정읍시', '고창군', '무주군', '부안군', '순창군', '완주군', '임실군', '장수군', '진안군']
        },
        {
            id: 16,
            state: 'jeonnam',
            lat: 34.81612929908545,
            lng: 126.46285141991375,
            city: ['광양시', '나주시', '목포시', '순천시', '여수시', '여천시', '강진군', '고흥군', '곡성군', '구례군', '담양군', '무안군', '보성군', '신안군', '여천군', '영광군', '영암군', '완도군', '장성군', '장흥군', '진도군', '함평군', '해남군', '화순군']
        },
        {
            id: 16,
            state: 'jeju',
            lat: 33.49952371466463,
            lng: 126.5336376684491,
            city: ['서귀포시', '제주시', '남제주군', '북제주군']
        },
    ]
    // 지도 select box 에서 어느 시/도 를 선택했는지 관리
    const [target, setTarget] = useState('');

    // API에서 받아온 서비스점 정보
    const [mapData, setMapData] = useState([]);

    const [messages, setMessages] = useState(
        {
            title: '바이크뱅크 본사',
            address: '대구광역시 달서구 성서공단로 11길 62',
            tel: '1522-9008',
            hour: '9:00 ~ 18:00'
        }
    );

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/v1/repair/shop/?product_type=&corp_sido=&corp_gugun`)
            .then(res => setMapData(res.data.result_data));
    }, []);

    // select option에 따른 api 호출 
    const handleAPIcall = (e) => {
        if (e.target.value === 'rent') {
            axios.get(`${process.env.REACT_APP_API}/v1/repair/shop/?product_type=1&corp_sido=&corp_gugun`)
                .then(res => setMapData(res.data.result_data));
        } else if (e.target.value === 'bike') {
            axios.get(`${process.env.REACT_APP_API}/v1/repair/shop/?product_type=3&corp_sido=&corp_gugun`)
                .then(res => setMapData(res.data.result_data));
        }
    }

    // 카카오 맵관련
    useEffect(() => {
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const selected = option.filter(item => item.state === target);
        console.log('select', selected)

        let firstLat = selected.length !== 0 ? 37.566725127769274 : 35.840675;
        let firstLng = selected.length !== 0 ? 126.97884471080586 : 128.489103;

        const options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(firstLat, firstLng), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


        for (let i = 0; i < mapData.length; i++) {
            // 각각 지점의 타입에 따라 마커 색 변경
            let imageSrc;

            if (mapData[i].deal_type_text === '본사') {
                imageSrc = "/images/icon_marker_bikebank.png"
            } else if (mapData[i].deal_type_text === '직영점') {
                imageSrc = "/images/icon_marker_yellow.png"
            } else if (mapData[i].deal_type_text === '대리점') {
                imageSrc = "/images/icon_marker_red.png"
            } else {
                imageSrc = "/images/icon_marker_blue.png"
            }

            // 마커 이미지의 이미지 크기 입니다
            const imageSize = new kakao.maps.Size(24, 35);
            // 마커 이미지를 생성합니다    
            const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
            // 마커의 위도,경도 
            const lat = Number(mapData[i].corp_lat);
            const lng = Number(mapData[i].corp_lon);
            // 마커 위치를 설정합니다
            const positions = new kakao.maps.LatLng(lat, lng);
            const title = mapData[i].bp_full_name;
            const address = mapData[i].corp_address;
            const tel = mapData[i].corp_tel;
            const hour = mapData[i].business_hours;

            // 마커를 생성합니다
            const marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions, // 마커 위치
                image: markerImage, // 마커 이미지 
                title: title,
                ad: address
            });

            // 눌렀을때 나타내기
            kakao.maps.event.addListener(marker, 'click', function (mouseEvent) {
                setMessages({
                    title,
                    address,
                    tel,
                    hour
                })
            });
        }
    }, [mapData]);

    return (
        <Wrap>
            <Form>
                <select name="service" id="service" onChange={(e) => handleAPIcall(e)}>
                    <option defaultValue >서비스 선택</option>
                    <option value="rent">렌트 서비스</option>
                    <option value="bike">오토바이 서비스</option>
                </select>
                <select name="state" id="state" onChange={(e) => setTarget(e.target.value)}>
                    <option defaultValue >시/도 선택</option>
                    <option value="seoul">서울특별시</option>
                    <option value="busan">부산광역시</option>
                    <option value="incheon">인천광역시</option>
                    <option value="daegu">대구광역시</option>
                    <option value="gwangju">광주광역시</option>
                    <option value="deajeon">대전광역시</option>
                    <option value="ulsan">울산광역시</option>
                    <option value="sejong">세종특별자치시</option>
                    <option value="gyeonggi">경기도</option>
                    <option value="gangwon">강원도</option>
                    <option value="chungbuk">충청북도</option>
                    <option value="chungnam">충청남도</option>
                    <option value="gyeongbuk">경상북도</option>
                    <option value="gyeongnam">경상남도</option>
                    <option value="jeonbuk">전라북도</option>
                    <option value="jeonnam">전라남도</option>
                    <option value="jeju">제주특별자치도</option>
                </select>
                <select name='city' id='city'>
                    <option defaultValue >구/군 선택</option>

                    {/* 선택된 시/도 에 따라 보여줄 구/군 나타내기 */}
                    {option.map(item => (
                        item.state === target && item.city.map(state => <option key={state} option={state}>{state}</option>)
                    ))}
                </select>
            </Form>
            <MapWrap>
                <div id='map'></div>
                <Desc>
                    <p>{messages.title}</p>
                    <DescList>
                        <li>
                            <p><span>주소</span>{messages.address}</p>
                        </li>
                        <li>
                            <p><span>연락처</span>{messages.tel}</p>
                        </li>
                        <li>
                            <p><span>운영시간</span>{messages.hour}</p>
                        </li>
                    </DescList>
                </Desc>
            </MapWrap>
        </Wrap>
    );
};

export default Map;

const Wrap = styled.div`
    width: 100%;
    height: 100%;
`

const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: space-between;
    select {
        width: 33%;
        max-width: 380px;
        height: 67px;
        padding: 19px 30px;
        font-size: 20px;
        line-height: 32px;
        letter-spacing: -0.5px;
        color: #5d5d5d;
    }
`

const MapWrap = styled.div`
    border: 1px solid #999; 
    background-color: #fff;
    margin-top: 30px;
    #map {
        height: 461px;
    }
`

const Desc = styled.div`
    padding: 20px 57px 39px 57px;
    display: flex;
    > p {
        font-size: 24px;
        line-height: 36px;
        letter-spacing: -0.6px;
        font-weight: 700;
        width: 50%;
    }
`

const DescList = styled.ul`
    width: 50%;
    li {
        p {
            color: #5d5d5d;
            display: flex;
            gap: 30px;
            span {
                font-size: 18px;
                line-height: 28px;
                letter-spacing: -0.45px;
                color: #272727;
                font-weight: 500;
                width: 65px;
                display: block;
            }
        }
    }
`