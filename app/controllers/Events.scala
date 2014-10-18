package controllers

import javax.inject.Inject

import models.{Event}
import play.api.libs.json.Json
import play.api.libs.json.Json._
import play.api.mvc.{Security, Action, Controller}
import service.{EventTypeService, EventService, UserService}

import scala.util.{Failure, Success}

/**
 * Created by alehatsman on 10/18/14.
 */
class Events @Inject()(eventService: EventService, eventTypeService: EventTypeService) extends Controller{

  implicit val eventFormat = Json.format[Event]

  def createTest = Action {
    //eventTypeService.createTest
    //eventService.createTest

    Ok("Created")
  }

  def list = Action {
    val es = eventService.list

    es match {
      case Success(list) => Ok(toJson(list))
      case Failure(e) => BadRequest(e.toString)
    }
  }

}
