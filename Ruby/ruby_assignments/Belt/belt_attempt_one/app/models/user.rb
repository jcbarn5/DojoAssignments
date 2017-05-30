class User < ApplicationRecord
  has_secure_password

  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i

  before_create :password, :password_confirmation, presence: true, length: {minimum: 8}
  validates :email, uniqueness: { case_sensitive:false }, format: { with: EMAIL_REGEX}
  validates :first_name, :last_name, :email, presence: true


  has_many :products
  has_many :solds
  has_many :buys
  has_many :products_bought, through: :buys, source: :product
  has_many :products_sold, through: :solds, source: :product
end
