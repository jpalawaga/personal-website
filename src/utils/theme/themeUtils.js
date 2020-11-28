const THEME_KEY = 'theme'

export const getThemeLocale = () => {
  return localStorage.getItem(THEME_KEY) || 'dark'
}

export const setThemeLocale = () => {
  const nextTheme = getThemeLocale() === 'dark' ? 'light' : 'dark'
  localStorage.setItem(THEME_KEY, nextTheme)
}

export const applyThemeLocale = () => {
  const colorMode = getThemeLocale()
  const rootElement = document.querySelector("html")
  if (colorMode === 'light') {
    rootElement.classList.add('light')
  } else {
    rootElement.classList.remove('light')
  }
}
