package controllers

import java.sql.Timestamp
import javax.inject.Inject

import models.{JsonEvent, Event}
import play.api.libs.json.{JsError, Json}
import play.api.libs.json.Json._
import play.api.mvc.{Action, Controller}
import service.{EventTypeService, EventService}
import Utils._
import scala.util.{Failure, Success}

/**
 * Created by alehatsman on 10/18/14.
 */
class Events @Inject()(eventService: EventService, eventTypeService: EventTypeService) extends Controller{

  implicit val eventFormat = Json.format[JsonEvent]

  def createTest = Action {
    eventTypeService.createTest
    eventService.createTest

    Ok("Created")
  }

  def list = Action {
    val es = eventService.list
    es match {
      case Success(list) => Ok(toJson(eventListtojsonEventList(list)))
      case Failure(e) => BadRequest(e.toString)
    }
  }

  def create = Action(parse.json) { implicit request =>
    request.body.validate[JsonEvent].map { event =>
      val maybeId = eventService.save(event)
      maybeId match {
        case Success(id) => Ok(toJson(id))
        case Failure(e) => BadRequest("Can not save event" + e.toString)
      }
    }.recoverTotal{
      e => println(e.toString)
        BadRequest("Detected error:"+ JsError.toFlatJson(e))
    }
  }

}
