class AttendsController < ApplicationController

  # before_action :require_login, only: [:create, :destroy]

  def create
    Attend.create(user: current_user, event: Event.find(params[:id]))
    redirect_to :back
  end

  def destroy
    @attend = Attend.find(params[:id])
    @user = User.find(session[:user_id])
    @attend.destroy if @user == @attend.user
    redirect_to :back

  end
end
