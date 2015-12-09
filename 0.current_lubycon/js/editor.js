﻿
/*----------------------------editor start----------------------------*/
/////////////////////////////////////////////////////////
//      editor content_name start
/////////////////////////////////////////////////////////
$(function ()
{
    var editor_content_name = $('#editor_content_name');

    editor_content_name.focus(function () {
        if(editor_content_name.val() == 'Your Contents Name') {
            editor_content_name.val('');
        }
    });
    editor_content_name.blur(function () {
        if (editor_content_name.val() == '') {
            editor_content_name.val('Your Contents Name');
        }
    });
});
//////////text input auto resize start-------/////////
function Expander() {
    this.start = function () {
        $("#editor_content_name").keydown(function(e) {
            this.style.width = 0;
            var newWidth = this.scrollWidth + 5;
            
            if( this.scrollWidth >= this.clientWidth ){
                newWidth += 5;
                this.style.width = newWidth + 'px';
            }
        });
    }
}

$(function() {
    window.app = new Expander();
    window.app.start();
});
//////////text input auto resize end-------/////////
/////////////////////////////////////////////////////////
//      editor content_name end
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//      editor nav start
/////////////////////////////////////////////////////////


function editor_gnv_select(gnv_sel)
{
    $("#editor_gnv ol li").removeClass();
    switch (gnv_sel)
    {
        case "edit":
            $("#editor_gnv ol li:nth-child(1)").addClass("editor_selected_gnv");
            break;
        case "call_thumb":
            $("#editor_gnv ol li:nth-child(3)").addClass("editor_selected_gnv");
            break;
        case "call_setting":
            $("#editor_gnv ol li:nth-child(5)").addClass("editor_selected_gnv");
            break;
        default :
            $("#editor_gnv ol li:nth-child(1)").addClass("editor_selected_gnv");
            break;
    }
};
/* gnv function
$(document).ready(function () {
    editor_gnv_select("setting");
});
*/

$(function () {
    $('#editor_aside ol li').hover(function () //aside tools mouse hover event
    {
        $(this).css({ "background": "#666666" });
        $(this).children('i').css({ "color": "#48cfad" });
        $(this).children('.tooltip_bt').stop().fadeIn(300).css("display", "inline-block");
    }, function () {
        $(this).css({ "background": "#555" });
        $(this).children('i').css({ "color": "#333333" });
        $(this).children('.tooltip_bt').stop().fadeOut(300);

    });

    /////////////////////////////////////////////////////////
    //      editor nav end
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    //      img crop start
    /////////////////////////////////////////////////////////
    $(document).on('click', '.preview_img', function () {
        if ($(this).css('border') == '1px solid rgb(255, 255, 255)') {
            $(this).css({ "background": "rgb(255, 255, 255)" }); //css reset
            $(this).css({ "box-shadow": "0px 0px 5px rgba(72, 203, 173, 1)" });
            $(this).removeAttr('id'); // remove all id

            $(this).css({ "border": "1px solid #48cfad" });
            $(this).attr('id', 'selected_img');

            $('#img_crop').removeClass('img_crop_notallow'); //img crop bt able
        } else {
            $(this).css({ "border": "1px solid #ffffff" });
            $(this).css({ "box-shadow": "none" });
            $('#img_crop').addClass('img_crop_notallow'); //img crop bt disable
        }
    });

    /////////////////////////////////////////////////////////
    //      img crop end
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      editor_upload_file start
    /////////////////////////////////////////////////////////

    $('#editor_upload_file').click(function () { //upload file window open
        $('#upload_file_input').click();
    });


    //ajax start
    $(function ()
    {
        $('#upload_file_input').change(function ()
        {
            upload_File_ajax();
        });
    });

    function upload_File_ajax()
    {
        var form = $("#editor_form")[0];
        var formData = new FormData(form);
        $.ajax
        ({
            url: "php/ajax/editor_fileupload.php",
            processData: false,
            contentType: false,
            data: formData,
            type: "POST",
            cache: false,
            success: function (args)
            {
                console.log('upload succece');
                //console.log(args); arg is uploaded file name
                $("#file_info_filename").text(args);
                alert(args.size);
                file_info_slidedown();
            },
            error: function (args)
            {
                console.log('upload fail');
                $('#editor_form').trigger("reset");
            },
        })
    }



    /////////////////////////////////////////////////////////
    //      editor_upload_file end
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      preview img start 
    /////////////////////////////////////////////////////////


    $('#editor_preview_upload').click(function () { //preview image window open
        $('#preview_upload_input').click();
    });

    $('#preview_upload_input').on('change', function (e) //preview image upload
    {
        var files = e.target.files;

        $.each(files, function (i, file) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {

                var template = '<li class="preview_img">' +
                               '<div id="contents_div" class="contents_div">' +
                               '<img src="' + e.target.result + '">' +
                               '<button type="button" class="con_delete_bt"><i class="fa fa-times"></i></button>' +
                               '</div>' +
                               '</li>'

                $('#editor_section ul').append(template);
            };
        });
    });
    /////////////////////////////////////////////////////////
    //      editor nav end
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      embed midea 
    /////////////////////////////////////////////////////////

    $('#embed_media').click(function () { // embed code window load
        $('.dark_overlay').stop().fadeIn(100);
        $('#embed_popup').stop().fadeIn(100);
    });


    $('.mic_next_bt').click(function () // embed code event
    {
        var embed_midea =
            '<li class="embed_contents">' +
            $('#embed_textarea').val() +
            '<button type="button" class="con_delete_bt"><i class="fa fa-times"></i></button>' +
            '</li>'

        $('#editor_preview_box').append(embed_midea);
        $('#embed_popup').hide();
        $('.dark_overlay').hide();
    });

    /////////////////////////////////////////////////////////
    //      embed midea 
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      add text 
    /////////////////////////////////////////////////////////

    $('#add_text').click(function () {
        var text_editor =
            '<li class="text_editor">' +
                    '<div id="text_contents_div" class="contents_div">' +
                        '<button type="button" class="con_delete_bt"><i class="fa fa-times"></i></button>' +
                        '<textarea class="editor_body_text" name="contents_article[]"></textarea>' +
                        '<div class="textarea_editor">' +
                            '<div class="select_box">' +
                                '<select class="basic">' +
                                    '<option value="14pt">14pt</option>' +
                                    '<option value="18pt">18pt</option>' +
                                    '<option value="24pt">24pt</option>' +
                                    '<option value="30pt">30pt</option>' +
                                    '<option value="36pt">36pt</option>' +
                                    '<option value="48pt">48pt</option>' +
                                    '<option value="60pt">60pt</option>' +
                                    '<option value="72pt">72pt</option>' +
                                '</select>' +
                            '</div>' +
                            '<button type="button" class="text_bold"><i class="fa fa-bold"></i></button>' +
                            '<button type="button" class="text_italic"><i class="fa fa-italic"></i></button>' +
                            '<button type="button" class="text_underline"><i class="fa fa-underline"></i></button>' +
                            '<button type="button" class="text_strike"><i class="fa fa-strikethrough"></i></button>' +
                            '<div class="color_picker">' +
                                '<div class="selected_color"></div>' +
                                '<ul><!--color list-->' +
                                    '<li class="colors">#fff</li><!--monotone-->' +
                                    '<li>#aaaaaa</li>' +
                                    '<li>#999999</li>' +
                                    '<li>#777777</li>' +
                                    '<li>#555555</li>' +
                                    '<li>#333333</li>' +
                                    '<li>#222222</li>' +
                                    '<li>#000000</li>' +

                                    '<li>#ffe8e8</li>' + '<!--red-->' +
                                    '<li>#fdc8c8</li>' +
                                    '<li>#fea3a3</li>' +
                                    '<li>#fe7a7a</li>' +
                                    '<li>#ff0000</li>' + '<!--middle-->' +
                                    '<li>#db0101</li>' +
                                    '<li>#b70202</li>' +
                                    '<li>#920000</li>' +

                                    '<li>#fff9e8</li>' + '<!--orange-->' +
                                    '<li>#fdefc8</li>' +
                                    '<li>#fee5a3</li>' +
                                    '<li>#feda7a</li>' +
                                    '<li>#ffba00</li>' + '<!--middle-->' +
                                    '<li>#dba001</li>' +
                                    '<li>#b78602</li>' +
                                    '<li>#926b00</li>' +

                                    '<li>#ffffe8</li>' + '<!--yellow-->' +
                                    '<li>#fdfdc8</li>' +
                                    '<li>#fefda3</li>' +
                                    '<li>#fefc7a</li>' +
                                    '<li>#ffff00</li>' + '<!--middle-->' +
                                    '<li>#dbd901</li>' +
                                    '<li>#b7b602</li>' +
                                    '<li>#818201</li>' +

                                    '<li>#efffe8</li>' + '<!--green-->' +
                                    '<li>#d9fdc8</li>' +
                                    '<li>#c2fea3</li>' +
                                    '<li>#a7fe7a</li>' +
                                    '<li>#00ff00</li>' + '<!--middle-->' +
                                    '<li>#4adb01</li>' +
                                    '<li>#3db702</li>' +
                                    '<li>#2b8402</li>' +

                                    '<li>#e8fffc</li>' + '<!--mint-->' +
                                    '<li>#c8fdf5</li>' +
                                    '<li>#a3feef</li>' +
                                    '<li>#7afee6</li>' +
                                    '<li>#00ffd5</li>' + '<!--middle-->' +
                                    '<li>#48cfad</li>' +
                                    '<li>#02b799</li>' +
                                    '<li>#00927d</li>' +

                                    '<li>#e8f8ff</li>' + '<!--sky blue-->' +
                                    '<li>#c8eefd</li>' +
                                    '<li>#a3e6fe</li>' +
                                    '<li>#7adcfe</li>' +
                                    '<li>#00baff</li>' + '<!--middle-->' +
                                    '<li>#01a1db</li>' +
                                    '<li>#0286b7</li>' +
                                    '<li>#006892</li>' +

                                    '<li>#e8ecff</li>' + '<!--blue-->' +
                                    '<li>#c8d4fd</li>' +
                                    '<li>#a3b9fe</li>' +
                                    '<li>#7a9cfe</li>' +
                                    '<li>#0000ff</li>' + '<!--middle-->' +
                                    '<li>#0136db</li>' +
                                    '<li>#022eb7</li>' +
                                    '<li>#002192</li>' +

                                    '<li>#f4e8ff</li>' + '<!--pupple-->' +
                                    '<li>#e4c8fd</li>' +
                                    '<li>#d0a3fe</li>' +
                                    '<li>#ba7afe</li>' +
                                    '<li>#8000ff</li>' + '<!--middle-->' +
                                    '<li>#6e01db</li>' +
                                    '<li>#5c02b7</li>' +
                                    '<li>#4c0092</li>' +
                                '</ul>' +
                            '</div>' +
                            '<button type="button" class="align_left"><i class="fa fa-align-left"></i></button>' +
                            '<button type="button" class="align_center"><i class="fa fa-align-center"></i></button>' +
                            '<button type="button" class="align_right"><i class="fa fa-align-right"></i></button>' +
                        '</div>' +
                    '</div>' +
                '</li>'

        $('#editor_preview_box').append(text_editor);
        $(".basic").selectOrDie(); //seleter load script
    });

    /////////////////////////////////////////////////////////
    //      add text end
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      text editor tools start
    /////////////////////////////////////////////////////////


    $(document).on('change', '.select_box', function () //change font size
    {
        $(this).parent('.textarea_editor').prev('.editor_body_text').css({ 'font-size': $(this).find('option:selected').text() });
    });

    $(document).on('click', '.text_bold', function () //change font weight
    {
        if ($(this).parent('.textarea_editor').prev('.editor_body_text').css("font-weight") == "400") {
            $(this).parent('.textarea_editor').prev('.editor_body_text').css({ 'font-weight': '600' });
        } else {
            $(this).parent('.textarea_editor').prev('.editor_body_text').css({ 'font-weight': '400' });
        }
    });

    $(document).on('click', '.text_italic', function () //change font italic
    {
        if ($(this).parent('.textarea_editor').prev('.editor_body_text').css('font-style') == 'normal') {
            $(this).parent('.textarea_editor').prev('.editor_body_text').css({ 'font-style': 'italic' });
        } else {
            $(this).parent('.textarea_editor').prev('.editor_body_text').css({ 'font-style': 'normal' });
        }
    });
    $(document).on('click', '.text_strike', function () //change font strike
    {
        if ($(this).parent('.textarea_editor').prev('.editor_body_text').css('text-decoration') == 'none' ||
            $(this).parent('.textarea_editor').prev('.editor_body_text').css('text-decoration') == 'underline') {
            $(this).parent('.textarea_editor').prev('.editor_body_text').css({ 'text-decoration': 'line-through' });
        } else {
            $(this).parent('.textarea_editor').prev('.editor_body_text').css({ 'text-decoration': 'none' });
        }
    });
    $(document).on('click', '.text_underline', function () //change font underline
    {
        if ($(this).parent('.textarea_editor').prev('.editor_body_text').css('text-decoration') == 'none' ||
            $(this).parent('.textarea_editor').prev('.editor_body_text').css('text-decoration') == 'line-through') {
            $(this).parent('.textarea_editor').prev('.editor_body_text').css({ 'text-decoration': 'underline' });
        } else {
            $(this).parent('.textarea_editor').prev('.editor_body_text').css({ 'text-decoration': 'none' });
        }
    });

    $(document).on('click', '.align_left', function () //change txt align left
    {
        $(this).parent('.textarea_editor').prev('.editor_body_text').css({ 'text-align': 'left' });
    });
    $(document).on('click', '.align_center', function () //change txt align center
    {
        $(this).parent('.textarea_editor').prev('.editor_body_text').css({ 'text-align': 'center' });
    });
    $(document).on('click', '.align_right', function () //change txt align right
    {
        $(this).parent('.textarea_editor').prev('.editor_body_text').css({ 'text-align': 'right' });
    });
    /////////////////////////////////////////////////////////
    //      text editor tools end
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      delete bt hover start
    /////////////////////////////////////////////////////////

    $(document).on('mouseenter', '.text_editor', function () // textarea delete bt hover
    {
        $(this).find('.con_delete_bt').stop().fadeIn(150);
        $(this).children('.contents_div').css({ "border": "1px solid #d1d1d1" });
    });
    $(document).on('mouseleave', '.text_editor', function () // textarea delete bt hover
    {
        $(this).find('.con_delete_bt').stop().fadeOut(150);
        $(this).children('.contents_div').css({ "border": "none" });
    });


    $(document).on('mouseenter', '.preview_img', function () // preview_img delete bt hover
    {
        $(this).find('.con_delete_bt').stop().fadeIn(150);
        $(this).children('.contents_div').css({ "border": "1px solid #d1d1d1" });
    });
    $(document).on('mouseleave', '.preview_img', function () // preview_img delete bt hover
    {
        $(this).find('.con_delete_bt').stop().fadeOut(150);
        $(this).children('.contents_div').css({ "border": "none" });
    });


    $(document).on('mouseenter', '.embed_contents', function () { // embed contents delete bt hover
        $(this).children('.con_delete_bt').stop().fadeIn(150);
        $(this).css({ "border": "1px solid #d1d1d1" });
    });
    $(document).on('mouseleave', '.embed_contents', function () { // embed contents delete bt hover
        $(this).children('.con_delete_bt').stop().fadeOut(150);
        $(this).css({ "border": "none" });
    });

    /////////////////////////////////////////////////////////
    //      delete bt hover end
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      contents delete btn start
    /////////////////////////////////////////////////////////

    $(document).on('click', '.con_delete_bt', function () //text area delete event
    {
        $(this).parents('.text_editor').fadeOut(200, function () { $(this).remove(); });
        $(this).parents('.embed_contents').fadeOut(200, function () { $(this).remove(); });
        $(this).parents('.preview_img').fadeOut(200, function () { $(this).remove(); });
    });

    /////////////////////////////////////////////////////////
    //      contents delete btn end
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      text color picker start
    /////////////////////////////////////////////////////////
    $(document).on('focus', '.editor_body_text', function () // text editor focus view
    {
        $(this).next('.textarea_editor').stop().fadeIn(200);
        $(this).parent(".contents_div").css("background","rgba(255,255,255,0.1)");
    });
    $(document).on("blur",".editor_body_text", function(){
        $(this).next(".textarea_editor").stop().fadeOut(200);
        $(this).parent(".contents_div").css("background","none");
    })

    $(document).on('click', '.color_picker > ul > li', function () //change text color change
    {
        $(this).parents('.textarea_editor').prev('.editor_body_text').css({ "color": $(this).text() });
        $(this).parent('ul').prev('.selected_color').css({ "background": $(this).text() });
        $(this).parent('ul').hide();
    });

    $(document).ready(function () { //outside click toggle
        $(document).click(function (e) {
            var subject = $(".text_editor");

            if (e.target.id != subject.attr('id') && !subject.has(e.target).length) {
                $('.textarea_editor').stop().fadeOut(200);
            }
        });
    });

    $(document).on('click', '.selected_color', function () //color picker toggle
    {
        $(this).next('ul').toggle();
    });

    $(document).on('click', '.color_picker', function () // color picker palete making
    {
        $('.color_picker > ul > li').each(function () {
            $(this).css("background", $(this).text());
        });
    });
    /////////////////////////////////////////////////////////
    //      text color picker end
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      text editor tools end
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      editor next contents call ajax start
    /////////////////////////////////////////////////////////
    $(document).on('click', '.next_bt', function () {
        var check_id = $(this).attr('id');
        //console.log(check_id);

        editor_gnv_select(check_id);

        $.ajax({
            type: "POST",
            url: "php/ajax/editor_ajax.php",
            data: "check_id=" + check_id,
            cache: false,
            success: function (data) {
                /* call php data */
                $('#next_pop_body').html('').append(data).fadeIn(300).css('display', 'inline-block');

                /* remove contents card event */
                $('#tnail_preview ul li .load_view').removeClass('load_view');
                $('#tnail_preview ul li a').removeAttr('href');

                /* js align center */
                $('#next_pop_body').css('marginLeft', function () {
                    return $(this).width() / -2;//set width
                });

                /* select box call function */
                $(".basic_filter").selectOrDie
                ({
                    customClass: "custom",
                    customID: "custom",
                    size: 5
                });
                $('.dark_overlay').fadeIn(300);

                /* change card title to user type text */
                $(".contents_title").text($("#editor_content_name").val());

            }
        });
    });

    $('.dark_overlay').click(function () {
        $('.dark_overlay').stop().fadeOut(300);
        $('#next_pop_body').stop().fadeOut(300).html('');
        editor_gnv_select("edit");
    });
    $(document).on('click', '.cancel_bt, .editor_popup_cancel', function () {
        $('.dark_overlay').stop().fadeOut(300);
        $('#next_pop_body').stop().fadeOut(300).html('');
        editor_gnv_select("edit");
    })
    $(document).on("click","#back_bt_editor", function(){
        //please add function for go back(ajax);
    });

    /////////////////////////////////////////////////////////
    //      editor next contents call ajax end
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    //      editor change thumbnail start
    /////////////////////////////////////////////////////////
    $(function ()
    {
        $(document).on('click', '#change_img_bt', function () {
            $('#change_img_real').click();
        });
        $(document).on('change', '#change_img_real', function ()
        {
            uploadFile();
        });
    });

    function uploadFile()
    {
        $('#work_inbody').html("Sending... Please wait...");
        var form = $("form")[0];
        var formData = new FormData(form);
        $.ajax(
        {
            url: "php/ajax/upload_img.php",
            processData: false,
            contentType: false,
            data: formData,
            type: "POST",
            cache: false,
            success: function (args)
            {
                $('#work_inbody').html("<img src='./php/ajax/upload/" + args + "'/>");
                $('#form1').trigger("reset");
            },
            error: function (args)
            {
                $('#work_inbody').html("File upload failed.");
                $('#work_inbody').append("!!!");
                $('#form1').trigger("reset");
            },
        })
    }
    /////////////////////////////////////////////////////////
    //      editor change thumbnail start
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    //      editor edit price start
    /////////////////////////////////////////////////////////
    $(function(){
        var price_name=$('#price_editor').find('.sod_label');
        var price_list=$('#price_editor').find('.sod_label').text();//correct
        
        price_name.on('change',function(){
            console.log(price_list);
            if(price_list=='Paid'){
                $('#price_input').removeAttr('disabled');
            }
            else{
                $('#price_input').attr('disabled','disabled');
            }
        });
    });
    /////////////////////////////////////////////////////////
    //      editor edit price end
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    //      editor edit body color picker start
    /////////////////////////////////////////////////////////
    $(document).ready(function(){
        $(function(){
            $("#body_color_picker").spectrum({
                color:"#ffffff",
                preferredFormat: "rgb",
                move: function(color){
                    var editor_body = $("#editor_preview_box");
                    editor_body.css("background",color.toRgbString());
                },
                change: function(color){
                    var editor_body = $("#editor_preview_box");
                    editor_body.css("background",color.toRgbString());
                }
            });
        });
    })
    /////////////////////////////////////////////////////////
    //      editor edit body color picker end
    /////////////////////////////////////////////////////////



});
/*----------------------------editor end----------------------------*/