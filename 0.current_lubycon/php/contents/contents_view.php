<script type="text/javascript" src="js/call_comments.js"></script> <!-- account file js -->

<?php
include('../contents_data/contents_data.php');

$number = $_GET["4"];
$current_url = $_GET["3"];
$contents_img_url = "../contents_data/".$current_url."jpg/".$number.".jpg";
$user_img_url = "../contents_data/".$current_url."jpg/profile/".$number.".jpg";
$price = 'Free';

$userjob = "Job";
$usercity = "City";
$usercountry = "Country";

$file_descript = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

$file_view = rand(1, 300);
$file_down = rand(1, 100);
$file_like = rand(1, 30);

switch($current_url)
{
case "artwork" : $current_url = "artwork"; $contents_name = $artwork_subject; $contents_author = $artwork_author; break;
case "vector" : $current_url = "vector"; $contents_name = $vector_subject; $contents_author = $vector_author; break;
case "3d" : $current_url = "3d"; break;
default : $current_url = "artwork"; $contents_name = $artwork_subject;$contents_author = $artwork_author; break;
};
?>

<div class="main_figure_wrap hidden-mb-b">
    <figure id="main_figure">
        <div class="dark_overlay_small"></div>
        <h2>CONTENTS</h2>
    </figure>   <!-- end main_figure -->
</div>
<link href="css/contents_view.css" rel="stylesheet" type="text/css" /><!-- contents view css -->
<section id="contents">
    <section id="navsel" class="hidden-mb-b">
        <nav id="lnb_nav">
            <ul>
                <li class="nav_menu" id="all">
                    <a href="./index.php?1=contents&2=contents_page&3=all">All</a>
                </li>
                <li class="nav_menu" id="artwork">
                    <a href="./index.php?1=contents&2=contents_page&3=artwork">Artwork</a>
                </li>
                <li class="nav_menu" id="vector">
                    <a href="./index.php?1=contents&2=contents_page&3=vector">Vector</a>
                </li>
                <li class="nav_menu" id="3d"> 
                    <a href="./index.php?1=contents&2=contents_page&3=3d">3D</a>
                </li>
            </ul>
        </nav>  <!-- end lnb nav -->
    </section>  <!-- end section -->
    <section class="nav_guide" id="contents_info_wrap">
        <div class="subnav_box">
            <span id="contents_subject">
                <h3 id="contents_title"><?=$contents_name[$number]?></h3>
                <h4 id="contents_price"><?=$price?></h4>
            </span>
            
            <div class="contents_bt">
                <span class="global_icon"><i class="fa fa-usd"></i></span>
                <span class="subnav_selected">All</span>
                <span class="subnav_arrow"><i class="fa fa-caret-down"></i></span>
                <ul class="subnav_list">
                    <li class="selected_li">All</li>
                    <li>Free</li>
                    <li>Free for personal</li>
                    <li>Paid</li>
                </ul>
            </div><!--pay selector end-->

            <div id="sub_search_bar">
                <div class="select_box">
                    <select class="basic">
                        <option value="Title">Title</option>
                        <option value="Designer">Designer</option>
                        <option value="Tag">Tag</option>
                    </select>
                <span class="subnav_arrow"><i class="fa fa-caret-down"></i></span>
                </div>
                <input type="text" id="sub_search_text" value="Enter the Keyword" />
                <button id="sub_search_btn">
                    <i class="fa fa-search"></i>
                </button>
            </div>
            <div id="sharing_bt_box">
                <button class="share_sns share_face">
                    <i class="fa fa-facebook"></i>
                </button>
                <button class="share_sns share_twit">
                    <i class="fa fa-twitter"></i>
                </button>
            </div>
        </div><!--subnav_box end-->
    </section>

    <section id="contents_box">
        <section class="contents_view">
            <div class="con_wrap">
                <div id="contents_main" class="con_main">
                    <div id="floating_bt">
                        <div id="bookmark_bt" class="lubyAlert_bt"><i id="bookmark_inner_bt" class="fa fa-star"></i></div>
                        <div id="like_bt" class="like_bt lubyAlert_bt"><i class="fa fa-heart"></i></div>
                    </div>
                    <?php 
                        $current_url = $_GET["3"];
                        if($current_url=="3d"){
                            echo 
                            "<iframe id='webgl_viewer' name='webgl' src='webGL/file_viewer/viewer.html' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' style='margin-bottom:-5px'>
                   </iframe>";
                        }
                        else{
                            echo '<figure class="contents_img"><img class="inner_img" src="'.$contents_img_url.'" /></figure>';
                        };
                    ?>
                    
                    <article id="comment_box">
                        <div id="comment_writer">
                            <div id="comment_text_box">
                                <figure id="comment_my_pic" class="hidden-mb-ib">
                                    <img src="ch/img/no_img/no_img_user1.jpg" class="hidden-mb-ib">
                                </figure>
                                <textarea id="comment_text"></textarea>
                                <button id="comment_bt">
                                    <i class="fa fa-comments"></i>
                                </button>
                            </div>
                        </div>
                        <div id="comment_list">
                            <p id="comment_count"><span id="comment_counter">10</span> Comments</p>
                            <?php
                                for($i=1; $i<=10; $i++){
                                    include("php/layout/comment.php");
                                };
                            ?>
                        </div><!--end comment_list-->
                        <div id="comment_more_box">
                            <button id="comment_more_bt"><i class="fa fa-angle-down"></i></button>
                        </div>
                    </article>
                </div><!--end con_main-->

                <div id="contents_aside" class="con_aside">
                    <div class="designer_info">
                        <figure id="user_img">
                            <img src="<?=$user_img_url?>">
                        </figure>
                        <h4><?=$contents_author[$number]?></h4>
                        <h5><i class="fa fa-map-marker"></i><?=$usercity?>, <?=$usercountry?></h5>
                    </div>
                    <button id="content_down" class="hidden-mb-b"><i class="fa fa-download"></i></button>
                    <div id="file_info">
                        <header id="info_header">File info<i class="fa fa-angle-down" id="info_toggle"></i></header>
                        <section id="files">
                            <article id="file_name"><i class="fa fa-chevron-circle-down"></i>
                                <p><i class="fa fa-folder"></i>Lorem ipsum.zip</p>
                            </article>
                            <ul>
                                <li><i class="fa fa-file"></i>ipsum.psd</li>
                                <li><i class="fa fa-file"></i>ipsum.ai</li>
                                <li><i class="fa fa-file"></i>ipsum.html</li>
                                <li><i class="fa fa-file"></i>ipsum.css</li>
                                <li><i class="fa fa-circle"></i><i class="fa fa-file"></i>ipsum.js</li>
                            </ul>
                        </section>
                        <footer id="storage">
                            <p>1.2 MB</p>
                        </footer>
                    </div>

                    <div id="contents_score">
                        <ul>
                            <li><i class="fa fa-eye"></i></li>
                            <li class="hidden-mb-ib">Views</li>
                            <li class="contents_view_score"><?=$file_view?></li>
                        </ul>
                        <ul>
                            <li><i class="fa fa-cloud-download"></i></li>
                            <li class="hidden-mb-ib">Downloads</li>
                            <li class="contents_view_score"><?=$file_down?></li>
                        </ul>
                        <ul>
                            <li><i class="fa fa-heart"></i></li>
                            <li class="hidden-mb-ib">Likes</li>
                            <li class="contents_view_score"><?=$file_like?></li>
                        </ul>
                    </div>
                    <div id="tag_wrap" class="hidden-mb-b">
                        <p id="tag_title"><i class="fa fa-tag"></i>Tags</p>
                        <div id="tagbox_wrap">
                            <ul id="tagbox_wrap_inner">
                                <li class="tagbox">#lorem</li>
                                <li class="tagbox">#lorem</li>
                                <li class="tagbox">#lorem</li>
                                <li class="tagbox">#lorem</li>
                                <li class="tagbox">#lorem</li>
                            </ul>                       
                        </div>
                    </div>
                    <div id="file_descript" class="hidden-mb-b">
                        <p id="view_descript">ABOUT THIS CONTENT</p>
                        <div id="descript_box">
                            <p><?=$file_descript?></p>
                        </div>
                    </div>
                </div><!--end con_aside-->
            </div><!--end content_box_total-->
        </section><!--end content_view-->
    </section>  <!-- end contents box -->
</section>  <!-- end contents section -->
