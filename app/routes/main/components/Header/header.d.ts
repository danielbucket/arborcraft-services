declare module 'styled-components' {
  export interface StyledHeader {
    width: String;
    height: String;
    display: String;
    flexDirection: String;
    alignItems: String;
    backgroundColor: String;
    color: String;
    div: {
      textAlign: String;
      h1: {
        margin: String;
        fontSize: String;
      };
      p: {
        margin: String;
        fontSize: String;
      };
    };
    nav: {
      marginTop: String;
      border: String;
      ul: {
        listStyle: String;
        padding: String;
        display: String;
        gap: String;
        li: {
          a: {
            color: String;
            textDecoration: String;
            fontSize: String;
            '&:hover': {
              textDecoration: String;
            };
          };
        };
      };
    };
    '@media (max-width: 600px)': {
      flexDirection: String;
      alignItems: String;
      nav: {
        ul: {
          flexDirection: String;
          alignItems: String;
          gap: String;
        };
      };
    };
  }
};