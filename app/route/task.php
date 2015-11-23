<?php
/**
 * Created by PhpStorm.
 * User: leven
 * Date: 15/7/7
 * Time: 下午7:58
 */
/**
 * @apiDefine member User access only
 * 任务管理
 */

include_once ROOT . '/app/lib/pmkoo.php';
include_once ROOT . '/app/route/func.php';

use Carbon\Carbon;

/**
 * @api {get} /task/get_users 下拉菜单获取用户
 * @apiDescription 获取待考核的下属用户名单
 * @apiName getUsers
 * @apiGroup Task
 * @apiHeader {String} Authorization 请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.
 * @apiSampleRequest /v1/task/get_users
 */
$app->map(['GET'], '/get_users', function ($request, $response, $args) {

    $res = array();
    $data = check($this->request);
    $me = $data->id;

    $my = getUserInfo($me);
    $data = array();

    if ($my['level'] == 3) {
        $sql = sprintf("select id,username,job, real_name from users where department_id=%s ", $my['department_id']);
        $data = \ORM::for_table("users")->raw_query($sql)->find_array();
    }
// elseif ($my['level'] == 7) {
//
//        $sql = "select id,username,job, real_name from users where level!=1 and level!=2 ";
//        $data = \ORM::for_table("users")->raw_query($sql)->find_array();
//    }
    $res['err_code'] = 0;
    $res['err_msg'] = "";
    $res['data'] = $data;
    echo json_encode($res);

});
/**
 * @api {post} /task/create 创建任务
 * @apiDescription type为1部门任务，2为个人任务
 * @apiName createtask
 * @apiGroup Task
 * @apiHeader {String} Authorization 请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.
 * @apiParam {Int} department_id 部门id(type为1时需有部门Id).
 * @apiParam {Int} user_id 用户id(type为2时需要有用户id).
 * @apiParam {Int} status 状态，默认为1，未完成，2为已完成.
 * @apiParam {String} type 类型.
 * @apiParam {String} title 标题.
 * @apiParam {String} content 内容.
 * @apiParam {Datetime} add_time 创建日期.
 * @apiParam {Datetime} limit_time 任务完成日期
 * @apiParam {String} attachs 数组转josn字符串
 * @apiSampleRequest /v1/task/create
 */

$app->map(['POST'], '/create', function ($request, $response, $args) {

    $res = array();
    $data = check($this->request);
    $meid=$data->id;
    $user_id = $this->request->getParam('user_id');
    $type = $this->request->getParam('type');
    $department_id = $this->request->getParam('department_id');
    $title = $this->request->getParam('title');
    $content = $this->request->getParam('content');
    $add_time = $this->request->getParam('add_time');
    $limit_time = $this->request->getParam('limit_time');
    $attachs = $this->request->getParam('attachs');

    $task = \ORM::for_table('users_task')->create();
    $task->create_time = Carbon::now()->toDateTimeString();
    $task->user_id = $user_id;
    $task->department_id = $department_id;
    $task->type = $type;
    $task->status = 1;
    $task->title = $title;
    $task->content = $content;
    $task->add_time = $add_time;
    $task->limit_time = $limit_time;
    $task->actor_id=$meid;
    $task->attachs=$attachs;
    $task->save();
    $res['err_code'] = 0;
    $res['err_msg'] = "保存成功";
    echo json_encode($res);

});

/**
 * @api {post} /task/update 更新任务
 * @apiDescription type为1部门任务，2为个人任务
 * @apiName updatetask
 * @apiGroup Task
 * @apiHeader {String} Authorization 请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.
 * @apiParam {Int} id 任务id.
 * @apiParam {Int} department_id 部门id(type为1时需有部门Id).
 * @apiParam {Int} user_id 用户id(type为2时需要有用户id).
 * @apiParam {Int} status 状态，默认为1，未完成，2为已完成.
 * @apiParam {String} type 类型.
 * @apiParam {String} title 标题.
 * @apiParam {String} content 内容.
 * @apiParam {Datetime} add_time 创建日期.
 * @apiParam {Datetime} limit_time 任务完成日期
 * @apiParam {String} attachs 数组转json字符串
 * @apiSampleRequest /v1/task/update
 */

$app->map(['POST'], '/update', function ($request, $response, $args) {

    $res = array();
    $data = check($this->request);


    $id = $this->request->getParam('id');
    $meid=$data->id;
    $user_id = $this->request->getParam('user_id');
    $type = $this->request->getParam('type');
    $department_id = $this->request->getParam('department_id');
    $title = $this->request->getParam('title');
    $content = $this->request->getParam('content');
    $add_time = $this->request->getParam('add_time');
    $limit_time = $this->request->getParam('limit_time');
    $attachs = $this->request->getParam('attachs');


    $task = \ORM::for_table('users_task')->find_one($id);

    $task->user_id = $user_id;
    $task->department_id = $department_id;
    $task->type = $type;
    $task->status = 1;
    $task->title = $title;
    $task->content = $content;
    $task->add_time = $add_time;
    $task->limit_time = $limit_time;
    $task->actor_id = $meid;
    $task->attachs = $attachs;
    $task->save();
    $res['err_code'] = 0;
    $res['err_msg'] = "保存成功";
    echo json_encode($res);

});


/**
 * @api {post} /task/delete 删除任务
 * @apiDescription
 * @apiName deletetask
 * @apiGroup Task
 * @apiHeader {String} Authorization 请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.
 * @apiParam {Int} id 记录id.
 * @apiSampleRequest /v1/task/delete
 */
$app->map(['POST', 'DELETE'], '/delete', function ($request, $response, $args) {

    $res = array();
    $data = check($this->request);

    $user_id = $data->id;
    $id = $this->request->getParam('id');


    $task = \ORM::for_table('users_task')->find_one($id);

    if ($task) {
        $task->delete();
        $res['err_code'] = 0;
        $res['err_msg'] = "删除成功";
    } else {
        $res['err_code'] = 1;
        $res['err_msg'] = "删除失败，记录不存在";
    }


    echo json_encode($res);

});


/**
 * @api {post} /task/search 查询任务
 * @apiDescription type为1为部门任务，2为个人任务
 * @apiName listTasks
 * @apiGroup Task
 * @apiHeader {String} Authorization 请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.
 * @apiParam {Int} user_id 被查询者id,若为null,则返回全部用户的记录.
 * @apiParam {String} type 返回指定的类型，为null返回全部类型.
 * @apiParam {Int} department_id 部门id,为null返回全部部门.
 * @apiParam {String} star_time 时间段：开始日期.
 * @apiParam {String} end_time 时间段：结束日期.
 * @apiSampleRequest /v1/task/search
 */
$app->map(['GET', 'POST'], '/search', function ($request, $response, $args) {

    $res = array();
    $data = check($this->request);
//
    $meid = $data->id;
    $page = $this->request->getParam('page');
    if (!$page) {
        $page = 1;
    }

    $pageSize = 10;

    $type = $this->request->getParam('type');
    $department_id = $this->request->getParam('department_id');
    $user_id = $this->request->getParam('user_id');
    $star = $this->request->getParam('star_time');
    $end = $this->request->getParam('end_time');
    $task = \ORM::for_table('users_task');
    if ($user_id > 0) {
        $task->where_raw(sprintf("`user_id`='%s'", $user_id));

    };
    if ($department_id > 0) {
        $task->where_raw(sprintf("`department_id`='%s'", $department_id));

    };

    $task->where_raw(sprintf("`type`='%s'", 1));



    if ($star) {
        $task->where_raw("DATE_FORMAT(add_time,'%Y-%m-%d')>='" . $star . "'");
    }
    if ($end) {
        $task->where_raw("DATE_FORMAT(add_time,'%Y-%m-%d')<='" . $end . "'");
    }

    $count = rand(1, @ceil($task->count() / $pageSize));

    $data = $task->limit($pageSize)->offset(($page - 1) * $pageSize)
        ->order_by_desc('id')->find_array();

    $res['err_code'] = 0;
    $res['err_msg'] = "";
    $res['data'] = array('list' => $data, 'total' => $count);
    echo json_encode($res);

});

/**
 * @api {post} /task/my 我的任务
 * @apiName myTasks
 * @apiGroup Task
 * @apiHeader {String} Authorization 请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.
 * @apiParam {Int} user_id 被查询者id.
 * @apiParam {Int} actor_id 发布者id .
 * @apiParam {String} star_time 时间段：开始日期.
 * @apiParam {String} end_time 时间段：结束日期.
 * @apiSampleRequest /v1/task/my
 */
$app->map(['GET', 'POST'], '/my', function ($request, $response, $args) {

    $res = array();
    $data = check($this->request);

    $meid = $data->id;
    $page = $this->request->getParam('page');
    if (!$page) {
        $page = 1;
    }

    $pageSize = 10;


    $type = $this->request->getParam('type');
    $user_id=$this->request->getParam('user_id');
    $star = $this->request->getParam('star_time');
    $end = $this->request->getParam('end_time');
    $actor_id = $this->request->getParam('actor_id');
    $task = \ORM::for_table('users_task');

    if($actor_id){
        $task->where_raw(sprintf("`actor_id`='%s'", $actor_id));
    }else if($user_id){
        $task->where_raw(sprintf("`user_id`='%s'", $user_id));
    }else{
        $task->where_raw(sprintf("`user_id`='%s'", $meid));
    }
    $task->where_raw(sprintf("`type`='%s'", 2));

    if ($star) {
        $task->where_raw("DATE_FORMAT(add_time,'%Y-%m-%d')>='" . $star . "'");
    }
    if ($end) {
        $task->where_raw("DATE_FORMAT(add_time,'%Y-%m-%d')<='" . $end . "'");
    }

    $count = rand(1, @ceil($task->count() / $pageSize));

    $data = $task->limit($pageSize)->offset(($page - 1) * $pageSize)
        ->order_by_desc('id')->find_array();

    $res['err_code'] = 0;
    $res['err_msg'] = "";
    $res['data'] = array('list' => $data, 'total' => $count);
    echo json_encode($res);

});