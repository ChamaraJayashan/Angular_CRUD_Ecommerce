-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 02, 2024 at 04:47 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bigbasket`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryId` int(11) NOT NULL,
  `categoryName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryId`, `categoryName`) VALUES
(1, 'Fruits'),
(2, 'Vegetables');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productId` int(11) NOT NULL,
  `productName` varchar(255) DEFAULT NULL,
  `productPrice` decimal(10,2) DEFAULT NULL,
  `productShortName` varchar(255) DEFAULT NULL,
  `productDescription` text DEFAULT NULL,
  `createdDate` datetime DEFAULT current_timestamp(),
  `deliveryTimeSpan` varchar(255) DEFAULT NULL,
  `productImageUrl` varchar(255) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productId`, `productName`, `productPrice`, `productShortName`, `productDescription`, `createdDate`, `deliveryTimeSpan`, `productImageUrl`, `categoryId`) VALUES
(68, 'Banana', 100.00, 'Banana', 'Elongated, edible fruit produced by several kinds of large herbaceous flowering plants in the genus Musa', '2024-12-02 05:26:37', '3 Days', 'https://tse3.mm.bing.net/th?id=OIP.DzzBtp9wRuY1VocmOurZ7gHaJE&pid=Api&P=0&h=220', 1),
(69, 'Apple', 150.00, 'Apple', 'Apples contain key nutrients, including fiber and antioxidants. They may offer health benefits, including lowering blood sugar levels and benefitting heart health.', '2024-12-02 05:35:26', '5 Days', 'https://tse1.mm.bing.net/th?id=OIP.j1_y6Mjvzy5ORzCzm5GVHQHaGt&pid=Api&P=0&h=220', 1),
(73, 'Orange', 70.00, 'orangr', 'The orange, also called sweet orange to distinguish it from the bitter orange, is the fruit of a tree in the family Rutaceae.', '2024-12-02 12:57:10', '3 days', 'https://tse2.mm.bing.net/th?id=OIP.bu8imP4qgj7-IS4PmdUZ3wHaFQ&pid=Api&P=0&h=220', 1),
(74, 'Potato', 50.00, 'potato', 'The potato is a starchy tuberous vegetable native to the Americas that is consumed as a staple food in many parts of the world. ', '2024-12-02 13:03:05', '5 days', 'https://tse2.mm.bing.net/th?id=OIP.F0aQXnmCDGEadfNivihUAQHaF8&pid=Api&P=0&h=220', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productId`),
  ADD KEY `categoryId` (`categoryId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`categoryId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
