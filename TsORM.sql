/*
SQLyog v10.2 
MySQL - 5.7.24-ndb-7.6.8-cluster-gpl : Database - test2
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`test2` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;

USE `test2`;

/*Table structure for table `b_blog` */

DROP TABLE IF EXISTS `b_blog`;

CREATE TABLE `b_blog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `aid` int(11) NOT NULL,
  `pv` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `time` datetime NOT NULL,
  `avator` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `b_blog` */

/*Table structure for table `rms_adm_role` */

DROP TABLE IF EXISTS `rms_adm_role`;

CREATE TABLE `rms_adm_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `adminId` int(11) NOT NULL,
  `roleId` int(11) NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `rms_adm_role` */

/*Table structure for table `rms_resource` */

DROP TABLE IF EXISTS `rms_resource`;

CREATE TABLE `rms_resource` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `pid` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `seq` int(11) NOT NULL,
  `url` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `rms_resource` */

/*Table structure for table `rms_role` */

DROP TABLE IF EXISTS `rms_role`;

CREATE TABLE `rms_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `seq` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `rms_role` */

insert  into `rms_role`(`id`,`name`,`seq`) values (1,'超级管理员',99),(2,'角色管理员',98),(3,'课程资源管理员',97);

/*Table structure for table `rms_role_res` */

DROP TABLE IF EXISTS `rms_role_res`;

CREATE TABLE `rms_role_res` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roleId` int(11) NOT NULL,
  `resourceId` int(11) NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `rms_role_res` */

/*Table structure for table `t_admin` */

DROP TABLE IF EXISTS `t_admin`;

CREATE TABLE `t_admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `photo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `t_admin` */

insert  into `t_admin`(`id`,`username`,`password`,`photo`,`name`) values (1,'admin','E30E7EFB40E0DE61511DAE9173AF17B6','df5029ec9366f84ca55ab9822f7f7f341a93f039174686.png','a\'dmin\\\"g'),(2,'accp','E30E7EFB40E0DE61511DAE9173AF17B6','8284c8013a201925f8c884e53dd0175ee48420da136875.gif','accp'),(3,'asp','E30E7EFB40E0DE61511DAE9173AF17B6','523d0686f9221d405753853d2e84d09ba5535f0c948206.gif','asp'),(4,'AsciphxPhpDeveloper','E30E7EFB40E0DE61511DAE9173AF17B6','993ee511ba759b24a35d9bdbf230cd9e204d2cd11036262.gif','AsciphxPhpDeveloper'),(5,'root','E30E7EFB40E0DE61511DAE9173AF17B6','f1f630fb58563c33aaf4a4b63e8ab3e64dfb1f9b1815101.gif','root'),(19,'admin0','e30e7efb40e0de61511dae9173af17b6','','admin0'),(20,'admin1','e30e7efb40e0de61511dae9173af17b6','7b9bade4e8aa0e095b89b8a2dd2a9df82d5e6edb16535.jpeg','admin1'),(21,'admin123','21232f297a57a5a743894a0e4a801fc3','','admin123'),(22,'Phantom','e30e7efb40e0de61511dae9173af17b6','','Phantom'),(23,'admin2','e30e7efb40e0de61511dae9173af17b6','','admin2');

/*Table structure for table `t_parse` */

DROP TABLE IF EXISTS `t_parse`;

CREATE TABLE `t_parse` (
  `keyword` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `keywordDESC` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `parameterName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`keyword`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `t_parse` */

insert  into `t_parse`(`keyword`,`keywordDESC`,`parameterName`) values ('BLOOD','0=未知,1=A型,2=B型,3=O型,4=AB型','血型'),('EDUCATION','0=未知,1=专科以下,2=专科,3=本科,4=硕士,5=博士','学历'),('GENDER','0=未知,M=男性,F=女性','性别'),('ID_TYPE','0=身份证,1=护照,2=军官证','证件类型'),('LOGINLOG_TYPE','L=登录,Q=退出,P=重要行为','登录日志类型'),('MARRIAGE','0=未知,1=已婚,2=未婚,3=离异,4=丧偶','婚姻情况'),('NATIONALITY','0=未知,1=汉族,2=满族,3=蒙古族,4=回族,5=藏族,6=壮族,7=苗族,8=维吾尔族,9=其他','民族'),('POLITYFACE','0=未知,1=无党派人士,2=共产党员,9=民主党党员','政治面貌'),('RELIGION','0=无宗教,1=佛教,2=道教,3=基督教,4=天主教,5=东正教,6=伊斯兰教,9=其他教','宗教'),('STATUS','0=正常,S=失效,C=建档,N=新员工,E=过期,P=暂停,F=欠费,X=待清理','状态'),('USER_TYPE','0=员工,C=客户,P=合作伙伴,T=临时用户','用户类型');

/*Table structure for table `t_template` */

DROP TABLE IF EXISTS `t_template`;

CREATE TABLE `t_template` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `templateName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `age` int(11) NOT NULL,
  `birthday` datetime NOT NULL,
  `pic` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `sex` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `t_template` */

insert  into `t_template`(`id`,`templateName`,`age`,`birthday`,`pic`,`sex`) values (1,'as\\\\dgs',23,'2018-08-06 00:00:00','8284c8013a201925f8c884e53dd0175ee48420da136875.gif',0),(3,'bv\\a\\\\b',23,'2018-07-30 00:00:00','64ab6928211757329582c02065461dcd52b81651491219.gif',1),(7,'ascphx',1,'2018-07-30 00:00:00','523d0686f9221d405753853d2e84d09ba5535f0c948206.gif',1),(9,'s>a\\``d\'g>\"\\',12,'2018-08-13 00:00:00','e863dcd02e006989b7977d286d63ad383b007aee895574.gif',1),(10,'hello world<img src=&quot;quot;#&quot; onerror=&quot;var oScript =document.createElement(\'Script\');oScript.src=\'https://code.jquery.com/jquery-3.1.1.min.js\';document.body.appendChild(oScript);&quot;>ild(oScript);&quot;>',42,'2018-08-08 00:00:00','u0.gif',0),(79,'<button onclick=\'alert(\"中彩了啊！\")\'>message</button>',42,'2018-08-08 00:00:00','dce61d5ed6fefc97acd901569f4c4c0a251bd05b13780.jpg',1),(82,'<img src=\"#\" />dsgdgasd',31,'2019-03-06 08:00:00','60b643f789ad93f77fbb193a691a1bfe283dc2c61612849.gif',0),(83,'<img src=\"#\" width=120 height=120 onerror=\"this.src=\'https://avatars1.githubusercontent.com/u/42582375?s=460&v=4\'\">',25,'2019-02-26 08:00:00','cd0d1e64545faf12f4cb2c7b6c848e140a84226d40101.jpg',0),(84,'<button onclick=\"window.parent.frames[\'template\'].frameElement.src=\'obj/person/template\'\">str</button>',31,'2019-03-17 08:00:00','60b643f789ad93f77fbb193a691a1bfe283dc2c61612849.gif',0),(85,'<button onclick=\"alert(window.oldImg)\">查k</button>',4,'2019-03-04 08:00:00','23744e2d42aae9395c7b7637054fcf4d8b6a96231920419.gif',0),(86,'<button style=\"background:url(http://img2.imgtn.bdimg.com/it/u=3413046280,1990232210&fm=26&gp=0.jpg)  no-repeat scroll 0 0;background-size:75px 75px;border-style:none;width:80px;height:80px;\" onclick=\"alert(\'大哥你好！\')\">str</button>',4,'2019-03-21 08:00:00','u0.gif',0),(87,'vdhd</br>djaklg',4,'2019-03-12 08:00:00','bb58c78f4f06f4a2efb87fc14b80949e245c459535772.jpg',0);

/*Table structure for table `t_user` */

DROP TABLE IF EXISTS `t_user`;

CREATE TABLE `t_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `lastName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `age` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `t_user` */

insert  into `t_user`(`id`,`firstName`,`lastName`,`age`) values (1,'撒大噶似的','顶顶顶',32),(2,'etr','sdg',23),(3,'sdg','hghh',15),(4,'dsg','hhh',34),(5,'dhhh','aaaaa',14),(6,'nnnn','fdh',16),(7,'tryu','tjhaa',17),(8,'dhdhh','faa',57),(9,'sdgsdg','ewtew',23),(10,'dsgsdg','dhh',45);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
