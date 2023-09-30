import styled, {css} from 'styled-components';

const DivTest = styled.div`
    width: 100%; 
    height: 3rem; 
    display: flex; 
    align-items: center; 
    cursor: pointer; 

    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;

const LanguageContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
`;

const SubMenuLanguageSelector = styled.div`
    flex-direction: column;
    display: none;
    background-color: #fff;
    width: 8rem;
    border-radius: 0.5rem;
    justify-content: center;
    position: absolute;
    top: 4rem;
    box-shadow: 3px 3px 5px 0px #000;
    

    @media (max-width: 1090px) {
        right: 1rem;
    }

    @media (min-width: 1968px) {
        top: 5rem;
    }

    animation: myAnim 500ms ease 0s 1 normal forwards;

    @keyframes myAnim {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    ${({ isOpenSelectorLang }) => isOpenSelectorLang && css`
        display: flex;
    `}

`;

const LanguageOptions = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    a {
        text-decoration: none;
        color: #000;
    }
`;

const ViewSelectLang = styled.div`
    display: flex;
    align-items: center;
`;

const LangAndIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({color}) => color};
    font-weight: 600;
    transition: transform 0.3s ease-in-out;
    
    &:hover {
        transform: scale(1.1);
    } 
`;

const DivIconCheck = styled.div`
    margin-left: 1rem;
`;

export { LanguageContainer, SubMenuLanguageSelector, LanguageOptions, ViewSelectLang, LangAndIcon, DivTest, DivIconCheck };