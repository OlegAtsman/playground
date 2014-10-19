package service.impl

import models.{EventTable, UserEventTable, UserTable}
import play.api.db.slick.Config.driver.simple._

import scala.slick.lifted.TableQuery

/**
 * Created by alehatsman on 10/18/14.
 */
trait EventQuery {
  def events = TableQuery[EventTable]

  def filterByTypeQ(id: Long) = {
    events.filter(_.eventTypeId === id)
  }
}
