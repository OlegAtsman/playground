package models

/**
 * Created by Aleh_Atsman on 10/16/2014.
 */

import java.sql.Timestamp

import play.api.db.slick.Config.driver.simple._

case class JsonEvent(id: Option[Long], title: String, description: Option[String], eventTypeId: Long, lat: Double, lon: Double, startDate: String, endDate: String)

case class Event(id: Option[Long], title: String, description: Option[String], eventTypeId: Long, lat: Double, lon: Double, startDate: Timestamp, endDate: Timestamp)

class EventTable(tag: Tag) extends Table[Event](tag, "Event") {

  def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
  def title = column[String]("title", O.NotNull)
  def description = column[String]("description", O.Nullable)
  def eventTypeId = column[Long]("eventTypeId", O.NotNull)
  def lat = column[Double]("lat", O.NotNull)
  def lon = column[Double]("lon", O.NotNull)
  def startDate = column[Timestamp]("startDate", O.NotNull)
  def endDate = column[Timestamp]("endDate", O.NotNull)

  def eventType = foreignKey("eventTypeFK", eventTypeId, TableQuery[EventTypeTable])(_.id)

  def * = (id.?, title, description.?, eventTypeId, lat, lon, startDate, endDate) <> (Event.tupled, Event.unapply)

}