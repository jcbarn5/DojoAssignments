class UsersController < ApplicationController
  def index
  end

  def show
    @products = Product.all
    @bought = Buy.all
    @total = Product.sum(:price)
    @sold = Sold.all
    @user = User.all
  end

  def new
  end

  def create
  end

  def update
  end

  def destroy
  end
end
