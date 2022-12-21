import React, { useContext } from 'react';
import SubTitleSection from '../../../components/common/SubTitleSection';
import * as homestyle from '../../home/styles';
import * as style from './styles'
import RentInsuList from '../../../components/rent/RentInsuList';
import { rentInsuList } from '../../../utils/rent/rentlist'
import { useNavigate } from 'react-router-dom';
import { mobileContext } from '../../../utils/mobileContext';

const RentRSC = () => {
    // url 이동을 위한 변수
    const navigate = useNavigate();
    const { isMobile } = useContext(mobileContext)
    return (
        <>
            {/* 공통 헤더 부분 */}
            <SubTitleSection title='보장 상세내용 확인' background='#d6d6d6' color='#000' desc='대인, 대물 및 상해보험' />

            {/* RSC 확대지원 */}
            <homestyle.Section padding={isMobile ? '63px 0 111px 0' : '188px 0 100px 0'} background={isMobile && '#f1f1f1'}>
                <homestyle.PageWidth>
                    <style.Title><span>책임보험 초과비용에 대하여<br />RCS 확대지원</span>*공소권 有</style.Title>
                    {isMobile ? (
                        <style.MobileImgWrap>
                            <img src="/images/mobile_rent_insu_01.png" alt="인수이미지" />
                            <img src="/images/mobile_rent_insu_02.png" alt="인수이미지" />
                        </style.MobileImgWrap>
                    ) : (
                        <img src="/images/rent_insu_01.png" alt="인수이미지1" style={{ marginTop: '58px', width: '100%' }} />
                    )}
                </homestyle.PageWidth>
            </homestyle.Section>
            <homestyle.Section padding={isMobile ? '90px 0 95px 0' : '150px 0 156px 0'} background={isMobile ? '#fff' : '#f8f8f8'}>
                <homestyle.PageWidth>

                    {/* 상해보험 보장내용 토글 */}
                    <style.Title><span>상해보험 보장 내용</span></style.Title>
                    <style.InsuList>
                        {rentInsuList.map(item => <RentInsuList item={item} key={item.id} />)}
                    </style.InsuList>
                </homestyle.PageWidth>
            </homestyle.Section>

            {/* 푸터부분 */}
            <style.Footer background='#666' padding='90px 0'>
                <style.Button onClick={() => navigate(-1)}>돌아가기</style.Button>
            </style.Footer>
        </>
    );
};

export default RentRSC;