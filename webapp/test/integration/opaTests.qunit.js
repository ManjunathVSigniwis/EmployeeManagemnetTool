/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"Manage/com/management/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});