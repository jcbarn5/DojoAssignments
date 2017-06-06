class BuysController < ApplicationController
  def index
  end


  def create
    @product = Product.find(params[:id])
    Buy.create(user: current_user, product: @product)
    Sold.create(user: User.find(@product.user_id), product: @product)
    redirect_to :back
  end


end
