// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/zomaish/play-scala-grpc-example/conf/routes
// @DATE:Tue Apr 12 20:14:12 EDT 2022


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
