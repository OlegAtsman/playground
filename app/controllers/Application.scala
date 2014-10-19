package controllers

import javax.inject.{Inject, Singleton}

import play.api.Play.current
import play.api.db.slick._
import play.api.mvc._
import service.{EventTypeService, EventService, UserService}

@Singleton
class Application @Inject()
    (userService: UserService, eventService: EventService, eventTypeService: EventTypeService) extends Controller {
  def index = DBAction { implicit rs =>
    Ok(views.html.main("Playground"))
  }

  def createTestData = Action {
    userService.createTestData
    eventTypeService.createTestData
    eventService.createTestData
    Ok("r")
  }

}