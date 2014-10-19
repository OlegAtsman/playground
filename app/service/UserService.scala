package service

import models.User

import scala.util.Try

/**
 * Created by Aleh_Atsman on 10/14/2014.
 */
trait UserService {

  def save(user: User): Try[Long]

  def findByEmail(email: String): Try[User]

  def isValidCredentials(user: User): Boolean

  def findUsersWhoGoToEvent(eventId: Long): Try[List[User]]

  def createTestData

}
