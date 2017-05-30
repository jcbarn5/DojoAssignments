class CommentsController < ApplicationController
  before_action :require_login

  def create
    @event = Event.find(params[:id])
    @comment = Comment.create(user: current_user, event: @event ,content: params[:comment])
    if @comment.valid?
        flash[:errors] = ["Comment added!!"]
        redirect_to :back
    else
        flash[:errors] = @comment.errors.full_messages
        redirect_to :back
    end
  end

end
