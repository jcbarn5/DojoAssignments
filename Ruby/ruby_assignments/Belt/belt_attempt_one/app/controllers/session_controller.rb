class SessionController < ApplicationController


  def create
    @user = User.create(user_params)
    if @user.valid?
      session[:user_id] = @user.id
      redirect_to "/products"
    else
      flash[:errors] = ['invalid combo']
      redirect_to :back
    end
  end

  def log_in
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to "/products/"
    else
      flash[:errors] = ['invalid email/password combo']
      redirect_to :back
    end
  end

  def destroy
    reset_session
    redirect_to "/users/index"
  end

  private
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password)
    end
end
