import { type ThemeOptions, createTheme } from "@mui/material";
import { colorConfigs } from "./pallete.js";

export const defaultTheme: ThemeOptions = createTheme({
   palette: {
      primary: {
         main: colorConfigs.primary,
      },
      secondary: {
         main: colorConfigs.secondary,
      },
      success: {
         main: colorConfigs.success,
      },
      warning: {
         main: colorConfigs.warning,
      },
      error: {
         main: colorConfigs.error,
      },
      info: {
         main: colorConfigs.info,
      },
      text: {
         secondary: colorConfigs.textGrey,
      },
   },
   typography: {
      fontFamily: "Roboto",
      fontSize: 13,
      h1: {
         fontSize: "1.5rem",
         lineHeight: 1.2,
         fontWeight: 600,
         color: "#37373C",
         margin: "0 0 .5rem",
      },
      h2: {
         fontSize: "1.4rem",
         lineHeight: 1.2,
         fontWeight: 600,
         color: "#37373C",
         margin: "0 0 .5rem",
      },
      h3: {
         fontSize: "1.25rem",
         lineHeight: 1.2,
         fontWeight: 600,
         color: "#37373C",
         margin: "0 0 .5rem",
      },
      h4: {
         fontSize: "1.1rem",
         lineHeight: 1.2,
         fontWeight: 600,
         color: "#37373C",
         margin: "0 0 .5rem",
      },
      h5: {
         fontSize: "1rem",
         lineHeight: 1.2,
         fontWeight: 600,
         color: "#37373C",
         margin: "0 0 .5rem",
      },
      h6: {
         fontSize: ".875rem",
         lineHeight: 1.2,
         fontWeight: 600,
         color: "#37373C",
         margin: "0 0 .5rem",
      },
      body1: {
         fontSize: ".875rem",
      },
   },
   components: {
      MuiTextField: {
         styleOverrides: {
            root: {
               "::placeholder": {
                  fontWeight: "light",
               },
            },
         },
      },
      MuiButton: {
         styleOverrides: {
            root: {
               fontSize: 11,
               background: "primary",
               transition: "all .2s linear",
            },
         },
      },
      MuiAccordionSummary: {
         styleOverrides: {
            root: {
               background: colorConfigs.primary,
               minHeight: "30px",
               borderRadius: "4px",
               "&.Mui-expanded": {
                  minHeight: "30px",
               },
               "&.in-progress": {
                  background: colorConfigs.gray100,
               },
               "&.in-progress .step-counter-title": {
                  color: colorConfigs.gray100,
               },
               "&.completed": {
                  background: colorConfigs.gray200,
               },
               "&.completed .step-counter-title": {
                  color: colorConfigs.gray200,
               },
            },
            content: {
               margin: "10px 0",
               "&.Mui-expanded": {
                  margin: "10px 0",
               },
            },
            // expanded: {
            //     height: 0,
            // },
            // contentGutters: {
            //     height: 0,
            // },
         },
      },
      MuiTableCell: {
         styleOverrides: {
            root: {
               fontSize: ".70rem",
               padding: "7px",
            },
         },
      },
   },
});
