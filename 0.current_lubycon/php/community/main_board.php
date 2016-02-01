<section id="main_board">
    <?php
        $current_url = $_GET["3"];
    ?>
    <div class="table_wrap">
        <div class="table_head">
            <div class="board_name">
                <?php
                    switch($current_url){
                        case "forum" : echo "Forum"; break;
                        case "tutorial" : echo "Tutorial"; break;
                        case "qna" : echo "Q & A"; break;
                        default : return false; break;
                    }
                ?>
            </div>
            <div class="table_head_wrap">                              
                <span class="table_date hidden-mb-ib">Date</span>
                <span class="table_view hidden-mb-ib"><i class="fa fa-eye"></i></span> <!-- eye icon -->
                <span class="table_like hidden-mb-ib"><i class="fa fa-heart"></i></span>    <!-- heart icon -->
            </div>
        </div>
        <div class="table_body">
            
            <ul class="table_list_wrap">
            <?php
            for($i=0;$i<30;$i++)
            {
                $third_param = $_GET['3'];
                $_GET["number"] = $i;
                include('php/layout/community_card.php');
            }
            ?>
            </ul>
        </div>
    </div>
</section>