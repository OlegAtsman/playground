package models

/**
 * Created by alehatsman on 10/17/14.
 */

import play.api.db.slick.Config.driver.simple._

case class EventType(id: Option[Long], title: String)

class EventTypeTable(tag: Tag) extends Table[EventType](tag, "EventType") {

  def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
  def title = column[String]("title", O.NotNull)

  def * = (id.?, title) <> (EventType.tupled, EventType.unapply)

}
