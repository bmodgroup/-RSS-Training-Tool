# RSS-Training-Tool-Technical-Guide

## Overview
This is a responsive website built with the Nuxt framework for Vue. For a detailed explanation of Nuxt, visit [Nuxt.js docs](https://nuxtjs.org).

### Build Setup
Run the commands below to install the necessary dependencies.

```bash
#### install dependencies
$ npm install

#### serve with hot reload at localhost:3000
$ npm run dev

#### build for production and launch server
$ npm run build
$ npm run start

#### generate static project
$ npm run generate
```

## Styles
This project uses [BootstrapVue](https://bootstrap-vue.org/) components for responsive styles.

The sass file called `_variables.scss` in `./assets/scss/_variables.scss` contains all the colours as named variables as well as the base size of 16px that's used to calculate the sizing of text and containers. It also has a sass function to convert pixel font sizes to rem, which looks like this throughout every component style:

```bash
font-size: rem(18px);
```
## Assets
Fonts, icons, images, and scss files are located in `./assets/`. Audio and PDF files are stored separately in `./static/audio/` and `./static/PDFs/` respectively. The audio files are named as such so that they are loaded dynamically in their components.
## Localization
Localization files are in `./static/localization/`.

Currently there are 2 translations files: `en.json` (English), and `fr.json` (French). To add a language, duplicate one of the json files and translate the corresponding key in the desired language. The translated string will automatically load in the correct location. Please keep in mind that styles will likely need adjustments to accommodate paragraph lengths and container widths of the new language.

Locales are added in the `i18n` settings in `nuxt.config.js`.

```bash
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
    lazy: true,
    langDir: './static/localization/',
    locales: [
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
      { code: 'fr', name: 'Français', iso: 'fr-FR', file: 'fr.json' },
      <!-- Add the new locale here -->
    ],
  },
```

## Plugins
### vue-gtag
Google Analytics is tracked using the `vue-gtag` plugin in `./plugins/`.

The UA ID is **UA-47454681-16**. Please note that Google is retiring Univeral Analytics in July 2023 so this ID will need to be upgraded to GA4. Once the GA4 tag is created, swap out the old ID with the new one in `vue-gtag.js` and Google Analytics will continue tracking.
 
```bash
export default ({ app }) => {
  Vue.use(VueGtag, {
    config: { id: "UA-47454681-16" }, <!-- Replace this ID with GA4 -->
    appName: 'XLH Training',
  }, app.router);
}
```
### vue-image-zoomer
An image zoomer is used for certain images in the _Scoring Practice_ page. Images that require a zoom are loaded in the `image-zoom` component.

## Pages
### About
This page uses Vue Bootstrap's `b-tabs` to organize the content and the `popover` component to provide more details about the highlighted definitions.

### Calculator
The calculator is a duplicate of the calculator component on the _Patient Cases_ page. When the user clicks the **Generate PDF** button, the content within the `<client-only>` element is what is saved in the PDF. The selections made on the web page is automatically updated in the `<client-only>` element.

### Cases
This is the actual training tool itself. The content is dynamically generated from the `pages` object in the data function and loaded into the `patient-case` component.

### Index
This contains the layout and content for the home page of the site.

### Practice
The _Practice_ page presents practice assessments before doing the actual cases. The content is dynamically generated from the `pages` object in the data function and loaded into the `practice-case` component.

### Tutorial
The _Tutorial_ page is the guided tutorial with audio. The content is organized in `b-tabs`.

## Components
### Assessment
This component is used by the _Practice_, _Tutorial_, and _Cases_ pages and the layout changes depending into which page it's loaded.

### DisclaimerScreen
This is the page where the user indicates whether they are a Canadian physician or not, and where they select their language preference.

### Feedback
This component is used in the _Tutorial_ page and provides content when the `Check Answer` button is clicked.

### HomeMenuItem
This component is used for the large buttons on the righthand side of the homepage.

### ImageSelection
This component is used in the _Tutorial_ page which emits an image selection for checking if it's the correct image.

### Modal
This is the modal component used in the `ScoringGuide` and `SiteFooter` that opens a popup to reveal information.

### PageTitle
This is the component for - you guessed it - the page titles.

### PatientCase
This is the component used in the _Cases_ page. It contains the logic that checks if the user’s selections are correct.

### Popover
This component displays extra content when a user hovers (or taps on mobile) any text highlighted in bold and purple in the _About_ page.

### PracticeCase
This is the component used in the _Scoring Practice_ page. It contains the logic that checks if the user’s selections are correct.

### ScoreInput
This component is used in the `Assessment` component and _Calculator_ page in which the user scores the severity of RSS from 0 to 2.

### ScoringGuide
This component is the scoring guide modal that's found throughout the site by pressing the **Scoring Guide** button.

### SiteFooter
This component contains the content found in the global footer that‘s pulled into the default template.

### SiteHeader
This component contains the content found in the global header that‘s pulled into the default template.

### SiteNav
This component contains the content found in the global sidebar navigation that‘s pulled into the default template.

