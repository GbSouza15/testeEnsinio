import { ContainerHeader, NavHeader, NavLinks, NavHeaderContainer, LoginUserAndButton, LogoAndSymbol } from "./styled";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import { DividingLine } from "../Hero/style";
import { LoginUser } from "../MenuMobile/style";
import iconProflie from "../../public/user-profile.svg";
import { Button } from "../Hero/style";
import SelectLang from "../SelectLang/SelectLang";
import iconOpenSubMenu from "../../public/poligon.svg";
import { useState, useRef, useEffect } from "react";
import SubMenuDesktop from "../SubMenuDesktop/SubMenuDesktop";
import logoSimbol from "../../public/Vector.svg";
import logoName from "../../public/Ensinio.svg";
import { useTranslations } from "next-intl";

function Header({ setMenuMobileIsOpen }) {
    const t = useTranslations('MenuNav')

    const [subMenuDesktopIsOpen, setSubMenuDesktopIsOpen] = useState(false);
    const containerRef = useRef(null);

    const handleSubMenu = () => {
        setSubMenuDesktopIsOpen(!subMenuDesktopIsOpen);
    }

    const handleOutsideClick = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setSubMenuDesktopIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <ContainerHeader>
            <LogoAndSymbol>
                <Image className="logo-symbol" src={logoName} alt="Logo Name" />
                <Image className="logo-name" src={logoSimbol} alt="Logo Simbol" />
            </LogoAndSymbol>
            <AiOutlineMenu size="2.5rem" onClick={() => setMenuMobileIsOpen(true)}/>
            <NavHeader>
                <NavHeaderContainer ref={containerRef}>
                    <NavLinks href="#" display="flex" alignItems="center" onClick={handleSubMenu}>
                        {t('solucoes')}
                        <Image src={iconOpenSubMenu} alt="Icon Open SubMenu" />
                    </NavLinks>
                    {subMenuDesktopIsOpen && (
                            <SubMenuDesktop />
                    )}
                        
                    <NavLinks href="#">{t('precos')}</NavLinks>
                    <NavLinks href="#">{t('academy')}</NavLinks>
                    <NavLinks href="#">{t('blog')}</NavLinks>
                    <NavLinks href="#">{t('contato')}</NavLinks>
                </NavHeaderContainer>

                    <DividingLine width="1px" height="1.5rem" backgroundColor="#99F3F5"/>
                    
                <LoginUserAndButton>
                    <LoginUser>
                        <Image src={iconProflie} alt="Icon Profile" />
                        <p>{t('entrar')}</p>
                    </LoginUser>

                    <Button background="transparent" border="1px solid #fff" color="#fff" height="3rem" width="160px">{t('comecarAgora')}</Button>
                </LoginUserAndButton>

                <SelectLang />
            </NavHeader>
        </ContainerHeader>
    )
}

export default Header;
