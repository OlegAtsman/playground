package models

/**
 * Created by Aleh_Atsman on 10/16/2014.
 */

import play.api.db.slick.Config.driver.simple._

case class Event(id: Option[Long], title: String, description: Option[String], eventTypeId: Long, lat: Double, lon: Double)

class EventTable(tag: Tag) extends Table[Event](tag, "Event") {

  def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
  def title = column[String]("title", O.NotNull)
  def description = column[String]("description", O.Nullable)
  def eventTypeId = column[Long]("eventTypeId", O.NotNull)
  def lat = column[Double]("lat", O.NotNull)
  def lon = column[Double]("lon", O.NotNull)

  def eventType = foreignKey("eventTypeFK", eventTypeId, TableQuery[EventTypeTable])(_.id)

  def * = (id.?, title, description.?, eventTypeId, lat, lon) <> (Event.tupled, Event.unapply)

}