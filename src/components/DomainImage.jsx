import { useLanguage } from '../i18n/LanguageContext'

function DomainImage({ domain, className = '', showLabel = true }) {
  const { t } = useLanguage()

  return (
    <div className={`domain-image-placeholder ${className}`}>
      {domain.image ? (
        <img src={domain.image} alt={domain.title} />
      ) : (
        <>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="8.5" cy="10.5" r="1.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 15l-5-5-9 9" />
          </svg>
          {showLabel && <span>{t.domains.imageComingSoon}</span>}
        </>
      )}
    </div>
  )
}

export default DomainImage
