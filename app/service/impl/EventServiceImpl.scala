package service.impl

import java.sql.Timestamp

import models.{User, Event}
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

  override def filterByType(id: Long): Try[List[Event]] = DB.withDynTransaction {
    Try {
      filterByTypeQ(id).list
    }
  }

  override def findUsers(eventId: Long): Try[List[User]] = DB.withDynTransaction {
    Try {
      findUsersWhoWillGo(eventId).list
    }
  }

  override def createTest: Unit = DB.withDynTransaction {

    val startDate = new java.util.Date()

    events ++= Seq(
      Event(Some(1), "Imaguru", Some("Startup Club"), 1, 53.890664, 27.537312, new Timestamp(startDate.getTime), new Timestamp(startDate.getTime))
    )
  }
}
