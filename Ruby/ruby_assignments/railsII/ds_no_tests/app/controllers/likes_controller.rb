class LikesController < ApplicationController
  before_action :require_login, only: [:create, :destroy]

  def create
    Like.create like_params
    redirect_to '/secrets'
    # redirect_to :back
  end

  def destroy
    @like = Like.find(params[:id])
    @user = User.find(session[:user_id])
    @like.destroy if @user == @like.user
    redirect_to '/secrets'
  end


  private
  def like_params
    params.require(:like).permit(:secret_id).merge(user: User.find(session[:user_id]))
  end
end
