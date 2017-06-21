# Typeahead Demo

Demonstrates the Typeahead component from [ng2-Bootstrap](http://valor-software.com/ngx-bootstrap/#/typeahead).

## Async Example

The async example has been modified to call a backend service:
`typeahead-server`. This is a SpringBoot project with a Gradle build.

CORS has been configured to use the default ports for both the client
and the server (i.e. port 8080 for the `typeahead-server` and 4200 for
typeahead-client`.

This example can be changed to use local data by making changes in the
component: `demo-typeahead-async.component.ts`.

## Running the Code

To run the server, cd into the `typeahead-server` folder and run `gradle bootRun`.

To run the client, cd into the `typeahead-client` folder and run `npm install && ng serve`.

## The Server Endpoint

The server exposes a single endpoint, by default on:
`http://localhost:8080/states` and takes an optional query parameter:
`name`. When called with no parameter, it will return all the states.
When called with the single parameter, it will return all the states
whose name contains the specified parameter value when case is ignored.
For example, invoking `http://localhost:8080/states?name=ska` will
return all the states whose name contains the letters `ska` (i.e. Alaska
and Nebraska).

----
Contact: <henry.g.brown@gmail.com>