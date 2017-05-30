class Event < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :attends, dependent: :destroy
  has_many :attending, through: :attends, source: :user
  has_many :comments_on, through: :comments, source: :user

  validates :name, :date, :location, :state, presence: true
  # validate :isFuture
  #
  # def isFuture
  #     if date < Date.today
  #         errors.add(:date, "must be in the future")
  #     end
  # end
end
