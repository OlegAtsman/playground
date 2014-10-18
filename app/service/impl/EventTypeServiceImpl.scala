package service.impl

import models.EventType
import service.EventTypeService
import play.api.Play.current
import play.api.db.slick.Config.driver.simple._
import play.api.db.slick.DB
import service.{Crypt, UserService}

import scala.slick.jdbc.JdbcBackend.Database.dynamicSession
import scala.util.{Failure, Success, Try}

/**
 * Created by alehatsman on 10/18/14.
 */
class EventTypeServiceImpl extends EventTypeService with EventTypeQuery {

  override def save(eventType: EventType): Try[Long] = DB.withDynTransaction {
    Try {
      eventTypes returning eventTypes.map(_.id) += eventType
    }
  }

  def createTest = DB.withDynTransaction {
    eventTypes ++= Seq(
      EventType(Some(0), "Place"),
      EventType(Some(1), "Football")
    )
  }

}
