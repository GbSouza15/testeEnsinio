import styled, { css } from "styled-components";

const HeroContainer = styled.section`
    width: 100%;
    background: linear-gradient(90deg, #5F41D9 7%, #41B5D9 100%);
    padding: 8rem 2rem 0 2rem;
    position: relative;
    justify-content: center;
    height: auto;

    @media (min-width: 1024px) {
        display: flex;
        align-items: center;
    }

    @media (min-width: 1968px) {
        padding-top: 15rem;
    }
`;

const TextSectionHero = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2.75rem;
    align-items: center;

    @media (min-width: 1024px) {
        align-items: flex-start;
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

const TitleHero = styled.p`
    color: ${({ color }) => color};
    font-size: 1.8rem;
    text-align: center;
    width: 100%;

    @media (min-width: 1024px) {
        width: ${({ width }) => width};
        text-align: ${({ textAlign }) => textAlign};
        font-size: ${({ fontSize }) => fontSize};
    }

    @media (min-width: 1968px) {
        font-size: 3.5rem;
        width: 35rem;
    }
`;

const TitleSecondaryPartHeroH1 = styled.p`
    font-size: 2rem;
    text-align: center;
    width: 100%;
    font-weight: 400;
    color: #130C25;
    line-height: ${({lineHeight}) => lineHeight};

    @media (min-width: 1024px) {
        display: flex;
        align-items: flex-start;
    }

    @media (min-width: 1968px) {
        font-size: 2.5rem;
    }
`;

const Span = styled.span`
    color: ${({ color }) => color};
    line-height: ${({ lineHeight }) => lineHeight};
    width: ${({ width }) => width};
    text-align: ${({ textAlign }) => textAlign};
    text-transform: ${({ textTransform }) => textTransform};
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) => fontWeight};
    letter-spacing: 2.4px;

    @media (min-width: 1968px) {
        font-size: 1rem;
    }
`;

const Paragraph = styled.p`
    color: ${({ color }) => color};
    line-height: ${({ lineHeight }) => lineHeight};
    text-align: ${({ textAlign }) => textAlign};
    width: 100%;

    @media (min-width: 1024px) {
        text-align: start;
        width: ${({ width }) => width};
    }

    @media (min-width: 1968px) {
        font-size: 1.2rem;
        width: 35rem;
    }
`;

const AllInOnePlatformSection = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    text-transform: uppercase;
    color: #fff;
    font-size: .8rem;
    width: 100%;
    text-align: center;

    @media (min-width: 1024px) {
        justify-content: flex-start;
    }
`;

const ButtonAndPlayVideo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const PlayVideo = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;

    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    
    &:hover {
        transform: scale(1.1);
    } 
`;

const Button = styled.button`
    background: ${({ background}) => background};
    border-radius: 5rem;
    border: ${({ border}) => border};
    color: ${({ color }) => color};
    height: ${({ height }) => height};
    width: ${({ width }) => width}; 
    font-size: .8rem;
    font-weight: 600;
    line-height: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
    font-size: 16px;


    &:hover {
        background: linear-gradient(90deg, #41B5D9 22%, #5F41D9 73%, #5F41D9 100%);
        color: #fff;
        transform: scale(1.1);

        border: none;
    }

    @media (min-width: 1968px) {
        font-size: 1rem;
        width: 10rem;
    }
`;

const IconAdjustments = styled.div`
    position: absolute;
    top: ${({ top }) => top};
    bottom: ${({ bottom }) => bottom};
    left: ${({ left }) => left};
    right: ${({ right }) => right}; 
    display: ${({ display }) => display};
    
    @media (min-width: 1024px) {
        top: ${({ topDesktop }) => topDesktop};
        bottom: ${({ bottomDesktop }) => bottomDesktop};
        left: ${({ leftDesktop }) => leftDesktop};
        right: ${({ rightDesktop }) => rightDesktop}; 
        display: ${({ displayDesktop }) => displayDesktop};
    }

    @media (min-width: 1968px) {
        top: ${({ topLarge }) => topLarge};
        bottom: ${({ bottomLarge }) => bottomLarge};
        left: ${({ leftLarge }) => leftLarge};
        right: ${({ rightLarge }) => rightLarge};

        img {
            width: 8rem;
            height: 8rem;
        }
    }
`;

const ImgAdjustments = styled.div`
    
    display: flex;
    margin-top: 4rem;
    justify-content: center;
`;

const DivImgMan = styled.div`

    display: flex;
    margin-top: 4rem;
    justify-content: center;

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

        img {
            width: auto;
            height: 15rem;
            object-fit: cover;

            @media (min-width: 768px) {
                height: 18rem;
            }

            @media (min-width: 1024px) {
                height: 26rem;
                top: ${({ top }) => top};
            }

            @media (min-width: 1300px) {
                height: 30rem;
            }

            @media (min-width: 1440px) {
                height: 30rem;
                top: ${({ topLarge }) => topLarge};
            }

            @media (min-width: 1968px) {
                height: 40rem;
            }
        }
`;

const DividingLine = styled.div`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background-color: ${({ backgroundColor }) => backgroundColor};
    margin: ${({ margin }) => margin};
`;

const SecondaryPartHero = styled.section`
    background-color: #fff;
    

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

const SecondaryPartHeroContainer = styled.div`
    display: flex;
    justify-content: center;

    @media (min-width: 280px) {
        padding: 6.5rem 2rem 0 2rem;
    }
    

    @media (min-width: 1024px) {
        padding: 6.5rem 2rem 0 2rem;
    }

    @media (min-width: 1300px) {
        padding: 6.5rem 5rem 0 5rem;
    }

    @media (min-width: 1440px) {
        padding: 6.5rem 0 0 0;
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

const SecondaryPartHeroTitle = styled.section`

`;

const SmallTitles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 4rem;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`;

const LineAndTitle = styled.div`
    display: flex;
    gap: 1rem;  
    align-items: center;
    flex-direction: column;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`;

const ItensContainerAPI = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 4.5rem;
    gap: 3rem;

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
    }

    @media (min-width: 1968px) {
        gap: 12rem;
        margin-bottom: 2rem;
    }
`;

const ItensAPI = styled.div`
    display: flex;
    flex-direction: column;  
    align-items: center;

    @media (min-width: 1024px) {
        align-items: flex-start;
    }

    @media (min-width: 1968px) {
        img {
            width: 4rem;
            height: 4rem;
        }
    }
`;

const TitleItensAPI = styled.h2`
    color: #130C25;
    margin-top: 1.2rem;
    font-size: 1.25rem;

    @media (min-width: 1440px) {
        font-size: 1.25rem;
    }

    @media (min-width: 1968px) {
        font-size: 1.25rem;
    }
`;

const SubTitleItensAPI = styled.p`
    margin-top: .75rem;
    color: #423D51;
    font-size: .8rem;
    text-align: center;

    @media (min-width: 1024px) {
        text-align: left;
    }

    @media (min-width: 1440px) {
        font-size: 1rem;
        width: 20rem;
    }

    @media (min-width: 1968px) {
        font-size: 1.2rem;
        width: 25rem;
    }
`;

const BaseBoard = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2.5rem 0 4.5rem 0;
    gap: 3rem;

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const BaseBoardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;

    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    
    &:hover {
        transform: scale(1.1);
    }

    @media (min-width: 1024px) {
        flex-direction: row;
        gap: 2rem;
    }

    @media (min-width: 1968px) {
        
        img {
            width: 2.5rem;
            height: 2.5rem;
        }
    }
    
`;

const TextBaseBoard = styled.p`
    color: #000;
    font-size: 1rem;  
    text-align: center;
    color: ${({ color }) => color};
    font-weight: ${({ fontWeight }) => fontWeight};
    line-height: 125%; 

    @media (min-width: 1968px) {
        font-size: 1.2rem;
    }
`;


export { 
    HeroContainer, 
    TextSectionHero, 
    AllInOnePlatformSection, 
    ButtonAndPlayVideo, 
    PlayVideo, 
    TitleHero, 
    Paragraph, 
    Button, 
    Span, 
    IconAdjustments, 
    ImgAdjustments, 
    SecondaryPartHero, 
    DividingLine, 
    SecondaryPartHeroTitle, 
    SmallTitles, 
    LineAndTitle, 
    ItensContainerAPI, 
    ItensAPI, 
    TitleItensAPI, 
    SubTitleItensAPI, 
    BaseBoard, 
    BaseBoardContent, 
    TextBaseBoard,
    DivImgMan,
    SecondaryPartHeroContainer,
    TitleSecondaryPartHeroH1
};
