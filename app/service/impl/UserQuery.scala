package service.impl

import models.{UserTable, User}

import scala.slick.lifted.TableQuery
import scala.util.Try
import play.api.db.slick.Config.driver.simple._
import play.api.db.slick._

/**
 * Created by Aleh_Atsman on 10/14/2014.
 */
trait UserQuery {

  def users = TableQuery[UserTable]

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

}
