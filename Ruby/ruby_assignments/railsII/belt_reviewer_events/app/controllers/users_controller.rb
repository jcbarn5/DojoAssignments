class UsersController < ApplicationController
  before_action :res_session, only: [:index]

  def index

  end

  def show
    @user = User.find(current_user)
  end

  def edit
  end

  def update
    @user = User.find(current_user.id)
    if @user.update(user_params)
      redirect_to "/events/"
    else
      flash[:errors] = ['invalid field entry']
      redirect_to '/users/show'
    end
  end

  def delete
  end

  private
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :location, :state, :password, :password_confirmation)
    end


end
