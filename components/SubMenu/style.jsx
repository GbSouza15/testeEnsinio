import styled, {css} from 'styled-components';

const SubMenuStyle = styled.section`

    background: #FFF;
    border-radius: 0.5rem;
    font-size: .8rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    justify-content: center;
    gap: 2rem;

    ${({ isOpenSubMenu }) => isOpenSubMenu && css`
        animation: animSubMenu 300ms linear 0s 1 normal forwards;

        @keyframes animSubMenu {
            0% {
                opacity: 0;
                transform: translateY(-50px);
            }

            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `}

    @media (max-width: 360px) {
        padding: .5rem;
    }

`;

const TitleItensSubMenu = styled.p`
    margin: 0;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: 0.075px;
    font-size: .8rem;

    @media (max-width: 360px) {
        font-size: .65rem;
    }
`;

const SpanSubTitle = styled.span`
    font-size: .6rem;

    @media (max-width: 360px) {
        font-size: .45rem;
    }
`;

const ListItensSubMenu = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 1rem;

    @media (max-width: 360px) {
        gap: .5rem;
    }
`;

const ItensSubMenu = styled.li`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 360px) {
        gap: .5rem;
    }
`;

const TitleSoluction = styled.p`
    color: #5F41D9;  
    font-weight: 600;
    line-height: 125%;
    letter-spacing: 2px;
    font-size: .8rem;
    text-transform: uppercase;
`;

export { SubMenuStyle, TitleSoluction,TitleItensSubMenu, SpanSubTitle, ListItensSubMenu, ItensSubMenu };