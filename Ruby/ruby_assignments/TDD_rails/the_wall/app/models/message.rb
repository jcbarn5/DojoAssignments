class Message < ApplicationRecord
  belongs_to :user
  has_many :comments

  validates :message, presence: true
  validates :message, length: { minimum: 10 }
end
