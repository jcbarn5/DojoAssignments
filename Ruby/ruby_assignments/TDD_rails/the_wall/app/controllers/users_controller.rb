class UsersController < ApplicationController
  def index
  end

  def new
    render 'index.html.erb'
  end

  def login
    @user = User.new(name: params[:name])
    @user.save

      session[:user_id] = @user.id
      redirect_to messages_path
  end

  def logout
    reset_session
    redirect_to new_user_path
  end
end
