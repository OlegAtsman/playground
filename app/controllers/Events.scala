package controllers

import javax.inject.Inject

import controllers.Utils._
import models.JsonEvent
import play.api.Logger
import play.api.libs.json.Json._
import play.api.libs.json.{JsError, Json}
import play.api.mvc.{Action, Controller}
import service.EventService

import scala.util.{Failure, Success}

/**
 * Created by alehatsman on 10/18/14.
 */
class Events @Inject()(eventService: EventService) extends Controller with Secured {

  implicit val eventFormat = Json.format[JsonEvent]

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

  def filter(id: Long) = Action { implicit request =>
    val eventList = eventService.filterByType(id)
    eventList match {
      case Success(l) => Ok(toJson(eventListtojsonEventList(l)))
      case Failure(e) => BadRequest(e.toString)
    }
  }

  def isIGo(eventId: Long) = withAuth { username => implicit r =>
    val maybeBool = eventService.isIGo(eventId, username)
    maybeBool match {
      case Success(b) => Ok(toJson(b))
      case Failure(e) => BadRequest(e.toString)
    }
  }

  def addUserToEvent(eventId: Long) = withAuth { username => implicit r =>
    val maybeId = eventService.addUserToEvent(eventId, username)
    maybeId match {
      case Success(id) => Ok(id.toString)
      case Failure(e) => Logger.info(e.toString); BadRequest(e.toString)
    }
  }

  def removeUserFromEvent(eventId: Long) = withAuth { username => implicit r =>
    val maybeRows = eventService.removeUserFromEvent(eventId, username)
    maybeRows match {
      case Success(rows) => Ok(rows.toString)
      case Failure(e) => Logger.info(e.toString); BadRequest(e.toString)
    }
  }

}
