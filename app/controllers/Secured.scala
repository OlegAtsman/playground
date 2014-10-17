package controllers

import play.api.mvc._

/**
 * Created by Aleh_Atsman on 10/15/2014.
 */
trait Secured  {
  /**
   * Where to get the identification that the user is authorized.
   * Security.username is a key for a session value with username, email or etc.
   * @param request
   * @return user identification.
   */
  def username(request: RequestHeader): Option[String] = request.session.get(Security.username)

  /**
   * Redirects to login onUnauthorized users.
   * @param request
   * @return unauthorized result 401 for rest client.
   */
  def onUnauthorized(request: RequestHeader): Result = Results.Unauthorized

  /**
   * Action wrapper, checks is user authenticated.
   * @param anonymousFunction(function that user want to wrap by this action)
   * @return
   */
  def withAuth(anonymousFunction: => String => Request[AnyContent] => Result): EssentialAction = {
    Security.Authenticated(username, onUnauthorized) { user =>
      Action(request => anonymousFunction(user)(request))
    }
  }
}
