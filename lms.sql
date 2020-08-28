-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 28, 2020 at 03:59 AM
-- Server version: 10.2.14-MariaDB
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lms`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
CREATE TABLE IF NOT EXISTS `books` (
  `id` varchar(10) NOT NULL,
  `book_name` varchar(30) NOT NULL,
  `dept` varchar(20) NOT NULL,
  `avilablity` varchar(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `book_name`, `dept`, `avilablity`) VALUES
('cs-c1', 'C', 'CSE', '0'),
('cs-c2', 'C', 'CSE', '0'),
('cs-c3', 'C', 'CSE', '1'),
('cs-c4', 'C', 'CSE', '1'),
('cs-j1', 'JAVA', 'CSE', '1'),
('cs-j2', 'JAVA ', 'CSE', '1'),
('cs-j3', 'JAVA', 'CSE', '1'),
('cs-j4', 'JAVA', 'CSE', '1'),
('cs-d4', 'DS', 'CSE', '1'),
('cs-d3', 'DS', 'CSE', '1'),
('cs-d2', 'DS', 'CSE', '1'),
('cs-d1', 'DS', 'CSE', '1'),
('me-t1', 'Thermodynamics', 'ME', '0'),
('me-t2', 'Thermodynamics', 'ME', '1'),
('me-t3', 'Thermodynamics', 'ME', '1'),
('me-t4', 'Thermodynamics', 'ME', '1');

-- --------------------------------------------------------

--
-- Table structure for table `issued_book`
--

DROP TABLE IF EXISTS `issued_book`;
CREATE TABLE IF NOT EXISTS `issued_book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bid` varchar(20) NOT NULL,
  `phn` varchar(20) NOT NULL,
  `date` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `issued_book`
--

INSERT INTO `issued_book` (`id`, `bid`, `phn`, `date`) VALUES
(1, 'CS-c1', '8370969887', '2020-08-27'),
(11, 'cs-c2', '8370969887', '2020-08-28'),
(12, 'me-t1', '8888888888', '2020-08-28');

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
CREATE TABLE IF NOT EXISTS `member` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `email` varchar(20) NOT NULL,
  `phn` varchar(20) NOT NULL,
  `dept` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`id`, `name`, `email`, `phn`, `dept`) VALUES
(2, 'Debasish Mula', 'deb@gmail.com', '8370969887', 'cse'),
(3, 'Monisankar Jana', 'moni@gmail.com', '12345678901', 'ME'),
(21, 'Raju Sk', 'raju@gmail.com', '8974561230', 'CSE'),
(20, 'Bikram Shaw', 'bikram@gmail.com', '9876543210', 'cse'),
(22, 'Prosenjit Halder', 'prosen@gmail.com', '8888888888', 'ME');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
