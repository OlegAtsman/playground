package models

import play.api.db.slick.Config.driver.simple._

/**
 * Created by alehatsman on 10/19/14.
 */
case class UserEvent(id: Option[Long], userId: Long, eventId: Long)

class UserEventTable(tag: Tag) extends Table[UserEvent](tag, "UserEvent") {

  def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
  def userId = column[Long]("userId", O.NotNull)
  def eventId = column[Long]("eventId", O.NotNull)

  def user = foreignKey("userFK", userId, TableQuery[UserTable])(_.id)
  def event = foreignKey("eventFK", eventId, TableQuery[EventTable])(_.id)

  def * = (id.?, userId, eventId) <> (UserEvent.tupled, UserEvent.unapply)


}