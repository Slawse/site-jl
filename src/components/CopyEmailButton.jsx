import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

function CopyEmailButton({ email, className = '' }) {
  const [copied, setCopied] = useState(false)
  const { t } = useLanguage()
  const c = t.copyEmail

  useEffect(() => {
    if (!copied) return undefined
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email)
    } catch {
      // Fallback for browsers without the async clipboard API
      const input = document.createElement('textarea')
      input.value = email
      input.setAttribute('readonly', '')
      input.style.position = 'absolute'
      input.style.left = '-9999px'
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
    }
    setCopied(true)
  }

  return (
    <button
      type="button"
      className={`copy-email-btn${copied ? ' is-copied' : ''} ${className}`}
      onClick={handleCopy}
      aria-label={c.aria}
    >
      {copied ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <rect x="9" y="9" width="11" height="11" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15V6a2 2 0 012-2h9" />
        </svg>
      )}
      <span aria-live="polite">{copied ? c.copied : c.copy}</span>
    </button>
  )
}

export default CopyEmailButton
