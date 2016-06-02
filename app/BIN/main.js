"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
var router_1 = require('@angular/router');
var export_1 = require('./export');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_DIRECTIVES,
    router_1.ROUTER_PROVIDERS,
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: export_1.UxButton, multi: true })
]);
//# sourceMappingURL=main.js.map