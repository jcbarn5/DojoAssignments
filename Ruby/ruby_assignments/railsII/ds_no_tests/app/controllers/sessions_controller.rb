class SessionsController < ApplicationController


  def new
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      session[:user_id] = @user.id
      redirect_to "/secrets"
    else
      flash[:errors] = ['invalid combo']
      redirect_back
    end
  end

  def log_in
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to "/secrets/"
    else
      flash[:errors] = ['invalid email/password combo']
      redirect_to 'users/new'
    end
  end

  def destroy
    reset_session
    redirect_to "/users/new"
  end

  private
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end

end
