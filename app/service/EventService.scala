package service

import models.Event

import scala.util.Try

/**
 * Created by alehatsman on 10/18/14.
 */
trait EventService {

  def save(event: Event): Try[Long]

  def list: Try[List[Event]]

  def createTest

}
