/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		keyframes: {
			FadeIn: {
				'0%': {
					transform: 'translateX(-10%)', // Começa fora da tela à esquerda
					opacity: 0, // Começa invisível
				},
				'50%': {
					transform: 'translateX(0)', // Vai para a posição original (centro)
					opacity: 0.4, // Fica visível
				},
				'100%' :{
					transform: 'translateX(0)', // Volta para a posição original
                    opacity: 1, // Fica visível

			}}
			,
			FadeInRight: {
				'0%': {
					transform: 'translateX(10%)', // Começa fora da tela à esquerda
					opacity: 0, // Começa invisível
				},
				'50%': {
					transform: 'translateX(0)', // Vai para a posição original (centro)
					opacity: 0.4, // Fica visível
				},
				'100%' :{
					transform: 'translateX(0)', // Volta para a posição original
                    opacity: 1, // Fica visível

			}}
		},
		FadeOut: {
			'0%': {
                transform: 'translateX(0)', // Começa na posição original
                opacity: 1, // Começa visível
            },
            '50%': {
                transform: 'translateX(10%)', // Vai para a posição à esquerda
                opacity: 0.2, // Fica visível
            },
            '100%': {
                transform: 'translateX(100%)', // Vai para a posição à direita
                opacity: 0, // Começa invisível
            }
		},
		FadeInTop: {
			'0%': {
                transform: 'translateY(-10%)', // Começa na posição original
                opacity: 0, // Começa visível
            },
            '50%': {
                transform: 'translateY(-5%)', // Vai para a posição à esquerda
                opacity: 0.5, // Fica visível
            },
            '100%': {
                transform: 'translateY(0%)', // Vai para a posição à direita
                opacity: 1, // Começa invisível
            }
		},
		IncreaseWidth: {
			'0%': {
                width: '0%',
            },
            '100%': {
                width: '100%',
            }
		},
		animation: {
			SlideInFadeIn: 'FadeIn 1.5s ease',
			SlideOut: "FadeOut 1s ease",
			SlideInFadeInRight: "FadeInRight 1.5s ease",
			SlideInTop: 'FadeInTop 1s ease',
			IncreaseWidth: 'IncreaseWidth 3s ease ',
		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
