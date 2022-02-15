-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 14, 2022 at 02:12 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nextgate`
--

-- --------------------------------------------------------

--
-- Table structure for table `current_cultivation`
--

CREATE TABLE `current_cultivation` (
  `lotID` int(10) NOT NULL,
  `strainName` varchar(255) NOT NULL,
  `exitDate` date NOT NULL,
  `amount` int(6) NOT NULL,
  `grower` varchar(255) NOT NULL,
  `batchID` int(10) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `lottable`
--

CREATE TABLE `lottable` (
  `id` int(10) NOT NULL,
  `strain` varchar(255) NOT NULL,
  `exitDate` date NOT NULL,
  `expectedWeight` int(10) NOT NULL,
  `grower` varchar(255) NOT NULL,
  `batchNo` int(10) NOT NULL,
  `status` int(100) NOT NULL,
  `type` varchar(255) NOT NULL,
  `seed` varchar(255) NOT NULL,
  `growingMethod` varchar(255) NOT NULL,
  `organicNutrition` varchar(255) NOT NULL,
  `expectedYield` varchar(100) NOT NULL,
  `vegDate` date NOT NULL,
  `flowerDate` date NOT NULL,
  `harvestDate` date NOT NULL,
  `curingDate` date NOT NULL,
  `packageDate` date NOT NULL,
  `shippingDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `current_cultivation`
--
ALTER TABLE `current_cultivation`
  ADD PRIMARY KEY (`lotID`);

--
-- Indexes for table `lottable`
--
ALTER TABLE `lottable`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `current_cultivation`
--
ALTER TABLE `current_cultivation`
  MODIFY `lotID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lottable`
--
ALTER TABLE `lottable`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `lottable`
--
ALTER TABLE `lottable`
  ADD CONSTRAINT `lottable_ibfk_1` FOREIGN KEY (`id`) REFERENCES `current_cultivation` (`lotID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
