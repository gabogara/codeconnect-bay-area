# WEB103 Project 3 - CodeConnect Bay Area

Submitted by: **Gabriel Restrepo**

About this web app: **CodeConnect Bay Area is a virtual community space where users can discover technology, career, and networking events in Oakland, Berkeley, San Francisco, and Emeryville. Users can select a city through a visual card interface, visit a unique location page, and view events retrieved from a PostgreSQL database through an Express API.**

Time spent: **18** hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses React to display data from the API**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [x] **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [x] **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command `SELECT * FROM tablename;` to display your table contents.**
- [x] **The web app displays a title.**
- [x] **Website includes a visual interface that allows users to select a location they would like to view.**
  - [x] *The homepage displays visual city cards for Oakland, Berkeley, San Francisco, and Emeryville.*
- [x] **Each location has a detail page with its own unique URL.**
  - [x] *Examples include `/locations/oakland`, `/locations/berkeley`, `/locations/san-francisco`, and `/locations/emeryville`.*
- [x] **Clicking on a location navigates to its corresponding detail page and displays list of all events from the `events` table associated with that location.**

The following **optional** features are implemented:

- [x] An additional page shows all possible events
  - [x] Users can filter events by location.
- [ ] Events display a countdown showing the time remaining before that event
  - [ ] Events appear with different formatting when the event has passed.

The following **additional** features are implemented:

- [x] The layout is responsive for smaller screens.

---

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://i.imgur.com/dYFFMum.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [Kap](https://getkap.co/)

---

## Notes

One challenge I encountered was connecting the React frontend and Express backend while keeping the API logic organized. I used a service layer to centralize API requests, controllers and routes to organize backend logic, and React Router to create unique pages for each location.

Another challenge was making sure location values from the URL matched the values stored in the PostgreSQL database. I used route parameters and formatted location slugs such as `san-francisco` into `San Francisco` before sending the API request.

## License

Copyright 2026 Gabriel Restrepo

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.