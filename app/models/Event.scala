package models

/**
 * Created by Aleh_Atsman on 10/16/2014.
 */

import play.api.db.slick.Config.driver.simple._

case class Event(id: Option[Long], title: String, description: Option[String])

class EventTable(tag: Tag) extends Table[Event](tag, "Event") {

  def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
  def title = column[String]("login", O.NotNull)
  def description = column[String]("description", O.Nullable)

  def * = (id.?, title, description.?) <> (Event.tupled, Event.unapply)

}