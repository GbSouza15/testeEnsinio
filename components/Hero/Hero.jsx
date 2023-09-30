import Image from "next/image";
import { useState, useEffect } from 'react';

import { 
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
 } from "./style";

import iconDevices from "../../public/devices.svg"; 
import iconPlaylists from "../../public/icon-playlists.svg"; 
import iconCertified from "../../public/icon-certified.svg"; 
import iconPlay from "../../public/icon-play.svg"; 
import iconIlustrator from "../../public/ilustrator.png"; 
import iconTrilhas from "../../public/icon-trilhas.svg"; 
import iconPlaylistMoreResourses from "../../public/icon-playlists-more-resources.svg"; 
import iconFolder from "../../public/icon-folder.svg"; 
import iconRocket from "../../public/rocket.svg"; 
import iconArrow from "../../public/arrow.svg"; 
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";


function Hero() {
    const {locale} = useRouter();
    const t = useTranslations('Hero')
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://json-server-phi-two.vercel.app/items')
            const items = await response.json()
            setItems(items)
        }

        fetchData()
    }, [])

    function detectIconForId(id) {
        switch (id) {
            case 1:
                return iconTrilhas
            case 2:
                return iconPlaylistMoreResourses
            case 3:
                return iconFolder
        }
    }


    return (
        <>
            <HeroContainer>
                <TextSectionHero>
                    <AllInOnePlatformSection>
                        <Image src={iconDevices} alt="Devices" />
                        <Span fontSize="16px" lineHeight="16.8px" color="#fff">{t('plataformaAllInOne')}</Span>
                    </AllInOnePlatformSection>

                    <TitleHero color="#fff" width="30rem"
                    textAlign="start" fontSize="2.75rem">{t('suaEscolaOnlinePoderosaELucrativa')}</TitleHero>

                    <Paragraph color="#fff" lineHeight="150%" textAlign="center" width="25rem">{t('tenhaSuaPrópriaEscola')}.</Paragraph>

                    <ButtonAndPlayVideo>
                        <Button background="#00E1E7" border="none" color="#130C25" height="3rem" width="10rem">{t('comecarAgora')}</Button>
                        <PlayVideo>
                            <Image src={iconPlay} alt="Play" />
                            <Paragraph color="#fff">{t('verVideo')}</Paragraph>
                        </PlayVideo>
                    </ButtonAndPlayVideo>
                </TextSectionHero>

                <DivImgMan>
                    <Image src={iconIlustrator} alt="Ilustrator" />
                </DivImgMan>

            </HeroContainer>

            <IconAdjustments top="1.6rem" topLarge="3rem" leftLarge="15rem" leftDesktop="5rem" left="4rem">
                <Image src={iconPlaylists} alt="Playlists" />
            </IconAdjustments>

            <IconAdjustments top="3.8rem" right="3rem" leftDesktop="45%">
                <Image src={iconCertified} alt="Playlists" />
            </IconAdjustments>

            <IconAdjustments top="-1rem" right="30%">
                <Image src={iconPlaylists} alt="Playlists" />
            </IconAdjustments>

            <IconAdjustments topDesktop="1.5rem" rightLarge="10rem" topLarge="2.2rem" rightDesktop=".8rem" display="none" displayDesktop="block">
                <Image src={iconPlaylists} alt="Playlists" />
            </IconAdjustments>
            
            <SecondaryPartHeroContainer>
                <SecondaryPartHero>
                    <SecondaryPartHeroTitle>
                        <SmallTitles>
                            <LineAndTitle>
                                <DividingLine width="3.5rem" height="1px" backgroundColor="#5F41D9"/>
                                <Span color="#5F41D9" textTransform="uppercase" lineHeight="16.8px" fontWeight="600">{t('pensamosEmCadaDetalhe')}</Span>
                            </LineAndTitle>
                                <Span fontSize="1rem">{t('conhecaAlgunsDosNossosRecursos')}</Span>
                        </SmallTitles>

                        <TitleSecondaryPartHeroH1 lineHeight="40px">
                        {t('queremosQueOAlunoSeSintaConfortavelEnquantoAprende')}
                        </TitleSecondaryPartHeroH1>
                    </SecondaryPartHeroTitle>

                    <ItensContainerAPI>
                        {items.map(item => (
                            <ItensAPI key={item.id}>
                                <Image src={detectIconForId(item.id)} alt="Ícone de etapas" />
                                <TitleItensAPI>{item.title[locale]}</TitleItensAPI>
                                <SubTitleItensAPI>{item.description[locale]}</SubTitleItensAPI>
                            </ItensAPI>
                        ))}
                    </ItensContainerAPI>

                    <DividingLine width="100%" height="1px" backgroundColor="#E7E7E9" margin="2rem 0 0 0"/>

                    <BaseBoard>
                        <BaseBoardContent>
                            <Image src={iconRocket} alt="Rocket" />
                            <TextBaseBoard color="#423D51" fontWeight="500">
                            {t('vejaTodosOsOutrosRecursos')} 
                            </TextBaseBoard>
                        </BaseBoardContent>

                        <BaseBoardContent>
                            <TextBaseBoard color="#5F41D9" fontWeight="600">
                            {t('verMais')}
                            </TextBaseBoard>
                            <Image src={iconArrow} alt="Arrow" />
                        </BaseBoardContent>
                    </BaseBoard>
                </SecondaryPartHero>
            </SecondaryPartHeroContainer>
        </>
    );
}

export default Hero;
