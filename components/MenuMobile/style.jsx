import styled, {css} from 'styled-components';

const CenterContainer = styled.div`
margin: 7rem 0;
`;

const Container = styled.section`    
    pointer-events: none;
    display: none;

    svg {
        color: #fff;
    }

    ${({ isOpen }) => isOpen && css`
        position: fixed;
        overflow-y: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, #5F41D9 7%, #41B5D9 100%);
        pointer-events: auto;
        display: block;
        z-index: 10;
        animation: myAnim 400ms ease 0s 1 normal forwards;

        @keyframes myAnim {
            0% {
                opacity: 0;
                transform: translateX(250px);
            }

            100% {
                opacity: 1;
                transform: translateX(0);
            }
        }

    `}

`;

const NavOptions = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;

const Links = styled.a`
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    gap: .5rem;
`;

const HeaderMenuMobile = styled.header`
    position: absolute;
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    width: 100%;
    justify-content: space-between;
`;

const CloseAndSelectLang = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const LoginUser = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    cursor: pointer;
    color: #fff;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }

    @media (min-width: 1968px) {
        p {
            font-size: 1.5rem;
        }

        img {
            width: 2rem;
            height: 2rem;
        }
    }
`;

export { CenterContainer, Container, NavOptions, Links, HeaderMenuMobile, CloseAndSelectLang, LoginUser };