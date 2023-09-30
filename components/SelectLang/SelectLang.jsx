import { LanguageContainer, SubMenuLanguageSelector, LanguageOptions, ViewSelectLang, LangAndIcon, DivTest, DivIconCheck } from './style.jsx';
import Image from 'next/image.js';
import iconOpenArrow from '../../public/poligon.svg'
import { useState, useRef, useEffect } from 'react';
import iconBrazil from '../../public/brazil.svg';
import iconUsa from '../../public/usa.svg';
import iconSpain from '../../public/spain.svg';
import iconCheck from '../../public/checkmark.svg';
import Link from "next/link";
import { useRouter } from "next/router";

function SelectLang() {
    
    const {locale, locales, route} = useRouter();
    const [selectLangIsOpen, setSelectLangIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(locale);
    const containerRef = useRef(null)

    function handleListenOpenMenu() {
        setSelectLangIsOpen(!selectLangIsOpen);
    }

    function handleSelectLanguage(language) {
        setSelectedLanguage(language);
        setSelectLangIsOpen(false);
    }

    function handleOutsideClick(event) {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setSelectLangIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <LanguageContainer ref={containerRef} onClick={handleListenOpenMenu}>
            <ViewSelectLang>
                <LangAndIcon color='#fff'>
                    {locale.toUpperCase()}
                    <Image src={iconOpenArrow} alt="Open Arrow" />
                </LangAndIcon>
            </ViewSelectLang>
            <SubMenuLanguageSelector isOpenSelectorLang={selectLangIsOpen}>
                <LanguageOptions>
                    {
                        locales.map((languages) => {
                            return (
                                <DivTest key={languages}>
                                    <Link href={route} locale={languages}>
                                        <LangAndIcon onClick={() => handleSelectLanguage(languages)}>
                                            <Image src={languages === 'pt' ? iconBrazil : languages === 'en' ? iconUsa : iconSpain} alt={languages === 'PT' ? "Brazil" : languages === 'EN' ? "United States" : "Spain"} />
                                            {languages.toUpperCase()}
                                            {selectedLanguage === languages && <DivIconCheck><Image src={iconCheck} alt="Check" /></DivIconCheck>}
                                        </LangAndIcon>
                                    </Link>
                                </DivTest>
                            )
                        })
                    }
                </LanguageOptions>
                

            </SubMenuLanguageSelector>
        </LanguageContainer>
    );
}

export default SelectLang;



