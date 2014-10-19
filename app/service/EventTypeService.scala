package service

import models.EventType

import scala.util.Try

/**
 * Created by alehatsman on 10/18/14.
 */
trait EventTypeService {
  def save(eventType: EventType): Try[Long]

  def createTestData
}
