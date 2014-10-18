package service.impl

import models.EventTypeTable

import scala.slick.lifted.TableQuery

/**
 * Created by alehatsman on 10/18/14.
 */
trait EventTypeQuery {

  def eventTypes = TableQuery[EventTypeTable]

}
