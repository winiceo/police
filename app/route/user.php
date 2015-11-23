<?php
/**
 * Created by PhpStorm.
 * User: leven
 * Date: 15/7/7
 * Time: 下午7:58
 */
/**
 * @apiDefine member User access only
 * 登录后的用户可以操作.
 */

include_once ROOT . '/app/lib/pmkoo.php';
include_once ROOT . '/app/route/func.php';

use Carbon\Carbon;

/**
 * @api {post} /user/login 用户登录
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {String} username 用户登录名.
 * @apiParam {String} password 用户密码.
 *
 * @apiSuccess {String} err_code  状态码0为成功.
 * @apiSuccess {String} err_msg 信息提示.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 * "err_code": 0,
 * "err_msg": "success",
 * "data": {
 * "token": {
 * "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0NDU5MTgyOTksImp0aSI6ImJFR2Z1ak5Bckp4QXl2UHdPSVFaekV2eEtYT2hrRlwvT1VcL1hzTUlsRXhUdz0iLCJpc3MiOiJwbWtvb19zZWxsZXIiLCJleHAiOjE0NDU5MjU0OTksImRhdGEiOnsiaWQiOiIxIiwibmFtZSI6ImFkbWluIn19.NtZxwC9WoDdnGVjboC1O3RJCcAMsj0D5G3A1vxL0RMMEiSwKC3jPLRMaByCXd9xm6IJw8BH0GLkVnWGvW5_aWA"
 * },
 * "user": {
 * "id": "1",
 * "username": "admin",
 * "email": "admin@71an.com"
 * }
 * }
 * }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 * {
 * "err_code": 1,
 * "err_msg": "登录失败"
 * }
 * @apiSampleRequest /v1/user/login
 */

$app->map(['GET', 'POST'], '/login', function ($request, $response, $args) {

    $username = $this->request->getParam('username');
    $password = $this->request->getParam('password');

    $tokenId = base64_encode(mcrypt_create_iv(32));

    $issuedAt = time();
    $notBefore = $issuedAt + 3600;             //Adding 10 seconds
    $expire = $notBefore + 3600*24*7;            // Adding 60 seconds
    $serverName = C('server_name'); // Retrieve the server name from config file

    $res = array();
    $where = sprintf("`username`='%s' and `password`='%s'", $username, md5($password));


    $user = \ORM::for_table('users')->where_raw($where)->find_one();

    if ($user) {


        $data = [
            'iat' => $issuedAt,         // Issued at: time when the token was generated
            'jti' => $tokenId,          // Json Token Id: an unique identifier for the token
            'iss' => $serverName,       // Issuer
            // 'nbf'  => $notBefore,        // Not before
            'exp' => $expire,           // Expire
            'data' => [                  // Data related to the signer user
                'id' => $user->id,
                'name' => $user->username,
                'level'=>$user->level,
                

            ]
        ];

        $secretKey = base64_decode(C('jwtKey'));


        $jwt = JWT::encode(
            $data,      //Data to be encoded in the JWT
            $secretKey, // The signing key
            'HS512'     // Algorithm used to sign the token, see https://tools.ietf.org/html/draft-ietf-jose-json-web-algorithms-40#section-3
        );

        $unencodedArray = ['jwt' => $jwt];


        //$wh_user=\ORM::for_table('wechat_user')->where('seller_id',$seller->id)->find_one();

        // if($wh_user){
        $res['err_code'] = 0;
        $res['err_msg'] = "success";
        $res['data'] = array(
            "token" => ($unencodedArray),
            "user" => $user->as_array()
        );
//        }else{
//            $res['err_code']=0;
//            $res['err_msg']="success";
//            $res['data']=array(
//                "sid"=>0,
//                "user"=>$seller->as_array()
//            );
//        }


    } else {
        $res['err_code'] = 1;
        $res['err_msg'] = "登录失败";
    }

    echo json_encode($res);


});


/**
 * @api {get} /user/info 获取用户信息
 * @apiName userinfo
 * @apiGroup User
 *
 * @apiHeader {String} Authorization 请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.
 *
 * @apiSuccess {String} err_code  状态码0为成功.
 * @apiSuccess {String} err_msg 信息提示.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 * "err_code": 0,
 * "err_msg": "success",
 * "data": {
 * "id": "1",
 * "username": "admin",
 * "email": "admin@71an.com"
 * }
 * }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 * @apiSampleRequest /v1/user/info
 */
$app->map(['GET', 'POST', 'OPTIONS'], '/info', function ($request, $response, $args) {
    $data = check($this->request);

    if ($data) {
        $user_id = $data->id;

        $where = sprintf("`id`='%s' ", $user_id);

        $seller = \ORM::for_table('users')->where_raw($where)->find_one();
        if ($seller) {
            $res['err_code'] = 0;
            $res['err_msg'] = "success";
            $res['data'] = $seller->as_array();

        } else {
            $res['err_code'] = 1;
            $res['err_msg'] = "登录失败";
        }
    } else {
        $res['err_code'] = 1;
        $res['err_msg'] = "获取信息失败,或登录信息已过期,请重新登录";
    }
    echo json_encode($res);
});



/**
 * @apiDescription 每天每用户只能签到一次，签到过的不能再签到
 * @apiPermission member
 * @api {get} /user/sign_in 用户签到
 * @apiName sign
 * @apiGroup User
 *
 * @apiHeader {String} Authorization 请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.
 *
 * @apiSuccess {String} err_code  状态码0为成功.
 * @apiSuccess {String} err_msg 信息提示.
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 * @apiSampleRequest /v1/user/sign_in
 */
$app->map(['GET', 'POST'], '/sign_in', function ($request, $response, $args) {
    $data = check($this->request);
    $user_id = $data->id;
    $res = array();

    $signed = user_is_sign($user_id);


    if ($signed) {
        $res['err_code'] = 1;
        $res['err_msg'] = "今天已经签到了";

    } else {
        $res = user_sign($user_id);

    }

    echo json_encode($res);
});

/**
 * @apiDescription 每天每用户只能签退一次，签到过的不能再签退
 * @apiPermission member
 * @api {get} /user/sign_out 用户签退
 * @apiName sign_out
 * @apiGroup User
 *
 * @apiHeader {String} Authorization 请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.

 *
 * @apiSuccess {String} err_code  状态码0为成功.
 * @apiSuccess {String} err_msg 信息提示.


 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found

 * @apiSampleRequest /v1/user/sign_out
 */
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



/**
 * @apiDescription 我的签到
 * @apiPermission member
 * @api {post} /user/my_sign 我的签到
 * @apiName mySign
 * @apiGroup User


 * @apiParam {Datetime} start_time 开始日期.
 * @apiParam {Datetime} end_time 结束日期.
 *
 * @apiHeader {String} Authorization 请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.

 *
 * @apiSuccess {String} err_code  状态码0为成功.
 * @apiSuccess {String} err_msg 信息提示.


 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found

 * @apiSampleRequest /v1/user/my_sign
 */
$app->map(['GET', 'POST'], '/my_sign', function ($request, $response, $args) {
    $res=array();
    $data = check($this->request);
    $me =$data->id;
    $start_time= $this->request->getParam('start_time');
    $end_time = $this->request->getParam('end_time');

    $sign_data=getMySign($me,$start_time,$end_time);
    $res['err_code'] = 0;
    $res['err_msg'] = "";

    $res['data'] = $sign_data;
    echo json_encode($res);

});


/**
 * @apiDescription 我的考勤统计
 * @apiPermission member
 * @api {post} /user/my_statistics 我的考勤统计
 * @apiName Statistics
 * @apiGroup User


 * @apiParam {Datetime} start_time 开始日期.
 * @apiParam {Datetime} end_time 结束日期.
 *
 * @apiHeader {String} Authorization 请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.


 * @apiSampleRequest /v1/user/my_statistics
 */
$app->map(['GET', 'POST'], '/my_statistics', function ($request, $response, $args) {
    $res=array();
    $data = check($this->request);
    $me =$data->id;
    $start_time= $this->request->getParam('start_time');
    $end_time = $this->request->getParam('end_time');

    $data=getMySign($me,$start_time,$end_time);
    $data['leave']=getMyEvents($me,$start_time,$end_time,1);
    $data['travel']=getMyEvents($me,$start_time,$end_time,2);


    $res['err_code'] = 0;
    $res['err_msg'] = "";

    $res['data'] = $data;
    echo json_encode($res);

});

