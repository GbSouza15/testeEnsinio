import { SubMenuStyle, ItensSubMenu, ListItensSubMenu, SpanSubTitle, TitleItensSubMenu, TitleSoluction } from "./style";
import Image from "next/image";
import iconEad from "../../public/ead.svg";
import iconSocial from "../../public/icon-social.svg";
import iconGamification from "../../public/icon-gamification.svg";
import iconApp from "../../public/icon-app.svg";
import { useTranslations } from "next-intl";

function SubMenu({ subMenuIsOpen }) {
    const t = useTranslations("SubMenu");

    return (
        <SubMenuStyle isOpenSubMenu={subMenuIsOpen}>
            <TitleSoluction>{t('solucoesPrincipais')}</TitleSoluction>
            <ListItensSubMenu>
                <ItensSubMenu>
                    <div>
                        <Image src={iconEad} alt="icone escola online" />
                    </div>
                    <div>
                        <TitleItensSubMenu>{t('crieUmaEscolaOnline')}</TitleItensSubMenu>
                        <SpanSubTitle>Lorem ipsum dolor sit amet</SpanSubTitle>
                    </div>
                </ItensSubMenu>

                <ItensSubMenu>
                    <div>
                        <Image src={iconSocial} alt="icone comunidade social" />
                    </div>
                    <div>
                        <TitleItensSubMenu>{t('comunidadeERedeSocial')}</TitleItensSubMenu>
                        <SpanSubTitle>Lorem ipsum dolor sit amet</SpanSubTitle>
                    </div>
                </ItensSubMenu>

                <ItensSubMenu>
                    <div>
                        <Image src={iconGamification} alt="icone gamificação" />
                    </div>
                    <div>
                        <TitleItensSubMenu>{t('gameficacao')}</TitleItensSubMenu>
                        <SpanSubTitle>Lorem ipsum dolor sit amet</SpanSubTitle>
                    </div>
                </ItensSubMenu>

                <ItensSubMenu>
                    <div>
                        <Image src={iconApp} alt="icone aplicativo mobile" />
                    </div>
                    <div>
                        <TitleItensSubMenu>{t('aplicativoMobile')}</TitleItensSubMenu>
                        <SpanSubTitle>Lorem ipsum dolor sit amet</SpanSubTitle>
                    </div>
                </ItensSubMenu>
            </ListItensSubMenu>
        </SubMenuStyle>
    )
}

export default SubMenu;