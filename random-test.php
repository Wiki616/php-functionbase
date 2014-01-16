<?php
header("Content-type: image/png");
$width=1200;
$height=700;

function make_seed()
{
  list($usec, $sec) = explode(' ', microtime());
  return (float) $sec + ((float) $usec * 100000);
}

srand(make_seed());

//记录开始时间
$mtime = microtime();
$mtime = explode(" ",$mtime);
$mtime = $mtime[1] + $mtime[0];
$starttime = $mtime;

//创建图像
$img = @imagecreate($width, $height) or die("创建图像资源失败");

//图片背景颜色
$bg = imagecolorallocate($img, 255, 255, 255);

//设置默认颜色
$color1 = imagecolorallocate($img, 0, 0, 0);//black

$color2 = imagecolorallocate($img, 255, 255, 255);//white

$color3 = imagecolorallocate($img, 255, 0, 0);//red

$color4 = imagecolorallocate($img, 0, 255, 0);//green

$color5 = imagecolorallocate($img, 0, 0, 255);//blue

$i=0;

//随机生成点
while ($i <= 840000) {
	$x = rand(0,$width);
	$y = rand(0,$height);
	if (imagecolorat($img, $x, $y) == $color1){
		//imagesetpixel($img, $x, $y, $color2);//如果该处有黑色的点
	}else{
		imagesetpixel($img, $x, $y, $color1);//如果没有黑色的点
	}
	$i++;
}


//文字颜色
$text_color = imagecolorallocate($img, 0, 0, 255);


//获得结束时间
$mtime = microtime();
$mtime = explode(" ",$mtime);
$mtime = $mtime[1] + $mtime[0];
$endtime = $mtime;

//输出运行时间
$gentime = round(($endtime - $starttime), 4);
imagestring($img, 20, 0, 0, $gentime, $text_color);

//以PNG格式输出图像
imagepng($img);

//销毁图像资源
imagedestroy($img);
?>
