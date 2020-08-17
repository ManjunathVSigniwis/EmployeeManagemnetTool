/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"financ/com/financial/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});