const router = require("express").Router();

const ApiRoutes = require("./api");
const HomeRoutes = require("./HomeRoutes");
const DashboardRoutes = require("./DashRoutes");

router.use("/", HomeRoutes);
router.use("/api", ApiRoutes);
router.use("/dashboard/", DashboardRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;