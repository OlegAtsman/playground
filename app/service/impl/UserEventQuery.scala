package service.impl

import models.UserEventTable

import scala.slick.lifted.TableQuery
import play.api.db.slick.Config.driver.simple._

/**
 * Created by alehatsman on 10/19/14.
 */
trait UserEventQuery  {

  def userEvents = TableQuery[UserEventTable]

}
