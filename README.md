# Medicine Price Registry
<img src="/resources/header.png" width="150"> 

> “project” :           Medicine Price Registry
> “project_category” :  medical
> “app_name”:           MPR
> “version” :           0.0.2

### App version
* Framework:  Ionic 2
* Version:    "version": "1.3.1"
* Platforms:  IOS , ANDROID , WINDOWS

## What is the application about ? ##
Did you know that medicine prices are regulated in South Africa? Using this application you can:

    * Know what to expect to pay when you get a prescription from your doctor
    * Find possible generics for a branded medicine. Ask your doctor if these medicines are viable alternatives.
    * Ensure that you are not being overcharged for your medicine.

## Installing

```bash
npm install -g ionic
```

*Note: For a global install of `-g ionic`, OSX/Linux users may need to prefix the command with `sudo` or can setup [proper file permissions on OSX for npm](http://www.johnpapa.net/how-to-use-npm-global-without-sudo-on-osx/) to install without `sudo`. *


## Starting an Ionic App

Install packages

    npm install
    bower install

To Run app

```bash
ionic serve
``` 

### Services

Current Version: V1
We get all our API's from [code4sa](https://mpr.code4sa.org/)

For more information you can visit thier repo
https://github.com/Code4SA/medicine-price-registry
Example:
```bash
https://mpr.code4sa.org/api/search-lite?q=lamictin
```


### Unit Testing

Running lint:
Example:
```bash
npm run lint
```

### Having any issues ?

If you are having any issues please open a new issue. pull requests are welcome :) 

### App Preview

- All app preview screenshots were taken by running `ionic serve`

<img src="/resources/screenshots/android(about).png" width="200">
<img src="/resources/screenshots/android(details).png" width="200">
<img src="/resources/screenshots/android(home).png" width="200">
<img src="/resources/screenshots/android(settings).png" width="200">

- To see more images of the app, check out [screenshots directory](https://github.com/leroygumede/medicine-price-registry-mobile/tree/master/resources/screenshots)!
