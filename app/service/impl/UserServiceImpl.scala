package service.impl

import models.User
import org.mindrot.jbcrypt.BCrypt
import play.api.Play.current
import play.api.db.slick.Config.driver.simple._
import play.api.db.slick.DB
import service.{Crypt, UserService}

import scala.slick.jdbc.JdbcBackend.Database.dynamicSession
import scala.util.{Failure, Success, Try}
/**
 * Created by Aleh_Atsman on 10/14/2014.
 */
class UserServiceImpl extends UserService with UserQuery with Crypt {

  override def save(user: User): Try[Long] = DB.withDynTransaction {
    Try {
      val cryptUser = User(user.id, user.login, user.email, password = crypt(user.password), user.img)
      users returning users.map(_.id) += cryptUser
    }
  }

  override def findByEmail(email: String): Try[User] = DB.withDynTransaction {
    Try {
      findByEmailQ(email).first
    }
  }

  def findByLogin(login: String): Try[User] = DB.withDynTransaction {
    Try {
      findByLoginQ(login).first
    }
  }

  override def isValidCredentials(user: User): Boolean = DB.withDynTransaction {
    val maybeUser: Try[User] = user.login match {
      case Some(login) => findByLogin(login)
      case None => findByEmail(user.email)
    }
    maybeUser match {
      case Success(bdUser) => check(user.password, bdUser.password)
      case Failure(e) => false
    }
  }

  override def findUsersWhoGoToEvent(eventId: Long): Try[List[User]] = DB.withDynTransaction {
    Try {
      findUsersWhoGoToEventQ(eventId).list
    }
  }

  override def createTestData = DB.withDynTransaction {
    users ++= Seq(
      userToCryptUser(User(
        Some(0), Some("Oleg"), "olegruno@gmail.com", "1234", None
      )),
      userToCryptUser(User(
        Some(1), Some("Petr"), "petr@gmail.com", "1234", None
      ))
    )
  }

  def userToCryptUser(user: User) = {
    User(user.id, user.login, user.email, password = crypt(user.password), user.img)
  }

}
