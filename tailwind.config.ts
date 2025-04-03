import type { Config } from "tailwindcss";
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
    // darkMode: ["class"],
    // darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
	theme: {
    	extend: {
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
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
    			'star-movement-top': 'star-movement-top linear infinite alternate',
    			aurora: 'aurora 60s linear infinite',
    			'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
    			'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
    			first: 'moveVertical 30s ease infinite',
    			second: 'moveInCircle 20s reverse infinite',
    			third: 'moveInCircle 40s linear infinite',
    			fourth: 'moveHorizontal 40s ease infinite',
    			fifth: 'moveInCircle 20s ease infinite',
				grid: "grid 15s linear infinite",
    		},
    		keyframes: {
				grid: {
					"0%": { transform: "translateY(-50%)" },
					"100%": { transform: "translateY(0)" },
				},
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
    			},
    			'star-movement-bottom': {
    				'0%': {
    					transform: 'translate(0%, 0%)',
    					opacity: '1'
    				},
    				'100%': {
    					transform: 'translate(-100%, 0%)',
    					opacity: '0'
    				}
    			},
    			'star-movement-top': {
    				'0%': {
    					transform: 'translate(0%, 0%)',
    					opacity: '1'
    				},
    				'100%': {
    					transform: 'translate(100%, 0%)',
    					opacity: '0'
    				}
    			},
    			aurora: {
    				from: {
    					backgroundPosition: '50% 50%, 50% 50%'
    				},
    				to: {
    					backgroundPosition: '350% 50%, 350% 50%'
    				}
    			},
    			'spin-around': {
    				'0%': {
    					transform: 'translateZ(0) rotate(0)'
    				},
    				'15%, 35%': {
    					transform: 'translateZ(0) rotate(90deg)'
    				},
    				'65%, 85%': {
    					transform: 'translateZ(0) rotate(270deg)'
    				},
    				'100%': {
    					transform: 'translateZ(0) rotate(360deg)'
    				}
    			},
    			'shimmer-slide': {
    				to: {
    					transform: 'translate(calc(100cqw - 100%), 0)'
    				}
    			},
    			moveHorizontal: {
    				'0%': {
    					transform: 'translateX(-50%) translateY(-10%)'
    				},
    				'50%': {
    					transform: 'translateX(50%) translateY(10%)'
    				},
    				'100%': {
    					transform: 'translateX(-50%) translateY(-10%)'
    				}
    			},
    			moveInCircle: {
    				'0%': {
    					transform: 'rotate(0deg)'
    				},
    				'50%': {
    					transform: 'rotate(180deg)'
    				},
    				'100%': {
    					transform: 'rotate(360deg)'
    				}
    			},
    			moveVertical: {
    				'0%': {
    					transform: 'translateY(-50%)'
    				},
    				'50%': {
    					transform: 'translateY(50%)'
    				},
    				'100%': {
    					transform: 'translateY(-50%)'
    				}
    			}
    		},
    		backgroundImage: {
    			'grid-pattern': '',
    			'grid-pattern-light': '',
    		}
    	}
    },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
  
	addBase({
	  ":root": newVars,
	});
  }
  