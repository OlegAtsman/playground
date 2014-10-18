package controllers

import java.sql.Timestamp
import java.text.SimpleDateFormat

import models.{JsonEvent, Event}

/**
 * Created by alehatsman on 10/18/14.
 */
object Utils {

  val dateFormat: SimpleDateFormat  = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");

  implicit def string2Timestamp(string: String): Timestamp = {
    val parsedDate = dateFormat.parse(string)
    new java.sql.Timestamp(parsedDate.getTime)
  }
  implicit def timestamp2String(timestamp: Timestamp): String = {
    val date = new java.util.Date(timestamp.getTime)
    dateFormat.format(date)
  }
  implicit def jsonEvent2Event(jsonEvent: JsonEvent): Event = {
    Event.apply(
      jsonEvent.id,
      jsonEvent.title,
      jsonEvent.description,
      jsonEvent.eventTypeId,
      jsonEvent.lat,
      jsonEvent.lon,
      jsonEvent.startDate,
      jsonEvent.endDate
    )
  }
  implicit def event2JsonEvent(event: Event): JsonEvent = {
    JsonEvent.apply(
      event.id,
      event.title,
      event.description,
      event.eventTypeId,
      event.lat,
      event.lon,
      event.startDate,
      event.endDate
    )
  }
  implicit def eventListtojsonEventList(eventList: List[Event]): List[JsonEvent] = {
    eventList.map(jsonEvent => {
      event2JsonEvent(jsonEvent)
    })
  }
  implicit def jsonEventList2eventList(jsonEvent: List[JsonEvent]): List[Event] = {
    jsonEvent.map(event => {
      jsonEvent2Event(event)
    })
  }

}
