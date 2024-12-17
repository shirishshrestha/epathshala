/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		gridTemplateColumns: {
  			custom: 'repeat(auto-fit, minmax(230px, 1fr))',
  			business: 'repeat(auto-fit, minmax(250px, 1fr))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: '#334155',
  			foreground: '#F9FAFB',
  			card: {
  				DEFAULT: '#ffffff',
  				foreground: '#334155'
  			},
  			popover: {
  				DEFAULT: '#e5e5e5',
  				foreground: '#334155'
  			},
  			primary: {
  				DEFAULT: '#1d1d2f',
  				foreground: '#ffffff'
  			},
  			secondary: {
  				DEFAULT: '#3a3a59',
  				foreground: '#ffffff'
  			},
  			muted: {
  				DEFAULT: '#4e4e74',
  				foreground: '#334155'
  			},
  			accent: {
  				DEFAULT: '#1a8598',
  				foreground: '#ffffff'
  			},
  			destructive: {
  				DEFAULT: '#ff4d4d',
  				foreground: '#ffffff'
  			},
  			mild: {
  				DEFAULT: '#b0b0e3'
  			},
  			highlight: '#ffe066',
  			border: '#D1D5DB',
  			input: '#ffffff',
  			ring: '#38BDF8',
  			chart: {
  				'1': '#10B981',
  				'2': '#FB7185',
  				'3': '#0E7490',
  				'4': '#A78BFA',
  				'5': '#38BDF8'
  			},
  			sidebar: {
  				DEFAULT: '#3a3a59',
  				foreground: '#F9FAFB',
  				primary: '#1d1d2f',
  				'primary-foreground': '#ffffff',
  				accent: '#1a8598',
  				'accent-foreground': '#ffffff',
  				border: '#D1D5DB',
  				ring: '#38BDF8'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
