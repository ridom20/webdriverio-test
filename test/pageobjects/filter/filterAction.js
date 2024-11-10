const filterLocator = require('./filterLocator');

class FilterAction {
    async clickFilterDropdown () {
        await filterLocator.filterDropdown.click();
    }
    async clickSpecificDropdown () {
        await filterLocator.specificFilter.click();
    }
}
module.exports = new FilterAction();