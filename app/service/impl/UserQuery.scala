package service.impl

import models.UserTable
import play.api.Logger
import play.api.db.slick.Config.driver.simple._

import scala.slick.lifted.TableQuery

/**
 * Created by Aleh_Atsman on 10/14/2014.
 */
trait UserQuery extends UserEventQuery {

  def users = TableQuery[UserTable]

  def findUserIdByEmailQ(email: String) = for {
    user <- users if user.email === email
  } yield user.id

  def findByEmailQ(email: String) = {
    users.filter(_.email === email)
  }

  def findByLoginQ(login: String) = {
    users.filter(_.login === login)
  }

  def findByLoginOrEmain(login: String) = {
    users.filter(u =>
      u.login === login || u.email === login
    )
  }

  def findUsersWhoGoToEventQ(eventId: Long) = {
    for {
      userEvent <- userEvents if userEvent.eventId === eventId
      user <- users if user.id === userEvent.userId
    } yield user
  }
}
