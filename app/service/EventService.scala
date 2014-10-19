package service

import models.{User, Event}

import scala.util.Try

/**
 * Created by alehatsman on 10/18/14.
 */
trait EventService {

  def save(event: Event): Try[Long]

  def list: Try[List[Event]]

  def filterByType(id: Long): Try[List[Event]]

  def addUserToEvent(eventId: Long, email: String): Try[Long]

  def removeUserFromEvent(eventId: Long, email: String): Try[Int]

  def createTestData

}
