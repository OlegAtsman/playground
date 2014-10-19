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

  def findUsers(eventId: Long): Try[List[User]]

  def createTest

}
