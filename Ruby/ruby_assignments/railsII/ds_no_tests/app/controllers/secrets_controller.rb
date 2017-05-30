class SecretsController < ApplicationController
  before_action :require_login, only: [:index, :create, :destroy]

  def index
    @secrets = Secret.all
    render 'secrets/index.html.erb'
  end

  def new
  end

  def create
    @user = User.find(session[:user_id])
    @secret = Secret.create(content: params[:content], user: @user)
    if @secret.valid?
      redirect_back
    else
      flash[:errors] = ['invalid combo']
      redirect_to "/users/new/#{@user.id}"
    end
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
    @secret = Secret.find(params[:id])
    @secret.destroy
    redirect_to :back
  end
end
