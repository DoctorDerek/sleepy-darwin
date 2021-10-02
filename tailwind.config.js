const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  darkMode: "class",
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      26: "26px",
      28: "28px",
      30: "30px",
      32: "32px",
      34: "34px",
      36: "36px",
      38: "38px",
      40: "40px",
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
      outer: "0 0 5px rgba(0, 0, 0, 0.2)",
    },
    extend: {
      spacing: {
        "9/16": "56.25%",
        11: "2.75rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        20: "5rem",
        21: "5.25rem",
        22: "5.5rem",
        23: "5.75rem",
        24: "6rem",
        25: "6.25rem",
        26: "6.5rem",
        27: "6.75rem",
        28: "7rem",
        29: "7.25rem",
        30: "7.5rem",
        31: "7.75rem",
        32: "8rem",
        33: "8.25rem",
        34: "8.5rem",
        35: "8.75rem",
        36: "9rem",
        37: "9.25rem",
        38: "9.5rem",
        39: "9.75rem",
        40: "10rem",
        41: "10.25rem",
        42: "10.5rem",
        43: "10.75rem",
        44: "11rem",
        45: "11.25rem",
        46: "11.5rem",
        47: "11.75rem",
        48: "12rem",
        49: "12.25rem",
        50: "12.5rem",
        51: "12.75rem",
        52: "13rem",
        53: "13.25rem",
        54: "13.5rem",
        55: "13.75rem",
        56: "14rem",
        57: "14.25rem",
        58: "14.5rem",
        60: "15rem",
        62: "15.5rem",
        64: "16rem",
        66: "16.5rem",
        68: "17rem",
        70: "17.5rem",
        72: "18rem",
        74: "18.5rem",
        76: "19rem",
        78: "19.5rem",
        80: "20rem",
        82: "20.5rem",
        84: "21rem",
        86: "21.5rem",
        88: "22rem",
        90: "22.5rem",
        92: "23rem",
        94: "23.5rem",
        96: "24rem",
        98: "24.5rem",
        100: "25rem",
        102: "25.5rem",
        104: "26rem",
        106: "26.5rem",
        108: "27rem",
        110: "27.5rem",
        112: "28rem",
        114: "28.5rem",
        116: "29rem",
        118: "29.5rem",
        120: "30rem",
        122: "30.5rem",
        124: "31rem",
        126: "31.5rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        172: "43rem",
        180: "45rem",
        192: "48rem",
        200: "50rem",
        228: "57rem",
        256: "64rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
        "10xl": "104rem",
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
      },
      colors: {
        blue: {
          ...colors.sky,
        },
        teal: {
          ...colors.sky,
        },
        red: {
          ...colors.red,
        },
      },
    }
  },
}
