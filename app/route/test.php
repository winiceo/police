<?php
/**
 * Created by PhpStorm.
 * User: leven
 * Date: 15/7/7
 * Time: 下午7:58
 */

////namespace LaneWeChat;
//
//use LaneWeChat\Core\Wechat;
//use LaneWeChat\Core\WeChatOAuth;
//use LaneWeChat\Core\UserManage;
//
////引入配置文件
//include_once __DIR__ . '/../../LaneWeChat/config.php';
////引入自动载入函数
//include_once __DIR__ . '/../../LaneWeChat/autoloader.php';
////调用自动载入函数
//AutoLoader::register();

include_once ROOT . '/app/lib/pmkoo.php';
include_once ROOT . '/app/route/func.php';
ignore_user_abort(TRUE);
set_time_limit(0);
header('Content-Type: text/html; charset=UTF-8');
header("Access-Control-Allow-Origin:*");
use Carbon\Carbon;

$app->map(['GET', 'POST'], '/sign_out', function ($request, $response, $args) {
    $res=array();
    $data = check($this->request);

    $user_id =$data->id;
    $signed=user_is_sign($user_id);
    //签到成功可以签退
    if($signed){
        $sign_outed=user_is_sign($user_id,2);
        if($sign_outed){
            $res['err_code'] = 1;
            $res['err_msg'] = "已经签退，不能重复签退";
        }else{
            $res=user_sign($user_id,2);
        }

    }else{
        $res['err_code'] = 1;
        $res['err_msg'] = "没有签到，不能签退";
    }

    echo json_encode($res);
});

$app->map(['GET', 'POST'], '/test', function ($request, $response, $args) {
    $res=user_sign(1);
    dump($res);
});
