class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
  helper_method :signed_in?, :current_user

  private

  def signed_in?
    !!current_user
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:token])
  end

  def sign_in!(user)
    @current_user = user
    session[:token] = user.reset_token!
  end

  def sign_out!
    session[:token] = nil
    current_user.try(:reset_token!)
    @current_user = nil
  end

  def require_signed_in!
    redirect_to new_session_url unless signed_in?
  end

end
