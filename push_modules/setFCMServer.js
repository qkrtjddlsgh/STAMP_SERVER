var server_key = 'AAAAApkTU34:APA91bHvpZ3WxGSM-qB6oApy2X2ACWYuqA9F1x1igx7DJkcXjFrym928cxb_IJQwC-pDK6ynsYhxc_pXLC4U4zZfkokAHgBEAXm8668gQYq0YNN9x-PPY9TeuRiQOCbFRNWVG11Wrsyl';
var FCM = new require('fcm-push');
var fcm = new FCM(server_key);

module.exports = fcm;