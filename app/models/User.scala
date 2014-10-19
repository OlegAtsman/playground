package models

/**
 * Created by Aleh_Atsman on 10/14/2014.
 */

import play.api.db.slick.Config.driver.simple._

case class User(id: Option[Long], login: Option[String], email: String, password: String, img: Option[String], firstname: String, lastname: String)

class UserTable(tag: Tag) extends Table[User](tag, "User") {
  def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
  def login = column[String]("login", O.Nullable)
  def email = column[String]("email", O.NotNull)
  def password = column[String]("password", O.NotNull)
  def img = column[String]("img", O.Nullable)
  def firstname = column[String]("firstname", O.NotNull)
  def lastname = column[String]("lastname", O.NotNull)

  def * = (id.?, login.?, email, password, img.?, firstname, lastname) <> (User.tupled, User.unapply)
}