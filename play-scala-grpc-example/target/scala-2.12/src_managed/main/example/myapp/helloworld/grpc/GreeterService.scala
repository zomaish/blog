

// Generated by Akka gRPC. DO NOT EDIT.
package example.myapp.helloworld.grpc

import scala.concurrent.Future

import akka.NotUsed
import akka.stream.scaladsl.Source

trait GreeterService {
  
  def sayHello(in: example.myapp.helloworld.grpc.HelloRequest): Future[example.myapp.helloworld.grpc.HelloReply]
  
}

object GreeterService {
  val name = "helloworld.GreeterService"

  object Serializers {
    import akka.grpc.scaladsl.ScalapbProtobufSerializer
    
    val HelloRequestSerializer = new ScalapbProtobufSerializer(example.myapp.helloworld.grpc.HelloRequest.messageCompanion)
    
    val HelloReplySerializer = new ScalapbProtobufSerializer(example.myapp.helloworld.grpc.HelloReply.messageCompanion)
    
  }
}
