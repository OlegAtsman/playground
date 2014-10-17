package service

import org.mindrot.jbcrypt.BCrypt

/**
 * Created by Aleh_Atsman on 10/14/2014.
 */
trait Crypt {

  def crypt(s: String): String = {
    BCrypt.hashpw(s, BCrypt.gensalt())
  }

  def check(candidate: String, encrypted: String): Boolean = {
    BCrypt.checkpw(candidate, encrypted)
  }

}
