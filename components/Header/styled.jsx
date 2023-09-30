import styled from 'styled-components';

const ContainerHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    height: 5.5rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    backdrop-filter: blur(10px);

    @media (min-width: 1968px) {
        .logo-name {
            width: 10rem;
            height: 8rem;
        }

        .logo-symbol {
            width: 4rem;
            height: 4rem;
        }
    }

    @media (min-width: 1024px) {
        justify-content: center;
    }

    @media (min-width: 1968px) {
        height: 7rem;
    }

    svg {
        color: #fff;

        @media (min-width: 1024px) {
            display: none;
        }
    }
`;

const NavHeader = styled.nav`
    display: none;
    

    @media (min-width: 1024px) {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 8rem;
        gap: 2rem;
    }
    
    @media (min-width: 1968px) {
        font-size: 1.5rem;
        padding-left: 19rem;
    }   

    @media (min-width: 1024px) {
        animation: myAnim .5s ease 0s 1 normal forwards;

        @keyframes myAnim {
            0% {
                transform: scale(0.5);
            }

            100% {
                transform: scale(1);
            }
        }
    }
`;

const NavLinks = styled.a`
    color: #fff;
    text-decoration: none;
    display: ${({ display }) => display};
    align-items: ${({ alignItems }) => alignItems};
    gap: .5rem;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    
    &:hover {
        transform: scale(1.1);
    } 

    @media (min-width: 1968px) {
        img {
            width: 1rem;
            height: 1rem;
        }
    }
`;

const NavHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    
    @media (min-width: 1024px) {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    @media (min-width: 1300px) {
        gap: 2rem;
    }  
`;

const LoginUserAndButton = styled.div`
    display: flex;
    align-items: center;  

    @media (min-width: 1024px) {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    @media (min-width: 1300px) {
       gap: 2rem; 
    }  
`;

const LogoAndSymbol = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (min-width: 1024px) {
        animation: myAnim .5s ease 0s 1 normal forwards;

        @keyframes myAnim {
            0% {
                transform: scale(0.5);
            }

            100% {
                transform: scale(1);
            }
        }
    }
`;

export { ContainerHeader, NavHeader, NavLinks, NavHeaderContainer, LoginUserAndButton, LogoAndSymbol };