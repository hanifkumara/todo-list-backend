-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 13, 2021 at 03:39 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_todolist`
--

-- --------------------------------------------------------

--
-- Table structure for table `labels`
--

CREATE TABLE `labels` (
  `id` varchar(128) NOT NULL,
  `label` varchar(191) NOT NULL,
  `description` varchar(191) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `labels`
--

INSERT INTO `labels` (`id`, `label`, `description`, `createdAt`, `updatedAt`) VALUES
('2406ccd4-6fc7-4499-b5e6-811720e61de3', 'Important', '-', '2021-03-13 02:24:02', '2021-03-13 02:24:02'),
('a3a1e957-c378-458e-a565-96f9f2b65047', 'Urgent', '-', '2021-03-13 02:23:35', '2021-03-13 02:23:35'),
('e082e9b2-567d-4ca1-90f3-5f5231e85ab9', 'Front End', 'learn and create simple projects using vue js, react js, angular and others', '2021-03-13 02:28:40', '2021-03-13 02:28:40');

-- --------------------------------------------------------

--
-- Table structure for table `todos`
--

CREATE TABLE `todos` (
  `id` varchar(128) NOT NULL,
  `idUser` varchar(128) NOT NULL,
  `idLabel` varchar(128) NOT NULL,
  `task` text NOT NULL,
  `completed` varchar(10) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `todos`
--

INSERT INTO `todos` (`id`, `idUser`, `idLabel`, `task`, `completed`, `createdAt`, `updatedAt`) VALUES
('75c792f7-b01b-4650-91dc-b827ba193f0e', '14108f2f-9993-4dd4-8dcf-a91e2902c127', '2406ccd4-6fc7-4499-b5e6-811720e61de3', 'Learn golang', NULL, '2021-03-13 02:33:44', '2021-03-13 02:33:44'),
('ff6abf36-6722-4c81-abb6-1f771e890608', '14108f2f-9993-4dd4-8dcf-a91e2902c127', 'a3a1e957-c378-458e-a565-96f9f2b65047', 'Complete the todolist web application', NULL, '2021-03-13 02:32:45', '2021-03-13 02:32:45');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(128) NOT NULL,
  `username` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(128) NOT NULL,
  `role` varchar(10) NOT NULL,
  `confirmation` tinyint(4) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `role`, `confirmation`, `createdAt`, `updatedAt`) VALUES
('14108f2f-9993-4dd4-8dcf-a91e2902c127', 'admin', 'admin@admin.com', '$2a$10$Ie.fU/UZm5.3fdbpiiE5QOtyeQu82jarQG/657N7mBR1w60XwOJji', 'admin', 1, '2021-03-11 07:45:50', '2021-03-12 01:02:22'),
('59fea83f-3981-41c9-8a19-c5bae74a2ba0', 'hanifkumaraaa', 'hanifkumara00@gmail.com', '$2a$10$Tf3JsvIkl0sCcLBUxreL/uYA0zkM5vvnckp5/mQLUgwYFQTa6pYIa', 'user', 1, '2021-03-12 23:48:34', '2021-03-12 23:48:34'),
('8cdb4f06-74d2-4adb-a2a2-a0c2c56595d7', 'fatnov14', 'fatnhoni@gmail.com', '$2a$10$djEkIUnILeVsvmsJybFPu.SgXU94aVhPXpSqrgefDh4j49KD1eyyS', 'user', 0, '2021-03-13 02:37:36', '2021-03-13 02:37:36'),
('d4de5291-9790-4380-9c9f-498587585ec3', 'satria', 'satria@gmail.com', '$2a$10$as2pMbW5vUWOBOeWgv8pmeizJ4RBqTRfCL7WDorqilDRyNuXUH5I.', 'user', 0, '2021-03-13 02:37:53', '2021-03-13 02:37:53'),
('f11459ab-dcce-4a86-b939-85bd4aba7340', 'kumarahanif', 'kumarahanif@gmail.com', '$2a$10$/8Z8Fr/SjFSdDrDx1gjJD.Yi65Ryj.6OIEEN0nc8NfHkRaRsThGFS', 'user', 1, '2021-03-13 02:29:04', '2021-03-13 02:29:04'),
('f8c1a028-e2b3-411c-bea4-1b2c5ad8d98c', 'kurniawan', 'kurniawan@gmail.com', '$2a$10$ynWSbSGLrYeaFys6gBNZF.3OVu.EMioxC1jzn4gdgKn23nB5tbOfO', 'user', 0, '2021-03-13 02:37:16', '2021-03-13 02:37:16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `labels`
--
ALTER TABLE `labels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `todos`
--
ALTER TABLE `todos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_label` (`idLabel`),
  ADD KEY `fk_user` (`idUser`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `todos`
--
ALTER TABLE `todos`
  ADD CONSTRAINT `fk_label` FOREIGN KEY (`idLabel`) REFERENCES `labels` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
