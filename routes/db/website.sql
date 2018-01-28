/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 50720
 Source Host           : localhost:3306
 Source Schema         : website

 Target Server Type    : MySQL
 Target Server Version : 50720
 File Encoding         : 65001

 Date: 28/01/2018 16:12:42
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(400) COLLATE utf8_bin NOT NULL COMMENT '文章标题',
  `content` text COLLATE utf8_bin NOT NULL COMMENT '文章内容',
  `img` varchar(400) COLLATE utf8_bin NOT NULL COMMENT '文章封面图',
  `star` bigint(20) DEFAULT NULL COMMENT '点赞数量',
  `renum` bigint(20) DEFAULT NULL COMMENT '评论数量',
  `status` int(2) NOT NULL DEFAULT '1' COMMENT '文章状态1:有效 0 删除',
  `cid` int(20) NOT NULL COMMENT '文章所属分类id',
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of article
-- ----------------------------
BEGIN;
INSERT INTO `article` VALUES (2, '文章标题很长的', '内容更长啊  收到了房间里盛开的肌肤啊索朗多吉放辣椒水淀粉啊水电费', 'https://shopcdn.rjfittime.com/FntF_NbbqklbkQBwcNQKJCMQVdZp?imageView2/2/w/260', 23, 44, 1, 1, '2018-01-27 15:04:42');
INSERT INTO `article` VALUES (3, 'df', 'dfsdf', 'sdfs', 0, 0, 1, 1, '2018-01-28 12:24:52');
INSERT INTO `article` VALUES (4, 'dfsdfsdf', 'dfsdfasdfsdfsdf', 'sdfssdf', 0, 0, 1, 1, '2018-01-28 12:25:25');
INSERT INTO `article` VALUES (5, 'dfsdfsdfa中午本体哦', 'dfsdfasdfsd中文啊是芬兰进口， \'\';sdf\'asdf<>adffsdf', 'sdfssdf', 0, 0, 1, 1, '2018-01-28 12:26:16');
INSERT INTO `article` VALUES (6, '类目而啊', '文章内容\n好用的巴啦啦啦啦sdfsf\nasdf\'\'d', '封面图', 0, 0, 1, 2, '2018-01-28 13:09:11');
INSERT INTO `article` VALUES (7, '类目而2啊', '文章内容\n好用的巴啦啦啦啦sdfsf\nasdf\'\'d', '封面图', 0, 0, 0, 2, '2018-01-28 13:47:38');
INSERT INTO `article` VALUES (8, '类目而2234啊', '文章内容\n好用的巴啦啦啦啦sdfsf\nasdf\'\'d', '封面图', 0, 0, 1, 2, '2018-01-28 13:09:31');
INSERT INTO `article` VALUES (9, '类目而2234234', '文章内容\n好用的巴啦234啦啦啦sdfsf\nasdf\'\'d', '封面图234', 0, 0, 1, 2, '2018-01-28 13:09:38');
INSERT INTO `article` VALUES (10, '类目而2234234', '文章内容\n好用的巴啦234啦啦啦sdfsf\nasdf\'\'d', 'https://shopcdn.rjfittime.com/FkmM5xXkfIYX_4_myhMg7kfCsHgI?imageView2/2/w/260', 0, 0, 1, 2, '2018-01-28 13:10:09');
INSERT INTO `article` VALUES (11, '类目而2234234', '文章内容\n好用的巴啦234啦啦啦sdfsfhttps://shopcdn.rjfittime.com/FkmM5xXkfIYX_4_myhMg7kfCsHgI?imageView2/2/w/260\nasdf\'\'d', 'https://shopcdn.rjfittime.com/FkmM5xXkfIYX_4_myhMg7kfCsHgI?imageView2/2/w/260', 0, 0, 1, 2, '2018-01-28 13:10:13');
INSERT INTO `article` VALUES (12, '类目而2234234', '文章内容\n好用的巴啦234啦啦啦sdfsfhttps://shopcdn.rjfittime.com/FkmM5xXkfIYX_4_myhMg7kfCsHgI?imageView2/2/w/260\nasdf\'\'d\n\n<img src=\"https://shopcdn.rjfittime.com/FkmM5xXkfIYX_4_myhMg7kfCsHgI?imageView2/2/w/260\">', 'https://shopcdn.rjfittime.com/FkmM5xXkfIYX_4_myhMg7kfCsHgI?imageView2/2/w/260', 0, 0, 1, 2, '2018-01-28 13:10:24');
INSERT INTO `article` VALUES (13, 'jljlasd', '文章内容\n好用的巴啦234啦啦啦sdfsfhttps://shopcdn.rjfittime.com/FkmM5xXkfIYX_4_myhMg7kfCsHgI?imageView2/2/w/260\nasdf\'\'d\n\n<img src=\"https://shopcdn.rjfittime.com/FkmM5xXkfIYX_4_myhMg7kfCsHgI?imageView2/2/w/260\">', 'https://shopcdn.rjfittime.com/FkmM5xXkfIYX_4_myhMg7kfCsHgI?imageView2/2/w/260', 0, 0, 1, 1, '2018-01-28 13:10:31');
INSERT INTO `article` VALUES (14, 'jljlasd2', '文章内容\n好用的巴啦234啦啦啦sdfsfhttps://shopcdn.rjfittime.com/FkmM5xXkfIYX_4_myhMg7kfCsHgI?imageView2/2/w/260\nasdf\'\'d\n\n<img src=\"https://shopcdn.rjfittime.com/FkmM5xXkfIYX_4_myhMg7kfCsHgI?imageView2/2/w/260\">', 'https://shopcdn.rjfittime.com/FkmM5xXkfIYX_4_myhMg7kfCsHgI?imageView2/2/w/260', 0, 0, 1, 1, '2018-01-28 13:10:35');
INSERT INTO `article` VALUES (15, 'jljlasd23', '文章内容\n好用的巴啦234啦啦啦sdfsfhttps://shopcdn.rjfittime.com/FkmM5xXkfIYX_4_myhMg7kfCsHgI?imageView2/2/w/260\nasdf\'\'d\n\n<img src=\"https://shopcdn.rjfittime.com/FkmM5xXkfIYX_4_myhMg7kfCsHgI?imageView2/2/w/260\">', 'https://shopcdn.rjfittime.com/FkmM5xXkfIYX_4_myhMg7kfCsHgI?imageView2/2/w/260', 0, 0, 1, 1, '2018-01-28 13:10:38');
INSERT INTO `article` VALUES (16, 'jljlasd234', '文章内容\n好用的巴啦234啦啦啦sdfsfhttps://shopcdn.rjfittime.com/FkmM5xXkfIYX_4_myhMg7kfCsHgI?imageView2/2/w/260\nasdf\'\'d\n\n<img src=\"https://shopcdn.rjfittime.com/FkmM5xXkfIYX_4_myhMg7kfCsHgI?imageView2/2/w/260\">', 'https://shopcdn.rjfittime.com/FkmM5xXkfIYX_4_myhMg7kfCsHgI?imageView2/2/w/260', 0, 0, 1, 1, '2018-01-28 13:10:45');
INSERT INTO `article` VALUES (17, 'jljlasd2345', '文章内容\n好用的巴啦234啦啦啦sdfsfhttps://shopcdn.rjfittime.com/FkmM5xXkfIYX_4_myhMg7kfCsHgI?imageView2/2/w/260\nasdf\'\'d\n\n<img src=\"https://shopcdn.rjfittime.com/FkmM5xXkfIYX_4_myhMg7kfCsHgI?imageView2/2/w/260\">', 'https://shopcdn.rjfittime.com/FkmM5xXkfIYX_4_myhMg7kfCsHgI?imageView2/2/w/260', 0, 0, 0, 1, '2018-01-28 13:47:33');
INSERT INTO `article` VALUES (18, '吃大便的一群', 'http://127.0.0.1:3000/test', 'http://127.0.0.1:3000/test', 0, 0, 1, 1, '2018-01-28 15:24:32');
INSERT INTO `article` VALUES (19, '吃大便的一群2', 'http://127.0.0.1:3000/test', 'http://127.0.0.1:3000/test', 0, 0, 1, 2, '2018-01-28 15:24:40');
COMMIT;

-- ----------------------------
-- Table structure for cat
-- ----------------------------
DROP TABLE IF EXISTS `cat`;
CREATE TABLE `cat` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) COLLATE utf8_bin NOT NULL COMMENT '分类名称',
  `status` bigint(2) NOT NULL COMMENT '分类状态1:有效 0 无效',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of cat
-- ----------------------------
BEGIN;
INSERT INTO `cat` VALUES (1, '列姆112312312', 1);
INSERT INTO `cat` VALUES (2, '类目2234234', 1);
COMMIT;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `content` text COLLATE utf8_bin NOT NULL COMMENT '评论内容',
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '评论时间',
  `status` bigint(2) NOT NULL DEFAULT '1' COMMENT '评论状态1:正常 2 删除',
  `aid` bigint(20) NOT NULL COMMENT '评论文章id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of comment
-- ----------------------------
BEGIN;
INSERT INTO `comment` VALUES (1, '评论内容很长森德罗斯地方', '2018-01-27 15:05:39', 1, 2);
INSERT INTO `comment` VALUES (2, '轮评论而啊', '2018-01-27 15:05:51', 1, 2);
INSERT INTO `comment` VALUES (3, '普兰啊绝世独立福建省劳动是劳动纠纷克赖斯基地方', '2018-01-27 15:06:05', 1, 2);
INSERT INTO `comment` VALUES (4, '多多多多多操蛋', '2018-01-27 15:06:17', 1, 2);
INSERT INTO `comment` VALUES (5, '很多啊的方式来看待减肥了时间', '2018-01-27 15:06:34', 1, 2);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
