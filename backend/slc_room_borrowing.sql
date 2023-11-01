-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 01, 2023 at 03:39 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `slc_room_borrowing`
--

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `room_number` varchar(10) NOT NULL CHECK (`room_number` regexp '^[0-9]{3}[A-Za-z]?$')
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`room_number`) VALUES
('601'),
('602'),
('603'),
('604'),
('605'),
('606'),
('608'),
('609'),
('610'),
('613'),
('614'),
('621'),
('622'),
('623'),
('624'),
('625'),
('626'),
('627'),
('628'),
('629'),
('630'),
('631'),
('706'),
('708'),
('710'),
('711A'),
('721'),
('722'),
('723'),
('725'),
('727'),
('729'),
('998'),
('999');

-- --------------------------------------------------------

--
-- Table structure for table `roomtransactions`
--

CREATE TABLE `roomtransactions` (
  `id` char(40) NOT NULL,
  `borrower_username` varchar(100) NOT NULL,
  `borrower_division` varchar(100) NOT NULL,
  `returner_username` varchar(100) DEFAULT NULL,
  `returner_division` varchar(100) DEFAULT NULL,
  `room_number` varchar(10) NOT NULL CHECK (`room_number` regexp '^[0-9]{3}[A-Za-z]?$'),
  `room_in` datetime NOT NULL,
  `room_out` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`room_number`);

--
-- Indexes for table `roomtransactions`
--
ALTER TABLE `roomtransactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `room_number` (`room_number`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `roomtransactions`
--
ALTER TABLE `roomtransactions`
  ADD CONSTRAINT `roomtransactions_ibfk_1` FOREIGN KEY (`room_number`) REFERENCES `rooms` (`room_number`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
