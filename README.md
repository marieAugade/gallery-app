# AngularElectron

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Descriptif application
Il s'agit de crée une application capable d'ouvrir un flux vidéo dans une modale et d'afficher le contenu de la photo prise dans une galerie de photo dédiée.
L'application est déployable sur Google Chrome, mais aussi en client lourd sur Windows grâce à une encapsulation Electron.

# Fonctionnement application
-> Page de login: rentrer le login et le password codés en dur dans le code, présent dans le fichier: login.component.ts.
Si les credentials sont bonnes -> accès à la page Galerie, sinon l'utlisateur reste sur la page de login, avec un message d'erreur qui lui est remonté.

-> Page Galerie: un bouton "Open camera" est présent en bas à droite de l'écran. Un clic dessus déclencche l'apparition d'une modale contenant le flux vidéo de la caméra. Lors de la prise de photo (en cliquant sur le bouton "Prendre une photo) l'image est captué et affichée dans la galerie. Le flux vidéo se ferme, et nous puvons prendre d'autres photos pour compléter la galerie.