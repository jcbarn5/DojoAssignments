class UsersController < ApplicationController
  def index
  end

  def show
    @products = Product.all
    @bought = Buy.all
    @total_bought = 0
    @total_sold = 0
    @sold = Sold.all

  end

end
