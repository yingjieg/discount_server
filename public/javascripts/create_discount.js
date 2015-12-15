(function($) {
    $('#create').on('click', function() {
        var data = submit();
        var loca = window.location;
        var url = loca.protocol + '//' + loca.hostname + ':' + loca.port;
        console.log(url);
        $.ajax({
            type: "POST",
            url: "/api/discounts",
            data: JSON.stringify(data),
            dataType: "json",
            contentType: "application/json",
            success: function(resp) {
                console.log(resp);
            }
        });
    });

    function submit() {
        var name = $('#discount_name').val();
        var location = $('#location').val();
        var category = $('#category').val();
        var description = $('#description').val();
        var promotion_time_frame = $('#promotion_time_frame').val();
        var terms_and_conditions = $('#terms_and_conditions').val();
        var website = $('#website').val();
        var phone = $('#phone').val();
        var gps_x = $('#gps_x').val();
        var gps_y = $('#gps_y').val();
        var image_root = $('#image_root').val();
        var image_files = $('#image_files').val();

        var data = {
            name: name,
            location: location,
            category: category,
            description: description,
            promotion_time_frame: promotion_time_frame,
            terms_and_conditions: terms_and_conditions,
            website: website,
            phone: phone,
            gps: {
                x: gps_x,
                y: gps_y
            },
            images: {
                root: image_root,
                files: image_files
            }
        }

        return data;

    }


})(jQuery);
