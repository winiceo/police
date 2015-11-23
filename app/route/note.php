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
 * @api {post} /note/create 添加个人日志
 * @apiDescription 添加个人日志
 * @apiName createDep
 * @apiGroup Note
 * @apiHeader {String} Authorization 请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.

 * @apiParam {Datetime} add_time 日期.
 * @apiParam {String} content 内容.
 * @apiParam {String} attach 附件.
 * @apiParam {String} over_work 加班说明.
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
 * @apiSampleRequest /v1/note/create
 */

$app->map(['POST'], '/create', function ($request, $response, $args) {

    $res = array();
    $data = check($this->request);
    $user_id = $data->id;
    $add_time =trim($this->request->getParam('add_time'));
    $content =trim($this->request->getParam('content'));
    $attach =trim($this->request->getParam('attach'));
    $over_work =trim($this->request->getParam('over_work'));


    $plan = \ORM::for_table('users_notes')->create();
    $plan->add_time = $add_time;
    $plan->create_time = \Carbon\Carbon::now()->toDateTimeString() ;
    $plan->user_id = $user_id;
    $plan->content = $content;
    $plan->attach = $attach;
    $plan->over_work = $over_work;
    $plan->save();
    $res['err_code'] = 0;
    $res['err_msg'] = "保存成功";
    echo json_encode($res);

});


/**
 * @api {post} /note/update 更新个人日志
 * @apiDescription 更新个人日志
 * @apiName updateNote
 * @apiGroup Note
 * @apiHeader {String} Authorization 请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.

 * @apiParam {Int} id 记录id.
 * @apiParam {Datetime} add_time 日期.
 * @apiParam {String} content 内容.
 * @apiParam {String} attach 附件.
 * @apiParam {String} over_work 加班说明.
 * @apiSampleRequest /v1/note/update
 */
$app->map(['POST'], '/update', function ($request, $response, $args) {

    $res = array();
    $data = check($this->request);
    $user_id = $data->id;
    $id = $this->request->getParam('id');

    $add_time =trim($this->request->getParam('create_time'));
    $content =trim($this->request->getParam('content'));
    $attach =trim($this->request->getParam('attach'));
    $over_work =trim($this->request->getParam('over_work'));



    $plan = \ORM::for_table('users_notes')->find_one($id);
    if($plan){
        $plan->user_id = $user_id;
        $plan->add_time = $add_time;
        $plan->content = $content;
        $plan->attach = $attach;
        $plan->over_work = $over_work;

        $plan->save();
        $res['err_code'] = 0;
        $res['err_msg'] = "保存成功";
    }else{
        $res['err_code'] = 1;
        $res['err_msg'] = "记录不存在";
    }

    echo json_encode($res);

});



/**
 * @api {post} /note/delete 删除个人日志
 * @apiDescription 删除个人日志
 * @apiName deleteNote
 * @apiGroup Note
 * @apiHeader {String} Authorization 请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.

 *@apiParam {Int} id 记录id.

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
 * @apiSampleRequest /v1/note/delete
 */
$app->map(['POST','DELETE'], '/delete', function ($request, $response, $args) {

    $res = array();
    $data = check($this->request);

    $user_id = $data->id;
    $id = $this->request->getParam('id');


    $plan = \ORM::for_table('users_notes')->where_equal("user_id",$user_id)->find_one($id);

    if($plan){
        $plan->delete();
        $res['err_code'] = 0;
        $res['err_msg'] = "删除成功";
    }else{
        $res['err_code'] = 1;
        $res['err_msg'] = "删除失败，记录不存在";
    }


    echo json_encode($res);

});



/**
 * @api {post} /note/search 个人日志列表
 * @apiDescription 个人日志列表
 * @apiName listNote
 * @apiGroup Note

 * @apiHeader {String} Authorization 请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.
 * @apiParam {Datetime} star_time 时间段：开始日期.
 * @apiParam {Datetime} end_time 时间段：结束日期.
 * @apiSampleRequest /v1/note/search
 */
$app->map(['GET','POST'], '/search', function ($request, $response, $args) {


    $res = array();
    $data = check($this->request);

    $meid = $data->id;
    $page = $this->request->getParam('page');
    if(!$page){
        $page=1;
    }
    $pageSize=10;
    $user_id = $this->request->getParam('user_id');
    $star = $this->request->getParam('star_time');
    $end = $this->request->getParam('end_time');

    $plan = \ORM::for_table('users_notes');
    if ($user_id>0) {
        $plan->where_raw(sprintf("`user_id`='%s'",$user_id));

    };

    if($star){
        $plan->where_raw("DATE_FORMAT(add_time,'%Y-%m-%d')>='".$star."'");
    }
    if($end){
        $plan->where_raw("DATE_FORMAT(add_time,'%Y-%m-%d')<='".$end."'");
    }
    $count=rand(1, @ceil($plan->count() / $pageSize));

    $data=$plan->limit($pageSize)->offset(($page-1)*$pageSize)
        ->order_by_desc('id')->find_array();

    $res['err_code'] = 0;
    $res['err_msg'] = "";
    $res['data']=array('list'=>$data,'total'=>$count);
    echo json_encode($res);


});