<?php
$temp = decbin(31);
echo $temp[0];
echo "<br />";
echo str_pad($temp, 20, "0", STR_PAD_LEFT);
?>