const express = require("express");
const asyncHandler = require("../../../lib/middlewares/asyncHandler");
const {
  getExampleById,
  getAllExamples,
  createExample,
  replaceExample,
  patchExample,
  deleteExample,
} = require("../useCases");
const router = express.Router();

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const response = await getExampleById();
    res.send(response);
  })
);

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const response = await getAllExamples();
    res.send(response);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const response = await createExample();
    res.send(response);
  })
);

router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const response = await replaceExample();
    res.send(response);
  })
);

router.patch(
  "/:id",
  asyncHandler(async (req, res) => {
    const response = await patchExample();
    res.send(response);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const response = await deleteExample();
    res.send(response);
  })
);

module.exports = router;
