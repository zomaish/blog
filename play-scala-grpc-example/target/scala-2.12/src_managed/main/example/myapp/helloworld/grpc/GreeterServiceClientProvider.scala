

// Generated by Akka gRPC. DO NOT EDIT.
package example.myapp.helloworld.grpc

import javax.inject.{Inject, Singleton, Provider}

import scala.concurrent.ExecutionContext

import play.api.inject.ApplicationLifecycle

import akka.actor.ActorSystem
import akka.grpc.GrpcClientSettings
import akka.stream.Materializer

/**
 * Wired into DI by adding the generated AkkaGrpcClientModule to play.modules.enabled
 * in your application.conf
 */
@Singleton
class GreeterServiceClientProvider @Inject()(implicit sys: ActorSystem, mat: Materializer) extends Provider[GreeterServiceClient]() {
  override def get(): GreeterServiceClient = {
    implicit val ec: ExecutionContext = sys.dispatcher
    GreeterServiceClient(GrpcClientSettings.fromConfig(GreeterService.name))
  }
}