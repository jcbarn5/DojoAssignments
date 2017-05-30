class EventsController < ApplicationController
  def index
    @events_here = Event.where(state:current_user.state)
    @events_nothere = Event.where.not(state:current_user.state)
    # @attendees = Attend.all

  end

  def new
  end

  def create
    @new_event = Event.create(name: params[:name], date: params[:date], location: params[:location], state: params[:state], user: current_user)
    if @new_event.valid?
        flash[:errors] = ["Event created successfully!!"]
        # Attend.create(user: current_user, event: @new_event)
        redirect_to "/events"
    else
        flash[:errors] = @new_event.errors.full_messages
        redirect_to "/events"
    end
  end

  def show
    @event = Event.find(params[:id])
    @comments = Comment.all
  end

  def edit
    @event = Event.find(params[:id])
    render 'edit.html.erb'
  end

  def update
    @event = Event.find(params[:id])
    if @event.update(event_params)
      redirect_to "/events/"
    else
      flash[:errors] = ['invalid field entry']
      redirect_to :back
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    redirect_to :back

  end

  private
    def event_params
      params.require(:event).permit(:name, :date, :location, :state)
    end

end
