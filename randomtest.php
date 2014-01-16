<?php
header("Content-type: image/png");
$width=1200;
$height=700;

$mtime = microtime();
$mtime = explode(" ",$mtime);
$mtime = $mtime[1] + $mtime[0];
$starttime = $mtime;

//创建图像
$img = @imagecreate($width, $height) or die("创建图像资源失败");

//图片背景颜色
$bg = imagecolorallocate($img, 255, 255, 255);

$color1 = imagecolorallocate($img, 0, 0, 0);

$color2 = imagecolorallocate($img, 255, 255, 255);

$color3 = imagecolorallocate($img, 255, 0, 0);

$color4 = imagecolorallocate($img, 0, 255, 0);

$color5 = imagecolorallocate($img, 0, 0, 255);

$i=0;

while ($i <= 1680000) {
	$x = rand(0,$width);
	$y = rand(0,$height);
	//$x = rand(0,500);
	//$y = rand(0,500);
	if (imagecolorat($img, $x, $y) == $color1){
		//imagesetpixel($img, $x, $y, $color2);
	}else{
		imagesetpixel($img, $x, $y, $color1);
	}
	$i++;
}


//文字颜色
$text_color = imagecolorallocate($img, 0, 0, 255);

$mtime = microtime();
$mtime = explode(" ",$mtime);
$mtime = $mtime[1] + $mtime[0];
$endtime = $mtime;


$gentime = round(($endtime - $starttime), 4);

//水平画一行字，要输出中文等需要 TTF 字体支持的请使用 magettftext() 函数
imagestring($img, 20, 0, 0, $gentime, $text_color);

//以PNG格式输出图像
imagepng($img);

//销毁图像资源
imagedestroy($img);
?>
