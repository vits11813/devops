/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["my/devops/project/devops/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
