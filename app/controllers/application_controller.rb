class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  protected
  def authenticate_user!
    if user_signed_in?
      super
    else
      redirect_to login_path, :notice => 'You must be logged in'
    end
  end

  private

  def after_sign_out_path_for(resource_or_scope)
    root_path
  end

end
