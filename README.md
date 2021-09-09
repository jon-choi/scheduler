# Interview Scheduler

Interview Scheduler is a single page application created using React. Users can easily and seamlessly schedule appointments with mentors that are available on a given day. If a user no longer requires assistance or wants to make some changes, they can easily do so by editing their information or by simply deleting the appointment. 

An API server runs concurrently with a PostgreSQL database to deliver an app that is sure to impress
your friends and family; and maybe even some of your worst enemies. ;)

Technical Specifications & Dependencies:
  - React
  - Webpack, Babel
  - Axios
  - Storybook
  - Jest
  - Cypress
  - Node-sass

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

Running two servers is required to run the app. One for the Webpack and the other for the scheduler API. After installing the required npm packages you will be able to run the Webpack server from your host machine with the following command:

```sh
npm start
```

The following repository can be forked and cloned into a separate directory: https://github.com/lighthouse-labs/scheduler-api.
Once that has been accomplished feel free to run the following commands:

```sh
npm install
npm start
```
These files will act as our API server.

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
## Final Product 
!["Demo of features"](https://github.com/jon-choi/scheduler/blob/master/docs/InterviewSchedulerDemo.gif?raw=true)

    The included GIF demonstrates the app as a user runs through available features. Enjoy!