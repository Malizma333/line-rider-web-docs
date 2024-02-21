# Linerider.com API Documentation

## About

The contents of this repository document the [Redux](https://redux.js.org/)-based API for the website [linerider.com](https://www.linerider.com).

## Documentation Structure

Within each folder of this repository are markdown documentation files relating to their directory. Details about each directory can be found below.

### Actions

The `Actions` folder contains documentation for functions that alter the global state. These files are broken up into three sections, `Description`, `Examples`, and `Related`.

The `Description` section details the effects of the function. It also outlines syntax for the function and relevant parameters, if any.

The `Examples` section is used to demonstrate how the function is used by providing one or more snippets of code.

The `Related` section links to action functions that affect similar states.

### Selectors

The `Selectors` folder contains documentation for functions that read from the global state. These files are broken up into the same three sections, `Description`, `Examples`, and `Related`.

The `Description` section details what the function returns. It also outlines syntax for the function and relevant parameters, if any.

The `Examples` section is used to demonstrate how the function is used by providing one or more snippets of code.

The `Related` section links to selector functions that affect similar states.

### External

The `External` folder contains documentation for object interfaces and enumerated data. These are usually referenced from within the action or selector docs, but don't do anything by themselves.
