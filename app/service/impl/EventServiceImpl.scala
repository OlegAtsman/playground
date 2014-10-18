package service.impl

import models.Event
import service.EventService
import play.api.Play.current
import play.api.db.slick.Config.driver.simple._
import play.api.db.slick.DB
import service.{Crypt, UserService}

import scala.slick.jdbc.JdbcBackend.Database.dynamicSession
import scala.util.{Failure, Success, Try}

/**
 * Created by alehatsman on 10/18/14.
 */
class EventServiceImpl extends EventService with EventQuery {

  override def save(event: Event): Try[Long] = DB.withDynTransaction {
    Try {
      events returning events.map(_.id) += event
    }
  }

  override def list: Try[List[Event]] = DB.withDynTransaction {
    Try {
      events.list
    }
  }

  override def createTest: Unit = DB.withDynTransaction {
    events ++= Seq(
      Event(Some(1), "Event1", Some("DD1"), 1),
      Event(Some(2), "Event2", Some("DD2"), 2)
    )
  }
}
