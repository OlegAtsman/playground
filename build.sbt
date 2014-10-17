name := """playground"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.1"

libraryDependencies ++= Seq(
  "com.google.inject" % "guice" % "3.0",
  "com.typesafe.play" %% "play-slick" % "0.8.0",
  "org.postgresql" % "postgresql" % "9.3-1102-jdbc41",
  "org.mindrot" % "jbcrypt" % "0.3m",
  jdbc,
  cache,
  ws
)
