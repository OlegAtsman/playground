import com.google.inject.{AbstractModule, Guice}
import models.EventType
import play.api.GlobalSettings
import service.{EventTypeService, EventService, UserService}
import service.impl.{EventTypeServiceImpl, EventServiceImpl, UserServiceImpl}

/**
 * Created by Aleh_Atsman on 10/14/2014.
 */
object Global extends GlobalSettings {
  val injector = Guice.createInjector(new AbstractModule {
    protected def configure(): Unit = {
      bind(classOf[UserService]).to(classOf[UserServiceImpl])
      bind(classOf[EventService]).to(classOf[EventServiceImpl])
      bind(classOf[EventTypeService]).to(classOf[EventTypeServiceImpl])
    }
  })
  override def getControllerInstance[A](controllerClass: Class[A]): A = injector.getInstance(controllerClass)
}
