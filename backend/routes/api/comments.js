const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

// TODO: Add comment routes
// - POST /api/items/:slug/comments - Create a new comment
// - GET /api/items/:slug/comments - Get all comments for an item
// - DELETE /api/items/:slug/comments/:id - Delete a comment

router.get("/", (req, res) => {
    Comment.find()
        .then((comments) => {
            res.json(comments);
        })
        .catch((err) => {
            console.log(err);
        });
});

// add another endpoint for deleting a comment
router.delete("/:commentId", async (req, res, next) => {
    try {
        await Comment.findByIdAndRemove(req.params.commentId);
        res.sendStatus(200);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
