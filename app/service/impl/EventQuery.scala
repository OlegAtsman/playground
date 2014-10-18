package service.impl

import models.EventTable

import scala.slick.lifted.TableQuery

/**
 * Created by alehatsman on 10/18/14.
 */
trait EventQuery {
  def events = TableQuery[EventTable]

}
