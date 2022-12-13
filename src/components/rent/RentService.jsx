import React from 'react';
import styled from 'styled-components';

const RentService = () => {
    return (
        <Wrap>
            <>
                <p>차량별 소모품 무상교체</p>
                <div>
                    <ServiceList>
                        <li>
                            <img src="/images/circle_01.png" alt="숫자1" />
                            <p>오일 52회</p>
                        </li>
                        <li>
                            <img src="/images/circle_02.png" alt="숫자2" />
                            <p>벨트 2회</p>
                        </li>
                        <li>
                            <img src="/images/circle_03.png" alt="숫자3" />
                            <p>FR패드 6회</p>
                        </li>
                        <li>
                            <img src="/images/circle_04.png" alt="숫자4" />
                            <p>RR라이닝 or RR패드 4회</p>
                        </li>
                    </ServiceList>
                    <ServiceList>
                        <li>
                            <img src="/images/circle_05.png" alt="숫자5" />
                            <p>에어클리너 6회</p>
                        </li>
                        <li>
                            <img src="/images/circle_06.png" alt="숫자6" />
                            <p>플러그 2회</p>
                        </li>
                        <li>
                            <img src="/images/circle_07.png" alt="숫자7" />
                            <p>FR타이어 2회</p>
                        </li>
                        <li>
                            <img src="/images/circle_08.png" alt="숫자8" />
                            <p>RR타이어 4회</p>
                        </li>
                    </ServiceList>
                </div>
                <p className='desc'>*1년 기준 / 약 112만원 소모품 교환비용 절감<br />
                    *차량별 교체 내용이 다를 수 있습니다</p>
            </>
            <>
                <p className='title'>사고 발생 시 서비스 지원</p>
                <AccidentServiceList>
                    <li>
                        <img src="/images/mobile_rent_service_01.png" alt="긴급 출동 서비스" />
                        <p>긴급 출동 서비스</p>
                    </li>
                    <li>
                        <img src="/images/mobile_rent_service_02.png" alt="대체차량 지원 서비스" />
                        <p>대체차량 지원 서비스</p>
                    </li>
                    <li>
                        <img src="/images/mobile_rent_service_03.png" alt="합리적 수리 비용" />
                        <p>합리적 수리 비용</p>
                    </li>
                    <li>
                        <img src="/images/mobile_rent_service_04.png" alt="사고 시 상담 서비스" />
                        <p>사고 시 상담 서비스</p>
                    </li>
                </AccidentServiceList>
                <p className='desc'>*잔여 대차 상황에 따라 대차 사용이 제한될 수 있습니다.<br />
                    *사고 수리 및 차량정비 시 지정 관리점을 이용해야 합니다.</p>
            </>
        </Wrap>
    );
};

export default RentService;

const Wrap = styled.div`
    p{
        font-size: 18px;
        line-height: 26px;
        letter-spacing: -0.45px;
    }
    div {
        flex-wrap: nowrap;
        overflow: scroll;
        display: flex;
        gap: 10px;
        padding-right: 30px;
        ::-webkit-scrollbar {
        display: none;
      }
    }
    .title {
        font-size: 22px;
        line-height: 30px;
        letter-spacing: -1.1px;
        font-weight: 700;
        margin-top: 100px;
    }
    .desc{
        font-size: 12px;
        line-height: 18px;
        letter-spacing: -0.3px;
        color: ${props => props.theme.gray02};
    }
`
const ServiceList = styled.ul`
    box-shadow: 5px 0 30px 0 rgba(149, 149, 149, 0.16);
    background-color: #fff;
    border-radius: 15px;
    padding: 15px 20px 15px 20.5px;
    display: flex;
    min-width: 305px;
    flex-direction:column;
    margin: 10px 0;
    li {
        display: flex;
        gap: 34.5px;
        border-bottom: 1px solid #000;
        padding: 15px 0;
        &:last-child {
            border: none;
        }
        img {
            width: 28px;
            height: 28px;
        }
        p{
            font-size: 16px;
            line-height: 26px;
            letter-spacing: -0.64px;
            color: ${props => props.theme.gray02};
        }
    }
`
const AccidentServiceList = styled.ul`
    display: flex;
    gap: 10px;
    flex-wrap: nowrap;
    overflow: scroll;
    padding-right: 30px;
    ::-webkit-scrollbar {
        display: none;
      }
    li{
        min-width: 305px;
        background-color: #fff;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        box-shadow: 5px 0 30px 0 rgba(149, 149, 149, 0.16);
        margin: 30px 0 10px 0;
        img {
            width: 100%;
        }
        p {
            padding: 12px 0 20px 20px;
            font-weight: 700;
            font-size: 15px;
        }
    }
`