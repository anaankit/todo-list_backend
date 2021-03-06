define({ "api": [
  {
    "group": "List",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/list/allList/delete",
    "title": "api to delete all the lists of a user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "query",
            "optional": false,
            "field": "authToken",
            "description": "<p>to be provided as query parameter (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of th user for whome all lists must be deleted (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n    \"error\": false,\n    \"message\": \"delete successfull\",\n    \"status\": 200,\n    \"data\": {\n        \"ok\": 1,\n        \"n\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/listRoutes.js",
    "groupTitle": "List",
    "name": "PostApiV1ListAlllistDelete"
  },
  {
    "group": "List",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/list/create",
    "title": "api to Create a new list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "query",
            "optional": false,
            "field": "authToken",
            "description": "<p>to be provided as query parameter (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "List",
            "description": "<p>name  list Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "cards",
            "description": "<p>cards in the list. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n    \"error\": false,\n    \"message\": \"new list createed successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"listId\": \"Wz7DzFeDC\",\n        \"userId\": \"fSa7gmc_o\",\n        \"cards\": [\n            {\n                \"title\": \"My first card\",\n                \"cardId\": \"huytrewqa\",\n                \"subcard\": [\n                    {\n                        \"Cardtitle\": \"My first card\",\n                        \"subCardTitle\": \"sub card of my first card\"\n                    },\n                    {\n                        \"Cardtitle\": \"My first card\",\n                        \"subCardTitle\": \"2nd sub card of my first card\"\n                    }\n                ]\n            }\n        ],\n        \"createdOn\": \"2018-08-10T17:40:15Z\",\n        \"_id\": \"5b6dcdffad8f662358c83a6b\",\n        \"listName\": \"Ankit test\",\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/listRoutes.js",
    "groupTitle": "List",
    "name": "PostApiV1ListCreate"
  },
  {
    "group": "List",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/list/delete",
    "title": "api to delete a list using list Id",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "query",
            "optional": false,
            "field": "authToken",
            "description": "<p>to be provided as query parameter (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>listId of the list (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n    \"error\": false,\n    \"message\": \"delete successfull\",\n    \"status\": 200,\n    \"data\": {\n        \"ok\": 1,\n        \"n\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/listRoutes.js",
    "groupTitle": "List",
    "name": "PostApiV1ListDelete"
  },
  {
    "group": "List",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/list/delete",
    "title": "api to delete a list using list Id",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "query",
            "optional": false,
            "field": "authToken",
            "description": "<p>to be provided as query parameter (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>listId of the list (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n    \"error\": false,\n    \"message\": \"delete successfull\",\n    \"status\": 200,\n    \"data\": {\n        \"ok\": 1,\n        \"n\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/listRoutes.js",
    "groupTitle": "List",
    "name": "PostApiV1ListDelete"
  },
  {
    "group": "List",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/list/getAll",
    "title": "api to get all lists of a user using user Id.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "query",
            "optional": false,
            "field": "authToken",
            "description": "<p>to be provided as query parameter (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n    \"error\": false,\n    \"message\": \"all lists found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"listId\": \"vNs-vITMl\",\n            \"userId\": \"CTJ9l6ruH\",\n            \"cards\": [\n                {\n                    \"title\": \"test card\",\n                    \"cardId\": \"f1-PL5eK-\",\n                    \"done\": \"\",\n                    \"subcard\": []\n                }\n            ],\n            \"createdOn\": \"2018-08-15T07:31:09Z\",\n            \"done\": \"(Done)\",\n            \"_id\": \"5b73d6bdb1d9131cb4c07113\",\n            \"listName\": \"gummm\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/listRoutes.js",
    "groupTitle": "List",
    "name": "PostApiV1ListGetall"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/getAll",
    "title": "api to get all users email addresses.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "query",
            "optional": false,
            "field": "authToken",
            "description": "<p>to be provided as query parameter (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"all user details found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"email\": \"j@j.com\"\n        },\n        {\n            \"email\": \"c@c.com\"\n        },\n        {\n            \"email\": \"m@m.com\"\n        },\n        {\n            \"email\": \"g@g.com\"\n        },\n        {\n            \"email\": \"u@u.com\"\n        }\n    }",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersGetall"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/getinfo/using/token/:token",
    "title": "api to get a user details using password reset token.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>reset token. (URL params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"user details found\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"QTWguvRkA\",\n        \"userType\": \"admin\",\n        \"firstName\": \"test\",\n        \"lastName\": \"Admin\",\n        \"email\": \"test-admin@gmail.com\",\n        \"countryCode\": 91,\n        \"mobileNumber\": 123,\n        \"createdOn\": \"2018-08-03T14:37:13.000Z\",\n        \"PasswordResetToken\": \"pd-vRnsjy\",\n        \"PasswordResetExpiration\": \"2018-08-03T18:25:24.841Z\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersGetinfoUsingTokenToken"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/add/frndRequest",
    "title": "api to send a friend request to a user using user Id.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "query",
            "optional": false,
            "field": "authToken",
            "description": "<p>to be provided as query parameter (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "frmUserId",
            "description": "<p>userId of the receipent of the friend request (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the sender of the friend request (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"list updated successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"wgr9hX1_Q\",\n        \"firstName\": \"c\",\n        \"lastName\": \"c\",\n        \"email\": \"w@w.com\",\n        \"mobileNumber\": 12,\n        \"countryCode\": 91,\n        \"createdOn\": \"2018-08-12T14:11:11.000Z\",\n        \"currentIndex\": 0,\n        \"listArr\": [],\n        \"friendReq\": [\n            {\n                \"userId\": \"wgr9hX1_Q\",\n                \"fromUserId\": \"cBJsTQui9\",\n                \"fromName\": \"c c\",\n                \"fromEmail\": \"i@i.com\"\n            },\n            {\n                \"userId\": \"wgr9hX1_Q\",\n                \"fromUserId\": \"cBJsTQui9\",\n                \"fromName\": \"c c\",\n                \"fromEmail\": \"i@i.com\"\n            }\n        ],\n        \"friendList\": [\n            {\n                \"userId\": \"wgr9hX1_Q\",\n                \"fromUserId\": \"fSa7gmc_o\",\n                \"fromName\": \"Ankit Anand\",\n                \"fromEmail\": \"b@b.com\"\n            },\n            {\n                \"userId\": \"wgr9hX1_Q\",\n                \"fromUserId\": \"fSa7gmc_o\",\n                \"fromName\": \"c c\",\n                \"fromEmail\": \"m@m.com\"\n            }\n        ],\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersAddFrndrequest"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/email/getUserDetails",
    "title": "api to get a user details using Email.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Email.",
            "description": "<p>(body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"user found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"userId\": \"3WRsctFZn\",\n            \"userType\": \"normal\",\n            \"firstName\": \"ankit\",\n            \"lastName\": \"anand\",\n            \"email\": \"ankit@gmail.com\",\n            \"countryCode\": 91,\n            \"mobileNumber\": 123,\n            \"createdOn\": \"2018-07-29T08:01:01.000Z\"\n        }\n    }",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersEmailGetuserdetails"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/getUser",
    "title": "api to get a user details using user ID.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>Id. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"user found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"userId\": \"3WRsctFZn\",\n            \"userType\": \"normal\",\n            \"firstName\": \"ankit\",\n            \"lastName\": \"anand\",\n            \"email\": \"ankit@gmail.com\",\n            \"countryCode\": 91,\n            \"mobileNumber\": 123,\n            \"createdOn\": \"2018-07-29T08:01:01.000Z\"\n        }\n    }",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersGetuser"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for user login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Login successfull\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZGQiOiJWSDlrMUpUWnIiLCJpYXQiOjE1MzMzMDcyNTQzOTAsImV4cCI6MTUzMzM5MzY1NCwic3ViIjoiYXV0aFRva2VuIiwiaXNzIjoiZWRDaGF0IiwiZGF0YSI6eyJ1c2VySWQiOiJsTDgxbUtZcWciLCJ1c2VyVHlwZSI6Im5vcm1hbCIsImZpcnN0TmFtZSI6IkFua2l0IiwibGFzdE5hbWUiOiJBbmFuZCIsImVtYWlsIjoiYW5hYW5raXQ5OTJAZ21haWwuY29tIiwiY291bnRyeUNvZGUiOjkxLCJtb2JpbGVOdW1iZXIiOjg4ODQzODMxMzEsIlBhc3N3b3JkUmVzZXRUb2tlbiI6InBkLXZSbnNqeSIsIlBhc3N3b3JkUmVzZXRFeHBpcmF0aW9uIjoiMjAxOC0wOC0wM1QxODoyNToyNC44NDFaIn19.ScC_Lw4ktqdCLs7rcnQn2LYwe95YJDO2uViL1lYyusA\",\n        \"userDetails\": {\n            \"userId\": \"lL81mKYqg\",\n            \"userType\": \"normal\",\n            \"firstName\": \"Ankit\",\n            \"lastName\": \"Anand\",\n            \"email\": \"anaankit992@gmail.com\",\n            \"countryCode\": 91,\n            \"mobileNumber\": 8884383131,\n            \"PasswordResetToken\": \"pd-vRnsjy\",\n            \"PasswordResetExpiration\": \"2018-08-03T18:25:24.841Z\"\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/move",
    "title": "api to to move user from from friend request list to friend list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "query",
            "optional": false,
            "field": "authToken",
            "description": "<p>to be provided as query parameter (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "frmUserId",
            "description": "<p>user Id of the user to be moved. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>user Id of the user accepting the friend request. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User moved successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"wgr9hX1_Q\",\n        \"firstName\": \"c\",\n        \"lastName\": \"c\",\n        \"email\": \"w@w.com\",\n        \"mobileNumber\": 12,\n        \"countryCode\": 91,\n        \"createdOn\": \"2018-08-12T14:11:11.000Z\",\n        \"currentIndex\": 0,\n        \"listArr\": [],\n        \"friendReq\": [\n        ],\n        \"friendList\": [\n            {\n                \"userId\": \"wgr9hX1_Q\",\n                \"fromUserId\": \"fSa7gmc_o\",\n                \"fromName\": \"Ankit Anand\",\n                \"fromEmail\": \"b@b.com\"\n            },\n            {\n                \"userId\": \"wgr9hX1_Q\",\n                \"fromUserId\": \"fSa7gmc_o\",\n                \"fromName\": \"c c\",\n                \"fromEmail\": \"m@m.com\"\n            }\n        ],\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersMove"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/password/update",
    "title": "api to update a users password.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n    \"error\": false,\n    \"message\": \"update successfull\",\n    \"status\": 200,\n    \"data\": {\n        \"ok\": 1,\n        \"nModified\": 0,\n        \"n\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersPasswordUpdate"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/singup",
    "title": "api for new user singup.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>first Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "LastName",
            "description": "<p>last Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber  of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "countryCode",
            "description": "<p>countryCode of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n    \"error\": false,\n    \"message\": \"User Account successfully create\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"QTWguvRkA\",\n        \"userType\": \"admin\",\n        \"firstName\": \"test\",\n        \"lastName\": \"Admin\",\n        \"countryCode\": 91,\n        \"mobileNumber\": 123,\n        \"createdOn\": \"2018-08-03T14:37:13.000Z\",\n        \"PasswordResetToken\": \"\",\n        \"PasswordResetExpiration\": \"\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSingup"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/update",
    "title": "api to update user details using user ID.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>Id. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "any",
            "optional": false,
            "field": "all",
            "description": "<p>required fields for updating. (URL params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"all lists deleted\",\n    \"status\": 200,\n    \"data\": {\n        \"ok\": 1,\n        \"n\": 2\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersUpdate"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/using/email/updateUser",
    "title": "api to update user details using email.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "any",
            "optional": false,
            "field": "options",
            "description": "<p>to be updated. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n    \"error\": false,\n    \"message\": \"update successfull\",\n    \"status\": 200,\n    \"data\": {\n        \"ok\": 1,\n        \"nModified\": 0,\n        \"n\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersUsingEmailUpdateuser"
  }
] });
