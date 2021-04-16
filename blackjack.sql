-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : ven. 16 avr. 2021 à 11:45
-- Version du serveur :  10.4.18-MariaDB
-- Version de PHP : 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `blackjack`
--

-- --------------------------------------------------------

--
-- Structure de la table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `user` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `accounts`
--

INSERT INTO `accounts` (`id`, `mail`, `user`, `password`, `date`) VALUES
(1, 'romain@marescaux.us', 'recd', '*86DC5FD7CA8641B6F4C364F6FB295B22C0943947', '2021-03-30'),
(2, 'romain@marescaux.us', 'recd', '*86DC5FD7CA8641B6F4C364F6FB295B22C0943947', '2021-03-30'),
(3, 'romain@marescaux.us', 'recd', '*86DC5FD7CA8641B6F4C364F6FB295B22C0943947', '2021-03-30'),
(4, 'romain@marescaux.us', 'recd', '*86DC5FD7CA8641B6F4C364F6FB295B22C0943947', '2021-03-30'),
(5, 'romain@marescaux.us', 'recd', '*86DC5FD7CA8641B6F4C364F6FB295B22C0943947', '2021-03-30'),
(6, 'romain@marescaux.us', 'recd', '*86DC5FD7CA8641B6F4C364F6FB295B22C0943947', '2021-03-30'),
(7, 'romain@marescaux.us', 'recd', '*6926334EB8FAC986949E3C5C328BE116D0648233', '2021-03-30'),
(8, 'romain@marescaux.us', 'recd', '*5E8875A63A9528B440F9A4DEDF1FEEEEA82D8350', '2021-03-30'),
(9, 'romain@marescaux.us', 'recd', '*8FA4AA6F87816EADB2296BCE8B8AEC73E30A62F0', '2021-03-30'),
(10, 'romain@marescaux.us', 'recd', '*B32F314927E2989303C55386BCAA80410B886611', '2021-03-30'),
(11, 'romain@marescaux.us', 'Maresd', '*962CB30376E7943ADA6A0A82848654C87F29D503', '2021-03-30'),
(12, 'romain@marescaux.us', 'evcdxzs', '*AC280AA738E0BB5777675D7975DBD07C9C119945', '2021-03-30'),
(13, 'romain@marescaux.us', 'recd', '$2y$10$M6k1nXwNUvcJB0Gn9EPO9u3JJKcbA13DqgOvBBSY1C3jioc7Xd7XW', '2021-03-31'),
(15, 'romain@marescaux.us', 'saz', '$2y$10$gsLSlShO8jbNggUnGYtElefR2Wp7Meki9BpV1RukUJNQRHujpUH/O', '2021-03-31'),
(16, 'romain@marescaux.us', 'zxds', '$2y$10$/aIPt2zZPooQ8n9tOZvOVebWZzP4FEIW8Z0RlBBVMYcV.B2cin8Bi', '2021-03-31'),
(17, 'romain@marescaux.us', 'Romain', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', '2021-03-31'),
(18, 'romain@marescaux.us', 'zeaxsbhxxx', '123', '2021-03-31'),
(25, 'romain@marescaux.us', 'Test', '51eac6b471a284d3341d8c0c63d0f1a286262a18', '2021-04-15'),
(26, 'romain@marescaux.us', 'Test', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', '2021-04-15'),
(27, 'romain@marescaux.us', 'lol', '51eac6b471a284d3341d8c0c63d0f1a286262a18', '2021-04-15');

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE `admin` (
  `user` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `time_pub` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `admin`
--

INSERT INTO `admin` (`user`, `password`, `time_pub`) VALUES
('admin', 'admin', '20');

-- --------------------------------------------------------

--
-- Structure de la table `jetons`
--

CREATE TABLE `jetons` (
  `idjoueur` int(11) NOT NULL,
  `jeton1` varchar(255) NOT NULL,
  `jeton5` varchar(255) NOT NULL,
  `jeton10` varchar(255) NOT NULL,
  `jeton20` varchar(255) NOT NULL,
  `jeton50` varchar(255) NOT NULL,
  `total` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `jetons`
--

INSERT INTO `jetons` (`idjoueur`, `jeton1`, `jeton5`, `jeton10`, `jeton20`, `jeton50`, `total`) VALUES
(2, '10', '10', '12', '10', '10', '18510'),
(3, '10', '10', '10', '10', '10', '1860'),
(4, '10', '10', '10', '10', '10', '18510'),
(5, '10', '10', '10', '10', '10', '1860'),
(6, '10', '10', '10', '10', '10', '18510'),
(7, '10', '10', '10', '10', '10', '1860'),
(8, '10', '10', '10', '10', '10', '18510'),
(9, '10', '10', '10', '10', '10', '1860'),
(10, '10', '10', '10', '10', '10', '18510'),
(11, '10', '10', '10', '10', '10', '1860'),
(12, '10', '10', '10', '10', '10', '18510'),
(13, '10', '10', '10', '10', '10', '1860'),
(14, '10', '10', '10', '10', '10', '18510'),
(15, '10', '10', '10', '10', '10', '1860'),
(16, '10', '10', '10', '10', '10', '18510'),
(17, '13', '4', '9', '10', '15', '413'),
(18, '10', '10', '10', '10', '10', '1860'),
(25, '10', '10', '10', '10', '10', '1860'),
(26, '10', '10', '10', '10', '10', '1860');

-- --------------------------------------------------------

--
-- Structure de la table `money`
--

CREATE TABLE `money` (
  `transaction` int(11) NOT NULL,
  `idjoueur` varchar(255) NOT NULL,
  `+10` varchar(255) DEFAULT NULL,
  `+100` varchar(255) DEFAULT 'Non',
  `+500` varchar(255) DEFAULT 'Non',
  `€` decimal(10,2) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `money`
--

INSERT INTO `money` (`transaction`, `idjoueur`, `+10`, `+100`, `+500`, `€`, `date`) VALUES
(1, '17', 'Oui', 'Non', 'Non', '0.10', '2021-04-15 20:00:04'),
(2, '17', 'Oui', 'Non', 'Non', '0.10', '2021-04-15 20:01:08'),
(3, '17', 'Non', 'Oui', 'Non', '1.00', '2021-04-15 20:04:31'),
(4, '17', 'Non', 'Non', 'Oui', '5.00', '2021-04-15 20:04:46');

-- --------------------------------------------------------

--
-- Structure de la table `victory`
--

CREATE TABLE `victory` (
  `idjoueur` int(11) NOT NULL,
  `player` varchar(255) NOT NULL DEFAULT '0',
  `dealer` varchar(255) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `victory`
--

INSERT INTO `victory` (`idjoueur`, `player`, `dealer`) VALUES
(1, '0', '0'),
(2, '0', '0'),
(3, '8', '2'),
(4, '1', '4'),
(5, '0', '0'),
(6, '1', '3'),
(7, '0', '0'),
(8, '0', '0'),
(9, '0', '0'),
(10, '0', '0'),
(11, '0', '0'),
(12, '0', '0'),
(13, '0', '0'),
(14, '0', '0'),
(15, '0', '0'),
(16, '0', '0'),
(17, '6', '0'),
(18, '0', '0'),
(24, '0', '0');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`user`);

--
-- Index pour la table `jetons`
--
ALTER TABLE `jetons`
  ADD PRIMARY KEY (`idjoueur`);

--
-- Index pour la table `money`
--
ALTER TABLE `money`
  ADD PRIMARY KEY (`transaction`);

--
-- Index pour la table `victory`
--
ALTER TABLE `victory`
  ADD PRIMARY KEY (`idjoueur`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT pour la table `jetons`
--
ALTER TABLE `jetons`
  MODIFY `idjoueur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT pour la table `money`
--
ALTER TABLE `money`
  MODIFY `transaction` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `victory`
--
ALTER TABLE `victory`
  MODIFY `idjoueur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
