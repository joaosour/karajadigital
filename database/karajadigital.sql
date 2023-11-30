CREATE DATABASE  IF NOT EXISTS `karajadigital` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `karajadigital`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: karajadigital
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `info_site`
--

DROP TABLE IF EXISTS `info_site`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `info_site` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `NOME` varchar(45) NOT NULL,
  `BIOGRAFIA` mediumtext NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `info_site`
--

LOCK TABLES `info_site` WRITE;
/*!40000 ALTER TABLE `info_site` DISABLE KEYS */;
/*!40000 ALTER TABLE `info_site` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `livro`
--

DROP TABLE IF EXISTS `livro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `livro` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codlivro` varchar(45) NOT NULL,
  `autorsobrenome` varchar(245) NOT NULL,
  `autornome` varchar(245) NOT NULL,
  `anopublicacao` varchar(45) NOT NULL,
  `titulo` varchar(245) NOT NULL,
  `complemento` varchar(245) NOT NULL,
  `tipodepublicacao` varchar(45) NOT NULL,
  `areadoconhecimento` varchar(245) NOT NULL,
  `autornaoiny` varchar(245) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `livro`
--

LOCK TABLES `livro` WRITE;
/*!40000 ALTER TABLE `livro` DISABLE KEYS */;
INSERT INTO `livro` VALUES (1,'AAAYTAI, D_1978_mkha','AYTAI','Desidério','1978','Um mito karajá: a história do arco-íris.','Publicações do Museu Municipal de Paulínia, n. 5. pp. 20-21.','Artigo em periódico, jornal ou revista','Antropologia','Autoria não iny'),(8,'AYTAI, D_1979_laibk','AYTAI','Desidério','1979','A linguagem de assobio dos índios Bororo e Karajá.','Publicações do Museu Municipal de Paulínia, n. 7. pp. 1-23.','Artigo em periódico, jornal ou revista','Antropologia','Autoria não iny'),(9,'ARAUJO, G_2016_qpfb','ARAÚJO','Gustavo O.','2016','Com quantos paus se faz uma boneca? – “entalhes” de uma etnografia da boneca de madeira karajá.','Dissertação de mestrado, PPGAS-FCS/UFG.','Dissertação de mestrado','Antropologia','Autoria não iny'),(10,'ALMEIDA, N_2010_ce','ALMEIDA','Natália Rita de','2010','“Da catequização para a educação”: uma análise da educação através da criação da Escola Estadual Indígena Maurehi (1990-2010).','Monografia de Graduação. UEG (Unidade Universitária Cora Coralina, Goiás, GO).','Monografia de graduação','História','Autoria não iny'),(11,'BONILLA, O_2000_rmb','BONILLA','Oiara','2000','Reproduzindo-se no mundo dos brancos: Estruturas KARAJÁ em Porto Txuiri (Ilha do Bananal – Tocantins).','Dissertação de mestrado, PPGAS-Museu Nacional/UFRJ. 102 pp.','Dissertação de mestrado','Antropologia','Autoria não iny'),(12,'BALDUS, H_1937_mkt','BALDUS','Herbet','1937','Mitologia Karajá e Tereno.','Em: Ensaios de Etnologia Brasileira. São Paulo; Rio de Janeiro; Recife: Companhia Editora Nacional. pp. 187-275.','Capítulo de Livro','Antropologia','Autoria não iny'),(13,'CASTRO FARIA, L_1979_fhaik','CASTRO FARIA','LUIS','1979','La figura humana em el arte de los indios karajá.','Revista de Cultura Brasileña, nº 48.','Artigo em periódico, jornal ou revista','Antropologia','Autoria não iny');
/*!40000 ALTER TABLE `livro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(245) NOT NULL,
  `usuario` varchar(45) NOT NULL,
  `senha` varchar(45) NOT NULL,
  `email` varchar(245) NOT NULL,
  `usuario_admin` tinyint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Joao Victor','JV','1','joao@gmail.comv',1),(14,'MariaaAaAA','JOAO','444','joao@gmail.blog',0),(15,'JOAO','JOAO','1234','jjas@gamcoms',1),(20,'Maria','JV23','22','joao@gmail.blog',1),(22,'João Victor de Sousa Nascimento','JOAOVS','russo~~cmt','joaovictorsousa45@gmail.com',1),(31,'Maria','JV234','22','joao@gmail.blog',1),(32,'Maria','JV2341','22','joao@gmail.blog',1),(33,'Tested','TESTEESx','1','tetes@gs.com',1),(34,'João Victor de Sousa Nascimento','JOAOVSn','russo~~cmt','joaovictorsousa45@gmail.com',0),(35,'MariaaAaAA','JOAO2','444','joao@gmail.blog',0),(36,'JOAOa','JOAOO','1234','jjas@gamcoms',1),(37,'JOAO','JOAOA','1234','jjas@gamcoms',1),(38,'JOAO','JV3','1234','jjas@gamcoms',1),(39,'JOAO','JV4','1234','jjas@gamcoms',1),(40,'JOAO','JV5','1234','jjas@gamcoms',1),(49,'Joao','JV10','123','JV10@GMAIL.COM',0),(50,'Joao','JV15','123','JV10@GMAIL.COM',0),(55,'Rennan','RENAN','renan','renan@ufopa.com.br',1),(56,'JOAO VICTOR','JV6SS','1234','joao@gmail.com',1),(57,'JOAOSD','JV61','1234','jjas@gamcomsSD',1),(58,'JOAO','JV6','1234','jjas@gamcoms',1);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-30  1:25:56
