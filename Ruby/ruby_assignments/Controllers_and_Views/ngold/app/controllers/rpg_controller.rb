class RpgController < ApplicationController
  def index
    session[:gold] ||= 0
    session[:activities] ||= []

    @gold = session[:gold]
    @activities = session[:activities]
  end

  def gold
    if params[:building] == 'farm'
      gold = rand(10..20)
    elsif params[:building] == 'cave'
      gold = rand(5..10)
    elsif params[:building] == 'house'
      gold = rand(2..5)
    elsif params[:building] == 'casino'
      gold = rand(-50..50)
  end

  current_time = Time.now

    if gold > 0
      session[:activities] << "Earned #{gold} golds from the #{params[:building]}! (#{current_time.strftime('%Y/%m/%d %l:%M %P')})"
      session[:gold] += gold
      redirect_to :root

    else
      session[:activities] << "Entered a casino and lost #{gold} golds... Ouch. (#{current_time.strftime('%Y/%m/%d %l:%M %P')})"
      session[:gold] += gold

      redirect_to :root
    end
  end
  def reset
    session.clear
    redirect_to :root

  end
end
