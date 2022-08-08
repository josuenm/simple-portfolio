import i18next from 'i18next'
import PTBR from './locales/pt/pt-br.json'
import ENUS from './locales/en/en-us.json'
import { initReactI18next } from 'react-i18next'

const resources = {
  pt: PTBR,
  en: ENUS
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18next
