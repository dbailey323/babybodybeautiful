$(function(){
    console.log('before: '+$('#v1').attr('src'));
    if ($(window).width() < 1000) {
        var videoFile = 'Images/Baby Body Beautiful.mp4';
        $('#v1').attr('src',videoFile);
    }
    else if ($(window).width() > 1000) {
        var videoFile = 'Images/Baby Body Beautiful Instagram Story.MP4';
        $('#v1').attr('src',videoFile);
    }
    console.log('after: '+$('#v1').attr('src'));
});