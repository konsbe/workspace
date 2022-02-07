import React, { createContext } from "react";

import { themeContextInter } from "./interface";

export const ThemeContext = createContext({});

const ThemeContextProvider: React.FC = ({ children }) => {
  const state: themeContextInter = {
    isLightTheme: true,
    light: { syntac: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntac: "#ddd", ui: "#333", bg: "#555" },
  };

  return (
    <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

//with class component you can provide it like:

// class ThemeContextProvider extends React.Component {

//     state = {
//         isLightTheme: true,
//         light: {syntac: '#555', ui:"#ddd", bg: '#eee'},
//         dark: {syntax:'#ddd', ui:'#333', bg:'#555'}
//     }

//     render() {
//         return (
//             <ThemeContext.Provider value={{ ...this.state }}>
//                 {this.props.children}
//             </ThemeContext.Provider>
//         );
//     }

// }
