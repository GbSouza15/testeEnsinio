import styled, {css} from 'styled-components';

const SubMenuDesktopStyle = styled.div`

    background: #FFF;
    border-radius: 0.5rem;
    font-size: .8rem;
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    position: absolute;
    top: 5rem;
    padding: 2rem;
    animation: myAnim 500ms ease 0s 1 normal forwards;
    box-shadow: 3px 3px 5px 0px #000;

    @keyframes myAnim {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
`;

const TitleItensSubMenuDesktop = styled.p`
    margin: 0;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: 0.075px;
    font-size: .8rem;
`;

const SpanSubTitleDesktop = styled.span`
    font-size: .6rem;
`;

const ListItensSubMenuDesktop = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style: none;
    gap: 1rem 4rem;
`;

const ItensSubMenuDesktop = styled.li`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    @media (max-width: 360px) {
        gap: .5rem;
    }

    &:hover {
        transform: scale(1.1);
    }
`;

const TitleSoluctionDesktop = styled.p`
    color: #5F41D9;  
    font-weight: 600;
    line-height: 125%;
    letter-spacing: 2px;
    font-size: .8rem;
    text-transform: uppercase;
`;

export { SubMenuDesktopStyle, TitleItensSubMenuDesktop, SpanSubTitleDesktop, ListItensSubMenuDesktop, ItensSubMenuDesktop, TitleSoluctionDesktop };
