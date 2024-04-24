import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;&display=swap");
/* Variables CSS */

[data-theme="dark"]{
  // --hue: hsl(0, var(--sat), 20%);
  ${
    "" /* --title-color: hsl(0, var(--sat), 20%);
  --title-color-dark: hsl(0, var(--sat), 0%); */
  }
  ${"" /* --text-color: hsl(0, var(--sat), 46%); */}
  ${
    "" /* --body-color: hsl(0, var(--sat), 98%);
  --container-color: #fff;
  --background-color: #fff; */
  }
  --title-color: #fff;
  ${"" /* --text-color: #0099ad; */}
  --text-color: #36eb45;
  --font-white: #fff;
  --btn-color: #00ff1e;
  --border-color: #71737a;
  --font-color: #71878D;
  --card-color: #171F38;
  --green-color: #00ff1e;
  --body-color: #0e1630;
  --container-color: #0e1630;
  --background-color: #0e1630;
}
:root {
  /* Colors */
  /* Color Mode(hue, saturation, lightness) */
  --header-height: 3rem;
  // --hue: 0%;
  --sat: 0%;
  --title-color: hsl(0, var(--sat), 20%);
  --title-color-dark: hsl(0, var(--sat), 0%);
  --btn-color: #00ff1e;
  --border-color: #71737a;
  --text-color: hsl(0, var(--sat), 46%);
  --body-color: hsl(0, var(--sat), 98%);
  --card-color: #fff;
  --container-color: #fff;
  --background-color: #fff;
  /* Font and Typography */
  --body-font: "Poppins", sans-serif;
  --big-font-size: 3.5rem;
  --h1-font-size: 2.25rem;
  --h2-font-size: 1.5rem;
  --h3-font-size: 1.25rem;
  --normal-font-size: 1rem;
  --small-font-size: 0.875rem;
  --smaller-font-size: 0.813rem;
  --tiny-font-size: 0.625rem;
  /* Font Weight */
  --font-normal: 400;
  --font-medium: 500;
  --font-semi-bold: 600;
  /* Margin Bottom */
  --mb-0-25: 0.25rem;
  --mb-0-5: 0.5rem;
  --mb-0-75: 0.75rem;
  --mb-1: 1rem;
  --mb-1-5: 1.5rem;
  --mb-2: 2rem;
  --mb-2-5: 2.5rem;
  --mb-3: 3rem;
  /* z - index */

  --z-toolkit: 10;
  --z-fixed: 100;
  --z-model: 1000;
}

/* Responsive typography */
@media screen and (max-width: 992px) {
  :root {
    /* Font and Typography */
    --big-font-size: 2.75rem;
    --h1-font-size: 1.5rem;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1rem;
    --normal-font-size: 0.938rem;
    --small-font-size: 0.813rem;
    --smaller-font-size: 0.75rem;
  }
}
/* BASE */
* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body,
button,
input,
textarea {
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
}
body {
  background-color: var(--body-color);
  color: var(--text-color);
}
h1,
h2,
h3 {
  color: var(--title-color);
  font-weight: var(--font-semi-bold);
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
button {
  cursor: pointer;
  border: none;
  outline: none;
}

img {
  max-width: 100%;
  height: auto;
}
/* REUSEABLE CSS CLASSES */
.section {
  padding: 6rem 0 2rem;
}
.section__title {
  font-size: var(--h1-font-size);
  color: #01C369;
}
.section__subtitle {
  display: block;
  font-size: var(--small-font-size);
  margin-bottom: 4rem;
}

.section__title,
.section__subtitle {
  color: var(--font-color);
  text-align: center;
}

/* LAYOUT */
.container {
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;
}
.grid {
  display: grid;
  justify-content: center;
  gap: 1.5rem;
}
/* BUTTONS */
.button {
  -webkit-box-shadow:0px 0px 9px 9px var(--btn-shadow) ;
-moz-box-shadow:0px 0px 9px 9px var(--btn-shadow) ;
box-shadow:0px 0px 9px 9px var(--btn-shadow) ;
  display: inline-block;
  background-color: var(--title-color);
  color: var(--container-color);
  padding: 1.25rem 2rem;
  border-radius: 1rem;
  -webkit-border-radius: 1rem;
  -moz-border-radius: 1rem;
  -ms-border-radius: 1rem;
  -o-border-radius: 1rem;
  font-weight: var(--font-medium);
}
.button:hover {
  background-color: var(--title-color);
}
.button__icon {
  margin-left: var(--mb-0-5);
}
.button__icon {
  display: inline-flex;
  align-items: center;
}




/* BREAKPOINTS */
/* FOR LARGE DEVICES */
@media screen and (max-width: 992px) {
  .container {
    margin-left: var(--mb-1-5);
    margin-right: var(--mb-1-5);
  }
  .button {
    padding: 1rem 1.75rem;
  }

  .button__icon {
    width: 22px;
    height: 22px;
  }
}

@media screen and (max-width: 768px) {
  .section {
    padding: 2rem 0 4rem;
  }
}
@media screen and (max-width: 576px) {
  :root {
    --big-font-size: 2.25rem;
  }

  .container{
    margin-left: var(--mb-1);
    margin-right: var(--mb-1);
  }
}
/* For Small devices */
@media screen and (max-width: 350px) {
}

/* ScrollBar Customization */
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #888;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
`;

export default GlobalStyle;