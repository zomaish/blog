import akka.grpc.gen.scaladsl.play._
import com.typesafe.sbt.packager.docker.{ Cmd, CmdLike, DockerAlias, ExecCmd }

name := "play-scala-grpc-example"
version := "1.0-SNAPSHOT"

// #grpc_play_plugins
// build.sbt
lazy val `play-scala-grpc-example` = (project in file("."))
  .enablePlugins(PlayScala)
  .enablePlugins(AkkaGrpcPlugin) // enables source generation for gRPC
  .enablePlugins(PlayAkkaHttp2Support) // enables serving HTTP/2 and gRPC
// #grpc_play_plugins
    .settings(
      akkaGrpcGeneratedLanguages := Seq(AkkaGrpc.Scala),
      // #grpc_client_generators
      // build.sbt
      akkaGrpcExtraGenerators += PlayScalaClientCodeGenerator,
      // #grpc_client_generators
      // #grpc_server_generators
      // build.sbt
      akkaGrpcExtraGenerators += PlayScalaServerCodeGenerator,
      // #grpc_server_generators
      PlayKeys.devSettings ++= Seq(
        "play.server.http.port" -> "disabled",
        "play.server.https.port" -> "9443",
        // Configures the keystore to use in Dev mode. This setting is equivalent to `play.server.https.keyStore.path`
        // in `application.conf`.
        "play.server.https.keyStore.path" -> "conf/selfsigned.keystore",
      )
    )
    .settings(
      // workaround to https://github.com/akka/akka-grpc/pull/470#issuecomment-442133680
      dockerBaseImage := "openjdk:8-alpine",
      dockerCommands  := 
        Seq.empty[CmdLike] ++
        Seq(
          Cmd("FROM", "openjdk:8-alpine"), 
          ExecCmd("RUN", "apk", "add", "--no-cache", "bash")
        ) ++
        dockerCommands.value.tail ,
      dockerAliases in Docker += DockerAlias(None, None, "play-scala-grpc-example", None),
      packageName in Docker := "play-scala-grpc-example",
    )

scalaVersion := "2.12.8"
scalacOptions ++= List("-encoding", "utf8", "-deprecation", "-feature", "-unchecked")

libraryDependencies += guice

// Test libraries
val playVersion = play.core.PlayVersion.current
val playGrpcVersion = "0.6.0"
libraryDependencies += "com.lightbend.play"      %% "play-grpc-scalatest" % playGrpcVersion % Test
libraryDependencies += "com.lightbend.play"      %% "play-grpc-specs2"    % playGrpcVersion % Test
libraryDependencies += "com.typesafe.play"       %% "play-test"           % playVersion     % Test
libraryDependencies += "com.typesafe.play"       %% "play-specs2"         % playVersion     % Test
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "4.0.1" % Test

// Force the Akka version to 2.5.20. Play 2.7.0 depends on Akka 2.5.19 and akka-grpc on Akka 2.5.20
// This explicit dependency is the only required to solve the cross-version warnings on sbt
libraryDependencies += "com.typesafe.akka" %% "akka-slf4j" % "2.5.20"

// Test Database
libraryDependencies += "com.h2database" % "h2" % "1.4.197"

// Testing libraries for dealing with CompletionStage...
libraryDependencies += "org.assertj"    % "assertj-core" % "3.6.2" % Test
libraryDependencies += "org.awaitility" % "awaitility"   % "2.0.0" % Test

// Make verbose tests
testOptions in Test := Seq(Tests.Argument(TestFrameworks.JUnit, "-a", "-v"))



// Documentation for this project:
//    sbt "project docs" "~ paradox"
//    open docs/target/paradox/site/main/index.html
lazy val docs = (project in file("docs"))
  .enablePlugins(ParadoxPlugin) 
