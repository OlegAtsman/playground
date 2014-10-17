package controllers

import javax.inject.Singleton

import play.api.Play.current
import play.api.db.slick._
import play.api.mvc._

@Singleton
class Application extends Controller {
  def index = DBAction { implicit rs =>
    Ok(views.html.main("Playground"))
  }
}