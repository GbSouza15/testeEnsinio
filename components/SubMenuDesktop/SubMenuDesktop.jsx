import { SubMenuDesktopStyle, ItensSubMenuDesktop, ListItensSubMenuDesktop, SpanSubTitleDesktop, TitleItensSubMenuDesktop, TitleSoluctionDesktop } from "./style";
import { useState } from "react";
import Image from "next/image";
import iconEad from "../../public/ead.svg";
import iconSocial from "../../public/icon-social.svg";
import iconGamification from "../../public/icon-gamification.svg";
import iconApp from "../../public/icon-app.svg";
import { useTranslations } from "next-intl";

function SubMenuDesktop({ isOpenSubMenuDesktop }) {

    const t = useTranslations("SubMenu");
    
    const [subMenuIsOpen, setSubMenuIsOpen] = useState(false);

    const handleSubMenu = () => {
        setSubMenuIsOpen(!subMenuIsOpen);
    }
    
    return (
        <SubMenuDesktopStyle>
            <TitleSoluctionDesktop>{t('solucoesPrincipais')}</TitleSoluctionDesktop>
            <ListItensSubMenuDesktop>
                <ItensSubMenuDesktop>
                    <div>
                        <Image src={iconEad} alt="icone escola online" />
                    </div>
                    <div>
                        <TitleItensSubMenuDesktop>{t('crieUmaEscolaOnline')}</TitleItensSubMenuDesktop>
                        <SpanSubTitleDesktop>Lorem ipsum dolor sit amet</SpanSubTitleDesktop>
                    </div>
                </ItensSubMenuDesktop>

                <ItensSubMenuDesktop>
                    <div>
                        <Image src={iconSocial} alt="icone comunidade social" />
                    </div>
                    <div>
                        <TitleItensSubMenuDesktop>{t('comunidadeERedeSocial')}</TitleItensSubMenuDesktop>
                        <SpanSubTitleDesktop>Lorem ipsum dolor sit amet</SpanSubTitleDesktop>
                    </div>
                </ItensSubMenuDesktop>

                <ItensSubMenuDesktop>
                    <div>
                        <Image src={iconGamification} alt="icone gamificação" />
                    </div>
                    <div>
                        <TitleItensSubMenuDesktop>{t('gameficacao')}</TitleItensSubMenuDesktop>
                        <SpanSubTitleDesktop>Lorem ipsum dolor sit amet</SpanSubTitleDesktop>
                    </div>
                </ItensSubMenuDesktop>

                <ItensSubMenuDesktop>
                    <div>
                        <Image src={iconApp} alt="icone aplicativo mobile" />
                    </div>
                    <div>
                        <TitleItensSubMenuDesktop>{t('aplicativoMobile')}</TitleItensSubMenuDesktop>
                        <SpanSubTitleDesktop>Lorem ipsum dolor sit amet</SpanSubTitleDesktop>
                    </div>
                </ItensSubMenuDesktop>
            </ListItensSubMenuDesktop>
        </SubMenuDesktopStyle>
        )
    }

export default SubMenuDesktop;