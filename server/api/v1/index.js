const router = require('express').Router();

router.use('/song', require('./song'));
router.use('/album', require('./albums'));
router.use('/artist', require('./artists'));
router.use('/playlist', require('./playlists'));
router.use('/interactions', require('./interactions'));
router.use('/songInPlaylists', require('./songsInPlaylists'));

module.exports = router;
