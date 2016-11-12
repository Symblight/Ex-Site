function showEditNote(){
	alert("1");
	console.log("chect it!");
}

function checkSpeed()
        {
            var image_file= 'http://alexander.life/images/my_uploads/1mb.jpg?' + (new Date().getTime());    //image src
            var images_size= 1068;                                                    //1068 kb, image file size
            var time_load= 0;                                                    //total time of load images
 
            var time_start = parseInt(new Date().getTime());
            var images_value = new Image();
            images_value.onload = function () {
                var time_end= parseInt(new Date().getTime());
                time_load = time_load + (time_end - time_start);
 
                var speed = parseInt(images_size / (time_load / 1024), 10);
                console.log('Load time in ms: ' + time_load + ' Internet speed: ' + speed + 'kb/s');
            };
            images_value.src = image_file;
        }