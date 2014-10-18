package service.impl

import models.Event
import play.api.Play.current
import play.api.db.slick.Config.driver.simple._
import play.api.db.slick.DB
import service.EventService

import scala.slick.jdbc.JdbcBackend.Database.dynamicSession
import scala.util.Try

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
      Event(Some(1), "Imaguru", Some("Startup Club"), 1, 53.890664,27.537312)
    )
  }
}
