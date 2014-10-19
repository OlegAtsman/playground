package controllers

import javax.inject.Inject

import models.User
import play.api.libs.json.Json
import play.api.libs.json.Json._
import play.api.mvc.{Security, Action, Controller}
import service.UserService

import scala.util.{Failure, Success}

/**
 * Created by Aleh_Atsman on 10/14/2014.
 */
class Users @Inject()(userService: UserService) extends Controller with Secured {
  implicit val userFormat = Json.format[User]

  def create = Action(parse.json) { implicit r =>
    r.body.validate[User].map { user =>
      val maybeId = userService.save(user)
      maybeId match {
        case Success(id) => Ok(toJson(id))
        case Failure(e) => BadRequest("Can not save file" + e.toString)
      }
    }.getOrElse {
      BadRequest("Invalid Json")
    }
  }

  def login = Action(parse.json) { implicit r =>
    r.body.validate[User].map { user =>
      if(userService.isValidCredentials(user)) {
        Ok("Authorized").withSession(Security.username -> user.email)
      } else {
        Unauthorized("Invalid credentials")
      }
    }.getOrElse {
      BadRequest("Invalid Json")
    }
  }
  def logout = Action {
    Ok.withNewSession
  }

  def getUserProfile = withAuth { username => implicit r =>
    val maybeUser = userService.findByEmail(username)
    maybeUser match {
      case Success(user) => Ok(toJson(user))
      case Failure(e) => BadRequest(e.toString)
    }
  }

  def findUsersWhoGoToEvent(eventId: Long) = Action {
    val users = userService.findUsersWhoGoToEvent(eventId)
    users match {
      case Success(list) => Ok(toJson(list))
      case Failure(e) => BadRequest(e.toString)
    }
  }

  def test = withAuth { username => implicit r =>
    Ok("Auth OK!")
  }
  
}
