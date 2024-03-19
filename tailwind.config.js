/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Inter": ["Inter", "sans-serif"]
      },
      colors: {
        "Green": "hsl(75, 94%, 57%)",
        "White": "hsl(0, 0%, 100%)",
        "Grey": "hsl(0, 0%, 20%)",
        "Dark_Grey": "hsl(0, 0%, 12%)",
        "Off_Black": "hsl(0, 0%, 8%)"
      },
      screens: {
        "Large_Mobiles_Device_Size": {"max": "426px","min": "340px"},
        "Small_Mobiles_Device_Size": {"max": "340px","min": "320px"},
        "Extra_Small_Mobiles_Device_Size": {"max":"320px"}
      }
    },
  },
  plugins: [],
}

