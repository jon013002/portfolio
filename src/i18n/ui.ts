export const defaultLang = 'es';
export const showDefaultLang = false;

export const LANGUAGES: Record<string, { 
    code: string; 
    name: string 
}> = {
    es: {
        code: 'es',
        name: 'Español',
    },
    en: {
		code: 'en',
		name: 'English',
	},
};

export const ui = {
	es: {
		'nav.inicio': 'Inicio',
	},
	en: {
		'nav.inicio': 'Home',
	},
} as const;

export const routes = {
	es: {
		vota: 'vota',
		info: 'info',
		archivo: 'archivo',
		'aviso-legal': 'aviso-legal',
		privacidad: 'privacidad',
		cookies: 'cookies',
	},
	en: {
		vota: 'vote',
		info: 'information',
		archivo: 'archive',
		'aviso-legal': 'legal-notice',
		privacidad: 'privacy',
		cookies: 'cookies',
	},
};