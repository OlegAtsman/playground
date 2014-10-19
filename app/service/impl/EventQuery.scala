package service.impl

import models.{EventTable, UserEventTable, UserTable}
import play.api.db.slick.Config.driver.simple._

import scala.slick.lifted.TableQuery

/**
 * Created by alehatsman on 10/18/14.
 */
trait EventQuery {
  def events = TableQuery[EventTable]
  def userEvents = TableQuery[UserEventTable]
  def users = TableQuery[UserTable]

  def filterByTypeQ(id: Long) = {
    events.filter(_.eventTypeId === id)
  }

  def findUsersWhoWillGo(eventId: Long) = {
    for {
      userEvent <- userEvents if userEvent.eventId === eventId
      user <- users if user.id === userEvent.userId
    } yield user
  }
}
