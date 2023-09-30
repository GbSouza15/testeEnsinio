import { CenterContainer, Container, NavOptions, Links, HeaderMenuMobile, CloseAndSelectLang, LoginUser } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";
import SubMenu from "../SubMenu/SubMenu";
import SelectLang from "../SelectLang/SelectLang";
import iconProflie from "../../public/user-profile.svg";
import { DividingLine } from "../Hero/style";
import Image from "next/image";
import iconOpenSubMenu from "../../public/poligon.svg";
import { useTranslations } from "next-intl";


function MenuMobile({ menuMobileIsOpen, setMenuMobileIsOpen }) {
    const t = useTranslations('MenuNav')

    const [subMenuIsOpen, setSubMenuIsOpen] = useState(false);
    const containerRef = useRef(null)

    const handleOutsideClick = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setSubMenuIsOpen(false);
        }
    };

    const handleSubMenu = () => {
        setSubMenuIsOpen(!subMenuIsOpen);
    }

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <Container isOpen={menuMobileIsOpen}>
            <HeaderMenuMobile>
                <LoginUser>
                    <Image src={iconProflie} alt="Icon Profile" />
                    <p>{t('entrar')}</p>
                </LoginUser>
                <CloseAndSelectLang>
                    <SelectLang />
                    <DividingLine width="1px" height="2rem" backgroundColor="#99F3F5"/>
                    <AiOutlineClose onClick={() => setMenuMobileIsOpen(false)} size="2.5rem"/>
                </CloseAndSelectLang>
            </HeaderMenuMobile>
            <CenterContainer>
                <NavOptions>
                    <Links ref={containerRef} href="#" onClick={handleSubMenu}>
                    {t('solucoes')}
                        <Image src={iconOpenSubMenu} alt="Icon Open SubMenu" />
                    </Links>
                        {
                            subMenuIsOpen && <SubMenu subMenuIsOpen={subMenuIsOpen}/>
                        }
                    <Links href="#">{t('precos')}</Links>
                    <Links href="#">{t('academy')}</Links>
                    <Links href="#">{t('blog')}</Links>
                    <Links href="#">{t('contato')}</Links>
                </NavOptions>
            </CenterContainer>
        </Container>
    )
}

export default MenuMobile;