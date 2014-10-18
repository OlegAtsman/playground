package service.impl

import models.EventTable

import scala.slick.lifted.TableQuery
import scala.util.Try
import play.api.db.slick.Config.driver.simple._
import play.api.db.slick._

/**
 * Created by alehatsman on 10/18/14.
 */
trait EventQuery {
  def events = TableQuery[EventTable]

  def filterByTypeQ(id: Long) = {
    events.filter(_.eventTypeId === id)
  }
}
