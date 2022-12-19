import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import styled from 'styled-components';
import { option } from '../../utils/customer/map'
import { mobileContext } from '../../utils/mobileContext';

const Map = () => {
    const { isMobile } = useContext(mobileContext);
    const { kakao } = window;
    // 서비스 select box 에서 어떤 서비스를 선택했는지 관리
    const [serviceTarget, setServiceTarget] = useState();
    // 지도 select box 에서 어느 시/도 를 선택했는지 관리
    const [stateTarget, setStateTarget] = useState();
    // API에서 받아온 서비스점 정보
    const [messages, setMessages] = useState(
        {
            title: '바이크뱅크 본사',
            address: '대구광역시 달서구 성서공단로 11길 62',
            tel: '1522-9008',
            hour: '9:00 ~ 18:00'
        }
    );

    // 지점 API호출
    const { data } = useQuery(['maps', serviceTarget], async () => (
        await axios.get(`${process.env.REACT_APP_API}/v1/repair/shop/?product_type=${serviceTarget === 'bike' ? '3' : '1'}&corp_sido=&corp_gugun`)
            .then(res => res.data.result_data)
    ));

    const [center, setCenter] = useState({ La: 128.489103, Ma: 35.840675 })
    const [level, setLevel] = useState(3);

    // 카카오 맵관련
    useEffect(() => {
        // 지도 만들기
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(center?.Ma, center?.La), //지도의 중심좌표.
            level: level //지도의 레벨(확대, 축소 정도)
        };
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        const zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
        kakao.maps.event.addListener(map, 'zoom_changed', function () {

            // 지도의 현재 레벨을 얻어옵니다
            setLevel(map.getLevel())
        });

        // 지도에 마커 생성
        for (let i = 0; i < data?.length; i++) {
            // 각각 지점의 타입에 따라 마커 색 변경
            let imageSrc;

            if (data[i]?.deal_type_text === '본사') {
                imageSrc = "/images/icon_marker_bikebank.png"
            } else if (data[i]?.deal_type_text === '직영점') {
                imageSrc = "/images/icon_marker_yellow.png"
            } else if (data[i]?.deal_type_text === '대리점') {
                imageSrc = "/images/icon_marker_red.png"
            } else {
                imageSrc = "/images/icon_marker_blue.png"
            }

            const imageSize = new kakao.maps.Size(24, 35);// 마커 이미지의 이미지 크기
            const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);// 마커 이미지를 생성
            const lat = Number(data[i]?.corp_lat);// 마커의 위도
            const lng = Number(data[i]?.corp_lon);// 마커의 경도
            const positions = new kakao.maps.LatLng(lat, lng);// 마커의 위치 설정
            // 누른 지점정보
            const title = data[i]?.bp_full_name; // 지점명
            const address = data[i]?.corp_address; // 주소
            const tel = data[i]?.corp_tel; // 전화번호
            const hour = data[i]?.business_hours; // 영업시간

            // 마커를 생성합니다
            const marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions, // 마커 위치
                image: markerImage, // 마커 이미지 
                title: title, // 지점명
                ad: address // 주소
            });

            // 눌렀을때 정보 나타내기
            kakao.maps.event.addListener(marker, 'click', function (mouseEvent) {
                setMessages({
                    title,
                    address,
                    tel,
                    hour
                })
            });
        }

        // select 했을때 부드럽게 이동시키기
        // selected된 시/도를 찾아낸다.
        let value;
        const selectedState = document.querySelector('#state');
        // 시/도 select box의 값이 바뀌면 이동한다.
        selectedState.addEventListener('change', (e) => {
            // select한 값
            setStateTarget(e.target.value);
            value = e.target.value;
            // select한 값을 option 에서 찾아냄
            const selected = option.filter(item => !e.target.value ? item.state === stateTarget : item.state === e.target.value);
            // 이동할 위도 경도 위치 생성
            const moveLatLon = new kakao.maps.LatLng(selected[0]?.lat, selected[0]?.lng);

            // 지도 중심을 부드럽게 이동시킵니다
            // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
            map.setLevel(8);
            map.panTo(moveLatLon);
            let latlng = map.getCenter();
            setCenter({ Ma: latlng.getLat(), La: latlng.getLng() })
        });

        // selected된 시/도를 찾아낸다.
        const selectedCity = document.querySelector('#city');

        // 구/군 select box의 값이 바뀌면 이동한다.
        selectedCity.addEventListener('change', (e) => {
            // select한 값
            const selected = option.filter(item => !value ? item.state === stateTarget : item.state === value);
            const selectedCity = selected[0]?.city?.filter(city => city.name === e.target.value);
            // 이동할 중심좌표
            const moveLatLon = new kakao.maps.LatLng(selectedCity[0]?.lat, selectedCity[0]?.lng);
            // 지도를 부드럽게 이동시킨다.
            map.setLevel(8);
            map.panTo(moveLatLon);
            let latlng = map.getCenter();
            setCenter({ Ma: latlng.getLat(), La: latlng.getLng() })
        });

        kakao.maps.event.addListener(map, 'dragend', function () {
            // 지도 중심좌표를 얻어옵니다 
            let latlng = map.getCenter();
            setCenter({ Ma: latlng.getLat(), La: latlng.getLng() })
        });
    }, [data]);

    console.log(stateTarget)
    return (
        <Wrap>
            <Form>
                <select name="service" id="service" onChange={(e) => {
                    setServiceTarget(e.target.value)
                }}>
                    {/* <select name="service" id="service"> */}
                    <option defaultValue >서비스 선택</option>
                    <option value="rent">렌트 서비스</option>
                    <option value="bike">오토바이 서비스</option>
                </select>
                <select name="state" id="state">
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
                        item.state === stateTarget && item.city.map(state => <option key={state.name} option={state}>{state.name}</option>)
                    ))}
                </select>
            </Form>
            <MapWrap>
                <div id='map'></div>
                <Desc>
                    <p>{messages.title}</p>
                    <DescList>
                        <li>
                            <p><span>{!isMobile && '주소'}</span>{messages.address}</p>
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
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        padding-right: 30px;
    }
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
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        display: flex;
        flex-wrap: wrap;
        select {
            width: 48%;
            max-width: 50%;
            padding: 12px 19.8px 12px 20px;
            border-radius: 10px;
            font-size: 14px;
            line-height: 22px;
            letter-spacing: -0.56px;
            height: 44px;
            &:first-child {
                width: 100%;
                max-width: 100%;
                margin-bottom: 10px;
            }
        }
    }
`

const MapWrap = styled.div`
    border: 1px solid #999; 
    background-color: #fff;
    margin-top: 30px;
    #map {
        height: 461px;
    }
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        #map {
            height: 357px;
        }
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
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        padding: 15px;
        flex-direction: column;
        > p {
            font-size: 16px;
            line-height: 26px;
            letter-spacing: -0.6px;
        }   
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
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        width: 100%;
        li {
            p {
                font-size: 14px;
                gap: 0;
                letter-spacing: -0.6px;
                line-height: 24px;
                span {
                    font-size: 14px;
                    font-weight: 700;
                    width: 80px;
                    letter-spacing: -0.6px;
                    line-height: 24px;
                }
            }
            &:first-child {
                p {
                    span {
                        display: none;
                    }
                    margin-bottom: 20px;
                }
            }
        }   
    }
`