/**
 * Created by surajsatheeshnair on 10/24/17.
 */

module.exports = function (app) {
  require("./services/user.service.server")(app)
  require("./services/website.service.server")(app)

};
