import { Router } from "express";
import {
  createChannel,
  editChannel,
  deleteChannel,
  getChannelById,
} from "../controllers/channel.controller";
const router = Router();

router.route("/").post(createChannel);
router.route("/:id").get(getChannelById);
router.route("/").patch(editChannel);
router.route("/").delete(deleteChannel);
module.exports = router;
