import React, { useContext } from "react";

import { Box } from "@mui/system";
import ProfileComp from "../../components/ProfileComp";
import { ThemeContext } from "../../components/contexts/ThemeContext";

import { themeContextInter } from "../../components/contexts/interface";

const Profiles = (): JSX.Element => {
  // const context: any = useContext(ThemeContext);
  // console.log(things, "things");

  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme, light, dark }: any = context;
        const theme: any = isLightTheme ? light : dark;
        return (
          <Box
            component="div"
            style={{
              background: theme.syntac,
              color: theme.bg,
              height: "100%",
            }}
          >
            <ProfileComp name={"name"} image={"asd"} />
          </Box>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Profiles;
