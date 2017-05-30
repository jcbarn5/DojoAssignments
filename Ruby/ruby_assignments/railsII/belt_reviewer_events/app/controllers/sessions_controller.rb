class SessionsController < ApplicationController

  def create
    @user = User.create(user_params)
    if @user.valid?
      session[:user_id] = @user.id
      redirect_to "/events"
    else
      flash[:errors] = ['invalid combo']
      redirect_to 'users/new'
    end
  end

  def log_in
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to "/events/"
    else
      flash[:errors] = ['invalid email/password combo']
      redirect_to '/users/index'
    end
  end

  def destroy
    reset_session
    redirect_to "/users/index"
  end

  private
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :location, :state, :password, :password_confirmation)
    end

end
