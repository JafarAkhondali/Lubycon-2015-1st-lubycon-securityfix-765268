<figure id="main_figure">
    <h2>CONTENTS</h2>
</figure>	<!-- end main_figure -->
<link href="css/contents_page.css" rel="stylesheet" type="text/css" />  <!-- contents page css -->
<section id="contents">
    <section id="navsel">
        <nav id="lnb_nav">
            <ul>
                <li class="all" >
                    <a href="./index.php?1=contents&2=contents_page&3=all">All</a>
                </li>
                <li class="raster">
                    <a href="./index.php?1=contents&2=contents_page&3=raster">Raster</a>
                </li>
                <li class="vector">
                    <a href="./index.php?1=contents&2=contents_page&3=vector">Vector</a>
                </li>
                <li class="3d"> 
                    <a href="./index.php?1=contents&2=contents_page&3=3d">3D</a>
                </li>
            </ul>
        </nav>  <!-- end lnb nav -->
    </section>  <!-- end section -->

    <section id="nav_guide">
        <div class="subnav_box">
            <div class="contents_bt" id="category_bt">
                <span class="global_icon"><i class="fa fa-filter"></i></span>
                <span class="subnav_selected">All categories</span>
                <span class="subnav_arrow"><i class="fa fa-caret-down"></i></span>
                <ul class="subnav_list" id="category_list">
                    <li class="selected_li">All categories</li>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                    <li>D</li>
                    <li>E</li>
                    <li>F</li>
                    <li>G</li>
                    <li>H</li>
                    <li>I</li>
                    <li>J</li>
                    <li>K</li>
                    <li>L</li>
                </ul>
            </div><!--category end-->
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
            <div class="contents_bt">
                <span class="global_icon"><i class="fa fa-filter"></i></span>
                <span class="subnav_selected">Featured</span>
                <span class="subnav_arrow"><i class="fa fa-caret-down"></i></span>
                <ul class="subnav_list">
                    <li class="selected_li">Featured</li>
                    <li>Recent</li>
                    <li>Most Like</li>
                    <li>Most Download</li>
                    <li>Most Comment</li>
                </ul>
            </div>
        </div><!--subnav_box end-->
    </section>
    <section id="contents_box">
        <ul>
            <?php
            for($i=0;$i<30;$i++)
            {
                include('php/layout/content_card.php');
            }
            ?>
        </ul>
    </section>  <!-- end contents box -->
    <?php
        include_once('php/layout/pager.php');
    ?>
</section>  <!-- end contents section -->
