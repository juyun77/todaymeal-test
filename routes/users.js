const express = require("express");
const controller = require("../controller/Cusers");
const router = express.Router();
const uploadDetail = require("../middlewares/uploadDetail"); // Multer 설정 파일
const authenticateToken = require("../middlewares/jwtAuth");

// GET
router.get("/", authenticateToken, controller.users); // users
router.get("/login", controller.login); // login
router.get("/edit", authenticateToken, controller.edit); // usersedit
router.get("/register", controller.register); // register
// router.get("/details", authenticateToken, controller.getUserInfo);

// POST
router.post("/login", controller.userLogin); //login post
router.post("/register", controller.userRegister); //register post
router.post("/registerIdCheck", controller.checkUserId);
// 로그아웃 라우터
router.post("/logout", controller.logout);
router.post(
  "/dynamicUpload",
  uploadDetail.single("dynamicFile"),
  controller.dynamicUpload,
);

//PATCH
router.patch("/", controller.updateUserInfo);

//DELETE
router.delete("/delete", authenticateToken, controller.deleteUser);

module.exports = router;
