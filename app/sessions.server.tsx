import { createCookieSessionStorage } from '@remix-run/node';
import { createThemeSessionResolver } from 'remix-themes';

const isProduction = process.env.NODE_ENV === 'production';

const sessionStorage = createCookieSessionStorage({
    cookie: {
        name: 'theme',
        path: '/',
        httpOnly: true,
        sameSite: 'lax',
        secrets: [],
        ...(isProduction
            ? { domain: 'xnl.hri7566.info/admin', secure: true }
            : {})
    }
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
