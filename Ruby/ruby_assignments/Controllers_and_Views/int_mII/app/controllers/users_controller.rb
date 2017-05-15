class UsersController < ApplicationController
  def index
    render json: User.all
  end

  def new
    render "new.html.erb"
  end

  def create
    User.create(name: params[:name])
    redirect_to "/users"
  end

  def show
    render json: User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
    render "edit.html.erb"

  end

  def total
    render json: { total: User.count }
  end
end
