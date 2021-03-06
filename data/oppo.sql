SET NAMES UTF8;
DROP DATABASE IF EXISTS oppo;
CREATE DATABASE oppo CHARSET=UTF8;
USE oppo;

CREATE TABLE oppo_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32)
);
INSERT INTO oppo_user VALUES
(1, 'fengxi', '123'),
(2, 'honghong', '456');

CREATE TABLE oppo_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pname VARCHAR(64),
  price FLOAT(10,2),
  pic VARCHAR(128)
);
INSERT INTO oppo_product VALUES
(1,'R9s 4GB+64GB内存版 玫瑰金',2799.00,'images/R9smini1.png'),
(2,'OPPO自拍杆',99.00,'images/small01.jpg'),
(3,'蓝牙耳机Q13',199.00,'images/small02.jpg');

CREATE TABLE oppo_cart(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  userId INT
);
INSERT INTO oppo_cart VALUES(100, 1);

CREATE TABLE oppo_cart_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  cartId INT,
  productId INT,
  count INT
);
INSERT INTO oppo_cart_detail VALUES
(1, 100, 10, 3),
(2, 100, 15, 1),
(3, 100, 18, 2);