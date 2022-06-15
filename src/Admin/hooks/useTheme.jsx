const { useState, useEffect } = require("react")

const useTheme = () => {

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        if (theme === 'light') {
            localStorage.setItem('theme', 'black')
            setTheme('black')
        }
        else {
            localStorage.setItem('theme', 'light')
            setTheme('light')
        }

    }

    useEffect(() => {
        const localTheme = localStorage.getItem('theme')
        if (localTheme) {
            setTheme(localTheme)
        }

    }, [])

    return {
        theme,
        toggleTheme
    }

}

export default useTheme