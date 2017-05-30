class UsersController < ApplicationController

  # def index
  #   render 'new.html.erb'
  # end

  def new
  end

  def show
    @user = User.find(session[:user_id])
    render 'show.html.erb'
  end

  def edit
  end

end
