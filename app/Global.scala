import com.google.inject.{AbstractModule, Guice}
import play.api.GlobalSettings
import service.UserService
import service.impl.UserServiceImpl

/**
 * Created by Aleh_Atsman on 10/14/2014.
 */
object Global extends GlobalSettings {
  val injector = Guice.createInjector(new AbstractModule {
    protected def configure(): Unit = {
      bind(classOf[UserService]).to(classOf[UserServiceImpl])
    }
  })
  override def getControllerInstance[A](controllerClass: Class[A]): A = injector.getInstance(controllerClass)
}
