import React, { useEffect } from 'react';
import SubTitleSection from '../../components/common/SubTitleSection';
import * as homestyle from '../home/styles';
import * as style from './styles'
import { useParams, useNavigate } from 'react-router-dom';

const Notice = () => {
    // url의 id값을 가져온다.
    const { id } = useParams();
    // 눌렀을때 이동을 위한 변수지정
    const navigate = useNavigate();

    const NoticeList = ([
        {
            id: 0,
            title: '바이크뱅크 개인위치정보 이전 안내',
            date: '2022.09.26',
            desc: '안녕하세요. 바이크뱅크㈜입니다. 바이크뱅크의 서비스를 이용해 주시는 고객님께 깊은 감사의 말씀을 드립니다.\n아래 개인정보 이전과 관련하여 안내말씀을 드립니다.\n\n당사는 2022년 10월 31일자로 인성데이타서비스㈜를 흡수합병하여 "바이크뱅크㈜"로 새롭게 출발합니다.이에 따라, 바이크뱅크 서비스를 이용 중이신 고객님께서, 기존과 동일한 서비스를 제공받으실 수 있도록, 서비스와 관련한 모든 개인정보가 "바이크뱅크㈜"로 이전될 예정입니다.\n\n합병 후에도, 바이크뱅크㈜는 개인정보보호법 등 관계법령을 준수하여, 기존과 동일하게 고객님의 개인정보를 이용할 예정입니다.또한 고객님의 개인정보를 안전하게 보호할 수 있도록, 최선을 다하겠습니다.개인정보 이전과 관련하여 문의사항이 있으시면 아래 전화번호 연락주시기 바랍니다.\n\n항상 고객의 입장에서 최선의 서비스를 제공하는 "바이크뱅크㈜"가 되도록 노력하겠습니다.\n감사합니다.\n\n고객센터 : 1522-9008\n\n2022년 9월 26일\n\n대구광역시 달서구 성서공단로 11길 62, 5층(호산동, 대구융합알앤디센터)\n\n바이크뱅크 주식회사'
        },
        {
            id: 1,
            title: '바이크뱅크 서류 양식 자료',
            date: '2022.11.24',
            desc: ''
        },
    ])

    useEffect(() => {
        // 이동했을때 스크롤 top
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            {/* 공통 헤더부분 */}
            <SubTitleSection title="공지사항" background='#d6d6d6' />

            {/* 내용 */}
            <homestyle.Section padding='153px 0'>
                <homestyle.PageWidth gap='0'>
                    <style.Title>{NoticeList[id]?.title}</style.Title>
                    <style.Date>{NoticeList[id]?.date}</style.Date>
                    <style.Desc>
                        {id == 0 ? (
                            <p>{NoticeList[0].desc}</p>
                        ) : (
                            <p>
                                안녕하세요. 바이크뱅크㈜입니다.<br />
                                <br />
                                바이크뱅크의 서비스를 이용해 주시는 고객님께 깊은 감사의 말씀을 드립니다.<br />
                                더 편리한 서비스를 위해 상품 이용에 필요한 서류 양식을 안내드립니다.<br />
                                <br />
                                <a href="/download/insurance_age_change_request.hwp">[다운로드]</a> 1. 보험연령 변경 요청서 : 렌트상품 보험 연령을 변경할 때 작성하여 접수하는 양식<br />
                                <br />
                                <a href="/download/vehicle_transfer_request.hwp">[다운로드]</a> 2. 차량이관 요청서 : 렌트상품 이관 요청 시 작성하여 접수하는 양식<br />
                                <br />
                                <a href="/download/lost_documents.hwp">[다운로드]</a> 3. 구비서류분실사유서 : 명의이전서류 등 분실시 계약자의 동의가 불가할 경우, 재발급을 위해 제출하는 양식<br />
                                <br />
                                <a href="/download/business_change_agreement.hwp">[다운로드]</a> 4. 사업자 변경동의서 : 계약점의 사업자변경시 변경된 사업자로 세금계산서 발행을 위해 제출하는 양식<br />
                                <br />
                                고객님들의 업무에 참고 부탁드립니다.<br />
                                <br />
                                감사합니다.
                            </p>
                        )}
                    </style.Desc>
                    <style.Button onClick={() => navigate(-1)}>돌아가기</style.Button>
                </homestyle.PageWidth>
            </homestyle.Section>
        </>
    );
};

export default Notice;