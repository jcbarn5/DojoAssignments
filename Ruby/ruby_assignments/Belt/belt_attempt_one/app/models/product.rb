class Product < ApplicationRecord
  belongs_to :user

  validates_numericality_of :price, :on => :create
  validates :name, :price, presence: true
  validates :name, length: {minimum: 4}

  has_many :buys
  has_many :solds
  has_many :users_bought, through: :buy, source: :user
  has_many :users_sold, through: :sold, source: :user

end
