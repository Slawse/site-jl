import { createContext, useContext, useEffect, useState } from 'react'
import { STRINGS } from './strings.jsx'

const LanguageContext = createContext(null)

function getInitialLang() {
  if (typeof window === 'undefined') return 'fr'
  try {
    const saved = window.localStorage.getItem('jll-lang')
    if (saved === 'fr' || saved === 'en') return saved
  } catch {
    // ignore
  }
  return 'fr'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    try {
      window.localStorage.setItem('jll-lang', lang)
    } catch {
      // ignore
    }
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = () => setLang((l) => (l === 'fr' ? 'en' : 'fr'))

  const value = {
    lang,
    setLang,
    toggleLang,
    t: STRINGS[lang],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
