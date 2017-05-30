class ProductsController < ApplicationController
  def index
    @products = Product.all
    @sold = Sold.all
  end

  def create
    @new_product = Product.create(name: params[:name], price: params[:price], user:current_user)
    if @new_product.valid?
      flash[:errors] = ["Product added!!"]
      redirect_to :back
    else
      flash[:errors] = @new_product.errors.full_messages
        redirect_to :back
    end
  end

  def destroy
    @product = Product.find(params[:id])
    @product.destroy
    redirect_to :back
  end
end
