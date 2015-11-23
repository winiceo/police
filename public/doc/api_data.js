define({ "api": [
  {
    "type": "post",
    "url": "/department/create",
    "title": "添加部门",
    "description": "<p>添加部门</p> ",
    "name": "createDep",
    "group": "Department",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>部门名称.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\"err_code\": 0,\n\"err_msg\": \"success\",\n\"data\": {\n\"token\": {\n\"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0NDU5MTgyOTksImp0aSI6ImJFR2Z1ak5Bckp4QXl2UHdPSVFaekV2eEtYT2hrRlwvT1VcL1hzTUlsRXhUdz0iLCJpc3MiOiJwbWtvb19zZWxsZXIiLCJleHAiOjE0NDU5MjU0OTksImRhdGEiOnsiaWQiOiIxIiwibmFtZSI6ImFkbWluIn19.NtZxwC9WoDdnGVjboC1O3RJCcAMsj0D5G3A1vxL0RMMEiSwKC3jPLRMaByCXd9xm6IJw8BH0GLkVnWGvW5_aWA\"\n},\n\"user\": {\n\"id\": \"1\",\n\"username\": \"admin\",\n\"email\": \"admin@71an.com\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n\"err_code\": 1,\n\"err_msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/department/create"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/department.php",
    "groupTitle": "Department"
  },
  {
    "type": "post",
    "url": "/department/delete",
    "title": "删除部门",
    "description": "<p>删除部门</p> ",
    "name": "deleteDepartment",
    "group": "Department",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Int</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>记录id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\"err_code\": 0,\n\"err_msg\": \"success\",\n\"data\": {\n\"token\": {\n\"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0NDU5MTgyOTksImp0aSI6ImJFR2Z1ak5Bckp4QXl2UHdPSVFaekV2eEtYT2hrRlwvT1VcL1hzTUlsRXhUdz0iLCJpc3MiOiJwbWtvb19zZWxsZXIiLCJleHAiOjE0NDU5MjU0OTksImRhdGEiOnsiaWQiOiIxIiwibmFtZSI6ImFkbWluIn19.NtZxwC9WoDdnGVjboC1O3RJCcAMsj0D5G3A1vxL0RMMEiSwKC3jPLRMaByCXd9xm6IJw8BH0GLkVnWGvW5_aWA\"\n},\n\"user\": {\n\"id\": \"1\",\n\"username\": \"admin\",\n\"email\": \"admin@71an.com\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n\"err_code\": 1,\n\"err_msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/department/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/department.php",
    "groupTitle": "Department"
  },
  {
    "type": "post",
    "url": "/department/search",
    "title": "部门列表",
    "description": "<p>部门列表</p> ",
    "name": "listDepartment",
    "group": "Department",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\"err_code\": 0,\n\"err_msg\": \"success\",\n\"data\": {\n\"token\": {\n\"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0NDU5MTgyOTksImp0aSI6ImJFR2Z1ak5Bckp4QXl2UHdPSVFaekV2eEtYT2hrRlwvT1VcL1hzTUlsRXhUdz0iLCJpc3MiOiJwbWtvb19zZWxsZXIiLCJleHAiOjE0NDU5MjU0OTksImRhdGEiOnsiaWQiOiIxIiwibmFtZSI6ImFkbWluIn19.NtZxwC9WoDdnGVjboC1O3RJCcAMsj0D5G3A1vxL0RMMEiSwKC3jPLRMaByCXd9xm6IJw8BH0GLkVnWGvW5_aWA\"\n},\n\"user\": {\n\"id\": \"1\",\n\"username\": \"admin\",\n\"email\": \"admin@71an.com\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n\"err_code\": 1,\n\"err_msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/department/search"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/department.php",
    "groupTitle": "Department"
  },
  {
    "type": "post",
    "url": "/department/update",
    "title": "更新部门",
    "description": "<p>更新部门</p> ",
    "name": "updateDepartment",
    "group": "Department",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Int</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>记录id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>部门名称.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\"err_code\": 0,\n\"err_msg\": \"success\",\n\"data\": {\n\"token\": {\n\"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0NDU5MTgyOTksImp0aSI6ImJFR2Z1ak5Bckp4QXl2UHdPSVFaekV2eEtYT2hrRlwvT1VcL1hzTUlsRXhUdz0iLCJpc3MiOiJwbWtvb19zZWxsZXIiLCJleHAiOjE0NDU5MjU0OTksImRhdGEiOnsiaWQiOiIxIiwibmFtZSI6ImFkbWluIn19.NtZxwC9WoDdnGVjboC1O3RJCcAMsj0D5G3A1vxL0RMMEiSwKC3jPLRMaByCXd9xm6IJw8BH0GLkVnWGvW5_aWA\"\n},\n\"user\": {\n\"id\": \"1\",\n\"username\": \"admin\",\n\"email\": \"admin@71an.com\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n\"err_code\": 1,\n\"err_msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/department/update"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/department.php",
    "groupTitle": "Department"
  },
  {
    "type": "post",
    "url": "/helper/check_in",
    "title": "审核通过",
    "description": "<p>审核通过</p> ",
    "name": "check_in",
    "group": "Helper",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Int</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>记录id.</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/v1/helper/check_in"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/helper.php",
    "groupTitle": "Helper"
  },
  {
    "type": "post",
    "url": "/helper/check_out",
    "title": "审核未通过",
    "description": "<p>审核未通过</p> ",
    "name": "check_out",
    "group": "Helper",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Int</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>记录id.</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/v1/helper/check_out"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/helper.php",
    "groupTitle": "Helper"
  },
  {
    "type": "get",
    "url": "/helper/getjob",
    "title": "获取职位名称",
    "description": "<p>职位名称直接系统定义</p> ",
    "name": "getJobs",
    "group": "Helper",
    "sampleRequest": [
      {
        "url": "/v1/helper/getjob"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/helper.php",
    "groupTitle": "Helper"
  },
  {
    "type": "get",
    "url": "/helper/getlevel",
    "title": "获取职位名称",
    "description": "<p>职位名称直接系统定义</p> ",
    "name": "getLevel",
    "group": "Helper",
    "sampleRequest": [
      {
        "url": "/v1/helper/getlevel"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/helper.php",
    "groupTitle": "Helper"
  },
  {
    "type": "get",
    "url": "/helper/getrole",
    "title": "获取角色名称",
    "description": "<p>获取角色</p> ",
    "name": "getRole",
    "group": "Helper",
    "sampleRequest": [
      {
        "url": "/v1/helper/getrole"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/helper.php",
    "groupTitle": "Helper"
  },
  {
    "type": "get",
    "url": "/helper/processing",
    "title": "获取需要处理的事项",
    "description": "<p>获取需要处理的事项</p> ",
    "name": "processing",
    "group": "Helper",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/v1/helper/processing"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/helper.php",
    "groupTitle": "Helper"
  },
  {
    "type": "post",
    "url": "/leave/create",
    "title": "请假审请",
    "description": "<p>请假审请</p> ",
    "name": "createLeave",
    "group": "Leave",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "start_time",
            "description": "<p>开始时间.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "end_time",
            "description": "<p>结束时间.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "reason",
            "description": "<p>请假原因.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\"err_code\": 0,\n\"err_msg\": \"success\",\n\"data\": {\n\"token\": {\n\"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0NDU5MTgyOTksImp0aSI6ImJFR2Z1ak5Bckp4QXl2UHdPSVFaekV2eEtYT2hrRlwvT1VcL1hzTUlsRXhUdz0iLCJpc3MiOiJwbWtvb19zZWxsZXIiLCJleHAiOjE0NDU5MjU0OTksImRhdGEiOnsiaWQiOiIxIiwibmFtZSI6ImFkbWluIn19.NtZxwC9WoDdnGVjboC1O3RJCcAMsj0D5G3A1vxL0RMMEiSwKC3jPLRMaByCXd9xm6IJw8BH0GLkVnWGvW5_aWA\"\n},\n\"user\": {\n\"id\": \"1\",\n\"username\": \"admin\",\n\"email\": \"admin@71an.com\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n\"err_code\": 1,\n\"err_msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/leave/create"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/leave.php",
    "groupTitle": "Leave"
  },
  {
    "type": "post",
    "url": "/leave/delete",
    "title": "删除请假",
    "description": "<p>删除请假</p> ",
    "name": "deleteLeave",
    "group": "Leave",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Int</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>记录id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\"err_code\": 0,\n\"err_msg\": \"success\",\n\"data\": {\n\"token\": {\n\"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0NDU5MTgyOTksImp0aSI6ImJFR2Z1ak5Bckp4QXl2UHdPSVFaekV2eEtYT2hrRlwvT1VcL1hzTUlsRXhUdz0iLCJpc3MiOiJwbWtvb19zZWxsZXIiLCJleHAiOjE0NDU5MjU0OTksImRhdGEiOnsiaWQiOiIxIiwibmFtZSI6ImFkbWluIn19.NtZxwC9WoDdnGVjboC1O3RJCcAMsj0D5G3A1vxL0RMMEiSwKC3jPLRMaByCXd9xm6IJw8BH0GLkVnWGvW5_aWA\"\n},\n\"user\": {\n\"id\": \"1\",\n\"username\": \"admin\",\n\"email\": \"admin@71an.com\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n\"err_code\": 1,\n\"err_msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/leave/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/leave.php",
    "groupTitle": "Leave"
  },
  {
    "type": "post",
    "url": "/leave/search",
    "title": "查询请假情况",
    "description": "<p>我的请假列表</p> ",
    "name": "listLeave",
    "group": "Leave",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Int</p> ",
            "optional": false,
            "field": "page",
            "description": "<p>分页 为空则为1</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Int</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>被查询者id,若为null,则返回全部用户的记录.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "star_time",
            "description": "<p>时间段：开始日期.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "end_time",
            "description": "<p>时间段：结束日期.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Int</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>审核状态，1：待审核，2：审核完成，3：审核未通过.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\"err_code\": 0,\n\"err_msg\": \"success\",\n\"data\": {\n\"token\": {\n\"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0NDU5MTgyOTksImp0aSI6ImJFR2Z1ak5Bckp4QXl2UHdPSVFaekV2eEtYT2hrRlwvT1VcL1hzTUlsRXhUdz0iLCJpc3MiOiJwbWtvb19zZWxsZXIiLCJleHAiOjE0NDU5MjU0OTksImRhdGEiOnsiaWQiOiIxIiwibmFtZSI6ImFkbWluIn19.NtZxwC9WoDdnGVjboC1O3RJCcAMsj0D5G3A1vxL0RMMEiSwKC3jPLRMaByCXd9xm6IJw8BH0GLkVnWGvW5_aWA\"\n},\n\"user\": {\n\"id\": \"1\",\n\"username\": \"admin\",\n\"email\": \"admin@71an.com\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n\"err_code\": 1,\n\"err_msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/leave/search"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/leave.php",
    "groupTitle": "Leave"
  },
  {
    "type": "post",
    "url": "/leave/update",
    "title": "修改请假信息",
    "description": "<p>更新请假</p> ",
    "name": "updateLeave",
    "group": "Leave",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Int</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>记录id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "start_time",
            "description": "<p>开始时间.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "end_time",
            "description": "<p>结束时间.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "reason",
            "description": "<p>请假原因.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\"err_code\": 0,\n\"err_msg\": \"success\",\n\"data\": {\n\"token\": {\n\"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0NDU5MTgyOTksImp0aSI6ImJFR2Z1ak5Bckp4QXl2UHdPSVFaekV2eEtYT2hrRlwvT1VcL1hzTUlsRXhUdz0iLCJpc3MiOiJwbWtvb19zZWxsZXIiLCJleHAiOjE0NDU5MjU0OTksImRhdGEiOnsiaWQiOiIxIiwibmFtZSI6ImFkbWluIn19.NtZxwC9WoDdnGVjboC1O3RJCcAMsj0D5G3A1vxL0RMMEiSwKC3jPLRMaByCXd9xm6IJw8BH0GLkVnWGvW5_aWA\"\n},\n\"user\": {\n\"id\": \"1\",\n\"username\": \"admin\",\n\"email\": \"admin@71an.com\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n\"err_code\": 1,\n\"err_msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/leave/update"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/leave.php",
    "groupTitle": "Leave"
  },
  {
    "type": "post",
    "url": "/member/change_password",
    "title": "更新自己密码",
    "description": "<p>更新用户自己的密码</p> ",
    "name": "changePassword",
    "group": "Member",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>密码.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\"err_code\": 0,\n\"err_msg\": \"success\",\n\"data\": {\n\"token\": {\n\"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0NDU5MTgyOTksImp0aSI6ImJFR2Z1ak5Bckp4QXl2UHdPSVFaekV2eEtYT2hrRlwvT1VcL1hzTUlsRXhUdz0iLCJpc3MiOiJwbWtvb19zZWxsZXIiLCJleHAiOjE0NDU5MjU0OTksImRhdGEiOnsiaWQiOiIxIiwibmFtZSI6ImFkbWluIn19.NtZxwC9WoDdnGVjboC1O3RJCcAMsj0D5G3A1vxL0RMMEiSwKC3jPLRMaByCXd9xm6IJw8BH0GLkVnWGvW5_aWA\"\n},\n\"user\": {\n\"id\": \"1\",\n\"username\": \"admin\",\n\"email\": \"admin@71an.com\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n\"err_code\": 1,\n\"err_msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/member/change_password"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/member.php",
    "groupTitle": "Member"
  },
  {
    "type": "post",
    "url": "/member/create",
    "title": "添加用户",
    "description": "<p>添加用户</p> ",
    "name": "createMember",
    "group": "Member",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "username",
            "description": "<p>用户名.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>密码.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "role",
            "description": "<p>角色.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "job",
            "description": "<p>职位.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "level",
            "description": "<p>级别.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Int</p> ",
            "optional": false,
            "field": "department_id",
            "description": "<p>部门id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Int</p> ",
            "optional": false,
            "field": "parent_user_id",
            "description": "<p>汇报对像id</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\"err_code\": 0,\n\"err_msg\": \"success\",\n\"data\": {\n\"token\": {\n\"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0NDU5MTgyOTksImp0aSI6ImJFR2Z1ak5Bckp4QXl2UHdPSVFaekV2eEtYT2hrRlwvT1VcL1hzTUlsRXhUdz0iLCJpc3MiOiJwbWtvb19zZWxsZXIiLCJleHAiOjE0NDU5MjU0OTksImRhdGEiOnsiaWQiOiIxIiwibmFtZSI6ImFkbWluIn19.NtZxwC9WoDdnGVjboC1O3RJCcAMsj0D5G3A1vxL0RMMEiSwKC3jPLRMaByCXd9xm6IJw8BH0GLkVnWGvW5_aWA\"\n},\n\"user\": {\n\"id\": \"1\",\n\"username\": \"admin\",\n\"email\": \"admin@71an.com\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n\"err_code\": 1,\n\"err_msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/member/create"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/member.php",
    "groupTitle": "Member"
  },
  {
    "type": "post",
    "url": "/member/delete",
    "title": "删除用户",
    "description": "<p>管理员操作，删除用户</p> ",
    "name": "deleteMember",
    "group": "Member",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Int</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>用户id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\"err_code\": 0,\n\"err_msg\": \"success\",\n\"data\": {\n\"token\": {\n\"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0NDU5MTgyOTksImp0aSI6ImJFR2Z1ak5Bckp4QXl2UHdPSVFaekV2eEtYT2hrRlwvT1VcL1hzTUlsRXhUdz0iLCJpc3MiOiJwbWtvb19zZWxsZXIiLCJleHAiOjE0NDU5MjU0OTksImRhdGEiOnsiaWQiOiIxIiwibmFtZSI6ImFkbWluIn19.NtZxwC9WoDdnGVjboC1O3RJCcAMsj0D5G3A1vxL0RMMEiSwKC3jPLRMaByCXd9xm6IJw8BH0GLkVnWGvW5_aWA\"\n},\n\"user\": {\n\"id\": \"1\",\n\"username\": \"admin\",\n\"email\": \"admin@71an.com\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n\"err_code\": 1,\n\"err_msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/member/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/member.php",
    "groupTitle": "Member"
  },
  {
    "type": "post",
    "url": "/member/profile",
    "title": "根据Id获取用户的信息",
    "description": "<p>根据Id获取用户的信息</p> ",
    "name": "getProfile",
    "group": "Member",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Int</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>要获取的用户id，若为空则返回当前登录用户.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\"err_code\": 0,\n\"err_msg\": \"success\",\n\"data\": {\n\"token\": {\n\"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0NDU5MTgyOTksImp0aSI6ImJFR2Z1ak5Bckp4QXl2UHdPSVFaekV2eEtYT2hrRlwvT1VcL1hzTUlsRXhUdz0iLCJpc3MiOiJwbWtvb19zZWxsZXIiLCJleHAiOjE0NDU5MjU0OTksImRhdGEiOnsiaWQiOiIxIiwibmFtZSI6ImFkbWluIn19.NtZxwC9WoDdnGVjboC1O3RJCcAMsj0D5G3A1vxL0RMMEiSwKC3jPLRMaByCXd9xm6IJw8BH0GLkVnWGvW5_aWA\"\n},\n\"user\": {\n\"id\": \"1\",\n\"username\": \"admin\",\n\"email\": \"admin@71an.com\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n\"err_code\": 1,\n\"err_msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/member/profile"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/member.php",
    "groupTitle": "Member"
  },
  {
    "type": "post",
    "url": "/member/list",
    "title": "用户列表",
    "description": "<p>管理员操作，显示所有用户</p> ",
    "name": "memberList",
    "group": "Member",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\nerr_code: 0,\nerr_msg: \"\",\ndata: [\n{\nid: \"1\",\nusername: \"admin\",\nemail: \"admin@71an.com\",\ngroup: \"admin\"\n},\n{\nid: \"19\",\nusername: \"leven\",\nemail: \"611796279@qq.com\",\ngroup: null\n},\n{\nid: \"20\",\nusername: \"chenshi\",\nemail: \"chenshi@qq.com\",\ngroup: null\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n\"err_code\": 1,\n\"err_msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/member/list"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/member.php",
    "groupTitle": "Member"
  },
  {
    "type": "post",
    "url": "/member/update",
    "title": "更新用户",
    "description": "<p>更新用户资料</p> ",
    "name": "updateMember",
    "group": "Member",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Int</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>用户id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "username",
            "description": "<p>用户名.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>密码.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "role",
            "description": "<p>角色.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "job",
            "description": "<p>职位.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "level",
            "description": "<p>级别.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Int</p> ",
            "optional": false,
            "field": "department_id",
            "description": "<p>部门id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Int</p> ",
            "optional": false,
            "field": "parent_user_id",
            "description": "<p>汇报对像id</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\"err_code\": 0,\n\"err_msg\": \"success\",\n\"data\": {\n\"token\": {\n\"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0NDU5MTgyOTksImp0aSI6ImJFR2Z1ak5Bckp4QXl2UHdPSVFaekV2eEtYT2hrRlwvT1VcL1hzTUlsRXhUdz0iLCJpc3MiOiJwbWtvb19zZWxsZXIiLCJleHAiOjE0NDU5MjU0OTksImRhdGEiOnsiaWQiOiIxIiwibmFtZSI6ImFkbWluIn19.NtZxwC9WoDdnGVjboC1O3RJCcAMsj0D5G3A1vxL0RMMEiSwKC3jPLRMaByCXd9xm6IJw8BH0GLkVnWGvW5_aWA\"\n},\n\"user\": {\n\"id\": \"1\",\n\"username\": \"admin\",\n\"email\": \"admin@71an.com\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n\"err_code\": 1,\n\"err_msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/member/update"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/member.php",
    "groupTitle": "Member"
  },
  {
    "type": "post",
    "url": "/note/create",
    "title": "添加待办事项",
    "description": "<p>添加待办事项</p> ",
    "name": "createDep",
    "group": "Note",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "content",
            "description": "<p>内容.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\"err_code\": 0,\n\"err_msg\": \"success\",\n\"data\": {\n\"token\": {\n\"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0NDU5MTgyOTksImp0aSI6ImJFR2Z1ak5Bckp4QXl2UHdPSVFaekV2eEtYT2hrRlwvT1VcL1hzTUlsRXhUdz0iLCJpc3MiOiJwbWtvb19zZWxsZXIiLCJleHAiOjE0NDU5MjU0OTksImRhdGEiOnsiaWQiOiIxIiwibmFtZSI6ImFkbWluIn19.NtZxwC9WoDdnGVjboC1O3RJCcAMsj0D5G3A1vxL0RMMEiSwKC3jPLRMaByCXd9xm6IJw8BH0GLkVnWGvW5_aWA\"\n},\n\"user\": {\n\"id\": \"1\",\n\"username\": \"admin\",\n\"email\": \"admin@71an.com\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n\"err_code\": 1,\n\"err_msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/note/create"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/note.php",
    "groupTitle": "Note"
  },
  {
    "type": "post",
    "url": "/note/delete",
    "title": "删除待办事项",
    "description": "<p>删除待办事项</p> ",
    "name": "deleteNote",
    "group": "Note",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Int</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>记录id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\"err_code\": 0,\n\"err_msg\": \"success\",\n\"data\": {\n\"token\": {\n\"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0NDU5MTgyOTksImp0aSI6ImJFR2Z1ak5Bckp4QXl2UHdPSVFaekV2eEtYT2hrRlwvT1VcL1hzTUlsRXhUdz0iLCJpc3MiOiJwbWtvb19zZWxsZXIiLCJleHAiOjE0NDU5MjU0OTksImRhdGEiOnsiaWQiOiIxIiwibmFtZSI6ImFkbWluIn19.NtZxwC9WoDdnGVjboC1O3RJCcAMsj0D5G3A1vxL0RMMEiSwKC3jPLRMaByCXd9xm6IJw8BH0GLkVnWGvW5_aWA\"\n},\n\"user\": {\n\"id\": \"1\",\n\"username\": \"admin\",\n\"email\": \"admin@71an.com\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n\"err_code\": 1,\n\"err_msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/note/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/note.php",
    "groupTitle": "Note"
  },
  {
    "type": "post",
    "url": "/note/search",
    "title": "待办事项列表",
    "description": "<p>待办事项列表</p> ",
    "name": "listNote",
    "group": "Note",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\"err_code\": 0,\n\"err_msg\": \"success\",\n\"data\": {\n\"token\": {\n\"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0NDU5MTgyOTksImp0aSI6ImJFR2Z1ak5Bckp4QXl2UHdPSVFaekV2eEtYT2hrRlwvT1VcL1hzTUlsRXhUdz0iLCJpc3MiOiJwbWtvb19zZWxsZXIiLCJleHAiOjE0NDU5MjU0OTksImRhdGEiOnsiaWQiOiIxIiwibmFtZSI6ImFkbWluIn19.NtZxwC9WoDdnGVjboC1O3RJCcAMsj0D5G3A1vxL0RMMEiSwKC3jPLRMaByCXd9xm6IJw8BH0GLkVnWGvW5_aWA\"\n},\n\"user\": {\n\"id\": \"1\",\n\"username\": \"admin\",\n\"email\": \"admin@71an.com\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n\"err_code\": 1,\n\"err_msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/note/search"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/note.php",
    "groupTitle": "Note"
  },
  {
    "type": "post",
    "url": "/note/update",
    "title": "更新待办事项",
    "description": "<p>更新待办事项</p> ",
    "name": "updateNote",
    "group": "Note",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Int</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>记录id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "content",
            "description": "<p>待办事项内容.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\"err_code\": 0,\n\"err_msg\": \"success\",\n\"data\": {\n\"token\": {\n\"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0NDU5MTgyOTksImp0aSI6ImJFR2Z1ak5Bckp4QXl2UHdPSVFaekV2eEtYT2hrRlwvT1VcL1hzTUlsRXhUdz0iLCJpc3MiOiJwbWtvb19zZWxsZXIiLCJleHAiOjE0NDU5MjU0OTksImRhdGEiOnsiaWQiOiIxIiwibmFtZSI6ImFkbWluIn19.NtZxwC9WoDdnGVjboC1O3RJCcAMsj0D5G3A1vxL0RMMEiSwKC3jPLRMaByCXd9xm6IJw8BH0GLkVnWGvW5_aWA\"\n},\n\"user\": {\n\"id\": \"1\",\n\"username\": \"admin\",\n\"email\": \"admin@71an.com\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n\"err_code\": 1,\n\"err_msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/note/update"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/note.php",
    "groupTitle": "Note"
  },
  {
    "type": "post",
    "url": "/plan/create",
    "title": "创建计划或者总结",
    "description": "<p>type为1为计划，2为总结</p> ",
    "name": "createPlan",
    "group": "Plan",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>内容类型.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "content",
            "description": "<p>内容.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "add_time",
            "description": "<p>创建日期.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\"err_code\": 0,\n\"err_msg\": \"success\",\n\"data\": {\n\"token\": {\n\"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0NDU5MTgyOTksImp0aSI6ImJFR2Z1ak5Bckp4QXl2UHdPSVFaekV2eEtYT2hrRlwvT1VcL1hzTUlsRXhUdz0iLCJpc3MiOiJwbWtvb19zZWxsZXIiLCJleHAiOjE0NDU5MjU0OTksImRhdGEiOnsiaWQiOiIxIiwibmFtZSI6ImFkbWluIn19.NtZxwC9WoDdnGVjboC1O3RJCcAMsj0D5G3A1vxL0RMMEiSwKC3jPLRMaByCXd9xm6IJw8BH0GLkVnWGvW5_aWA\"\n},\n\"user\": {\n\"id\": \"1\",\n\"username\": \"admin\",\n\"email\": \"admin@71an.com\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n\"err_code\": 1,\n\"err_msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/plan/create"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/plan.php",
    "groupTitle": "Plan"
  },
  {
    "type": "post",
    "url": "/plan/delete",
    "title": "删除计划或者总结",
    "description": "<p>type为1为计划，2为总结</p> ",
    "name": "deletePlan",
    "group": "Plan",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Int</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>记录id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\"err_code\": 0,\n\"err_msg\": \"success\",\n\"data\": {\n\"token\": {\n\"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0NDU5MTgyOTksImp0aSI6ImJFR2Z1ak5Bckp4QXl2UHdPSVFaekV2eEtYT2hrRlwvT1VcL1hzTUlsRXhUdz0iLCJpc3MiOiJwbWtvb19zZWxsZXIiLCJleHAiOjE0NDU5MjU0OTksImRhdGEiOnsiaWQiOiIxIiwibmFtZSI6ImFkbWluIn19.NtZxwC9WoDdnGVjboC1O3RJCcAMsj0D5G3A1vxL0RMMEiSwKC3jPLRMaByCXd9xm6IJw8BH0GLkVnWGvW5_aWA\"\n},\n\"user\": {\n\"id\": \"1\",\n\"username\": \"admin\",\n\"email\": \"admin@71an.com\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n\"err_code\": 1,\n\"err_msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/plan/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/plan.php",
    "groupTitle": "Plan"
  },
  {
    "type": "post",
    "url": "/plan/update",
    "title": "更新计划或者总结",
    "description": "<p>type为1为计划，2为总结</p> ",
    "name": "updatePlan",
    "group": "Plan",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Int</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>记录id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>内容类型.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "content",
            "description": "<p>内容.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "add_time",
            "description": "<p>创建日期.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\"err_code\": 0,\n\"err_msg\": \"success\",\n\"data\": {\n\"token\": {\n\"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0NDU5MTgyOTksImp0aSI6ImJFR2Z1ak5Bckp4QXl2UHdPSVFaekV2eEtYT2hrRlwvT1VcL1hzTUlsRXhUdz0iLCJpc3MiOiJwbWtvb19zZWxsZXIiLCJleHAiOjE0NDU5MjU0OTksImRhdGEiOnsiaWQiOiIxIiwibmFtZSI6ImFkbWluIn19.NtZxwC9WoDdnGVjboC1O3RJCcAMsj0D5G3A1vxL0RMMEiSwKC3jPLRMaByCXd9xm6IJw8BH0GLkVnWGvW5_aWA\"\n},\n\"user\": {\n\"id\": \"1\",\n\"username\": \"admin\",\n\"email\": \"admin@71an.com\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n\"err_code\": 1,\n\"err_msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/plan/update"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/plan.php",
    "groupTitle": "Plan"
  },
  {
    "type": "post",
    "url": "/plan/search",
    "title": "查询",
    "description": "<p>type为1为计划，2为总结</p> ",
    "name": "updatePlan",
    "group": "Plan",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Int</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>被查询者id,若为null,则返回全部用户的记录.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>返回指定的类型，为null返回全部类型.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "star_time",
            "description": "<p>时间段：开始日期.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "end_time",
            "description": "<p>时间段：结束日期.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\"err_code\": 0,\n\"err_msg\": \"success\",\n\"data\": {\n\"token\": {\n\"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0NDU5MTgyOTksImp0aSI6ImJFR2Z1ak5Bckp4QXl2UHdPSVFaekV2eEtYT2hrRlwvT1VcL1hzTUlsRXhUdz0iLCJpc3MiOiJwbWtvb19zZWxsZXIiLCJleHAiOjE0NDU5MjU0OTksImRhdGEiOnsiaWQiOiIxIiwibmFtZSI6ImFkbWluIn19.NtZxwC9WoDdnGVjboC1O3RJCcAMsj0D5G3A1vxL0RMMEiSwKC3jPLRMaByCXd9xm6IJw8BH0GLkVnWGvW5_aWA\"\n},\n\"user\": {\n\"id\": \"1\",\n\"username\": \"admin\",\n\"email\": \"admin@71an.com\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n\"err_code\": 1,\n\"err_msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/plan/search"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/plan.php",
    "groupTitle": "Plan"
  },
  {
    "type": "post",
    "url": "/travel/create",
    "title": "出差审请",
    "description": "<p>出差审请</p> ",
    "name": "createTravel",
    "group": "Travel__",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "start_time",
            "description": "<p>开始时间.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "end_time",
            "description": "<p>结束时间.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "reason",
            "description": "<p>出差原因.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "address",
            "description": "<p>出差地点.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\"err_code\": 0,\n\"err_msg\": \"success\",\n\"data\": {\n\"token\": {\n\"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0NDU5MTgyOTksImp0aSI6ImJFR2Z1ak5Bckp4QXl2UHdPSVFaekV2eEtYT2hrRlwvT1VcL1hzTUlsRXhUdz0iLCJpc3MiOiJwbWtvb19zZWxsZXIiLCJleHAiOjE0NDU5MjU0OTksImRhdGEiOnsiaWQiOiIxIiwibmFtZSI6ImFkbWluIn19.NtZxwC9WoDdnGVjboC1O3RJCcAMsj0D5G3A1vxL0RMMEiSwKC3jPLRMaByCXd9xm6IJw8BH0GLkVnWGvW5_aWA\"\n},\n\"user\": {\n\"id\": \"1\",\n\"username\": \"admin\",\n\"email\": \"admin@71an.com\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n\"err_code\": 1,\n\"err_msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/travel/create"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/travel.php",
    "groupTitle": "Travel__"
  },
  {
    "type": "post",
    "url": "/travel/delete",
    "title": "删除出差",
    "description": "<p>删除出差</p> ",
    "name": "deleteTravel",
    "group": "Travel__",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Int</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>记录id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\"err_code\": 0,\n\"err_msg\": \"success\",\n\"data\": {\n\"token\": {\n\"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0NDU5MTgyOTksImp0aSI6ImJFR2Z1ak5Bckp4QXl2UHdPSVFaekV2eEtYT2hrRlwvT1VcL1hzTUlsRXhUdz0iLCJpc3MiOiJwbWtvb19zZWxsZXIiLCJleHAiOjE0NDU5MjU0OTksImRhdGEiOnsiaWQiOiIxIiwibmFtZSI6ImFkbWluIn19.NtZxwC9WoDdnGVjboC1O3RJCcAMsj0D5G3A1vxL0RMMEiSwKC3jPLRMaByCXd9xm6IJw8BH0GLkVnWGvW5_aWA\"\n},\n\"user\": {\n\"id\": \"1\",\n\"username\": \"admin\",\n\"email\": \"admin@71an.com\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n\"err_code\": 1,\n\"err_msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/travel/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/travel.php",
    "groupTitle": "Travel__"
  },
  {
    "type": "post",
    "url": "/travel/search",
    "title": "查询出差情况",
    "description": "<p>我的出差列表</p> ",
    "name": "listTravel",
    "group": "Travel__",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Int</p> ",
            "optional": false,
            "field": "page",
            "description": "<p>分页 为空则为1</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Int</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>被查询者id,若为null,则返回全部用户的记录.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "star_time",
            "description": "<p>时间段：开始日期.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "end_time",
            "description": "<p>时间段：结束日期.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Int</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>审核状态，1：待审核，2：审核完成，3：审核未通过.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\"err_code\": 0,\n\"err_msg\": \"success\",\n\"data\": {\n\"token\": {\n\"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0NDU5MTgyOTksImp0aSI6ImJFR2Z1ak5Bckp4QXl2UHdPSVFaekV2eEtYT2hrRlwvT1VcL1hzTUlsRXhUdz0iLCJpc3MiOiJwbWtvb19zZWxsZXIiLCJleHAiOjE0NDU5MjU0OTksImRhdGEiOnsiaWQiOiIxIiwibmFtZSI6ImFkbWluIn19.NtZxwC9WoDdnGVjboC1O3RJCcAMsj0D5G3A1vxL0RMMEiSwKC3jPLRMaByCXd9xm6IJw8BH0GLkVnWGvW5_aWA\"\n},\n\"user\": {\n\"id\": \"1\",\n\"username\": \"admin\",\n\"email\": \"admin@71an.com\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n\"err_code\": 1,\n\"err_msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/travel/search"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/travel.php",
    "groupTitle": "Travel__"
  },
  {
    "type": "post",
    "url": "/travel/update",
    "title": "修改出差信息",
    "description": "<p>更新出差</p> ",
    "name": "updateTravel",
    "group": "Travel__",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Int</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>记录id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "start_time",
            "description": "<p>开始时间.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "end_time",
            "description": "<p>结束时间.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "reason",
            "description": "<p>出差原因.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "address",
            "description": "<p>出差地点.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\"err_code\": 0,\n\"err_msg\": \"success\",\n\"data\": {\n\"token\": {\n\"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0NDU5MTgyOTksImp0aSI6ImJFR2Z1ak5Bckp4QXl2UHdPSVFaekV2eEtYT2hrRlwvT1VcL1hzTUlsRXhUdz0iLCJpc3MiOiJwbWtvb19zZWxsZXIiLCJleHAiOjE0NDU5MjU0OTksImRhdGEiOnsiaWQiOiIxIiwibmFtZSI6ImFkbWluIn19.NtZxwC9WoDdnGVjboC1O3RJCcAMsj0D5G3A1vxL0RMMEiSwKC3jPLRMaByCXd9xm6IJw8BH0GLkVnWGvW5_aWA\"\n},\n\"user\": {\n\"id\": \"1\",\n\"username\": \"admin\",\n\"email\": \"admin@71an.com\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n\"err_code\": 1,\n\"err_msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/travel/update"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/travel.php",
    "groupTitle": "Travel__"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "用户登录",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "username",
            "description": "<p>用户登录名.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>用户密码.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\"err_code\": 0,\n\"err_msg\": \"success\",\n\"data\": {\n\"token\": {\n\"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE0NDU5MTgyOTksImp0aSI6ImJFR2Z1ak5Bckp4QXl2UHdPSVFaekV2eEtYT2hrRlwvT1VcL1hzTUlsRXhUdz0iLCJpc3MiOiJwbWtvb19zZWxsZXIiLCJleHAiOjE0NDU5MjU0OTksImRhdGEiOnsiaWQiOiIxIiwibmFtZSI6ImFkbWluIn19.NtZxwC9WoDdnGVjboC1O3RJCcAMsj0D5G3A1vxL0RMMEiSwKC3jPLRMaByCXd9xm6IJw8BH0GLkVnWGvW5_aWA\"\n},\n\"user\": {\n\"id\": \"1\",\n\"username\": \"admin\",\n\"email\": \"admin@71an.com\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n\"err_code\": 1,\n\"err_msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/user/login"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/user.php",
    "groupTitle": "User"
  },
  {
    "description": "<p>每天每用户只能签到一次，签到过的不能再签到</p> ",
    "permission": [
      {
        "name": "member",
        "title": "User access only",
        "description": "<p>登录后的用户可以操作.</p> "
      }
    ],
    "type": "get",
    "url": "/user/sign_in",
    "title": "用户签到",
    "name": "sign",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/user/sign_in"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/user.php",
    "groupTitle": "User"
  },
  {
    "description": "<p>每天每用户只能签退一次，签到过的不能再签退</p> ",
    "permission": [
      {
        "name": "member",
        "title": "User access only",
        "description": "<p>登录后的用户可以操作.</p> "
      }
    ],
    "type": "get",
    "url": "/user/sign_out",
    "title": "用户签退",
    "name": "sign_out",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/user/sign_out"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/user.php",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/info",
    "title": "获取用户信息",
    "name": "userinfo",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>请求header部份增加Authorization 格式为 Bearer+空格+用户token.jwt的值.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_code",
            "description": "<p>状态码0为成功.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "err_msg",
            "description": "<p>信息提示.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\"err_code\": 0,\n\"err_msg\": \"success\",\n\"data\": {\n\"id\": \"1\",\n\"username\": \"admin\",\n\"email\": \"admin@71an.com\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/user/info"
      }
    ],
    "version": "0.0.0",
    "filename": "app/route/user.php",
    "groupTitle": "User"
  }
] });